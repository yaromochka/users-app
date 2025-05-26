import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {NgIf} from '@angular/common';
import {BackButtonComponent} from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-new-person-page',
  templateUrl: './new-person-page.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf,
    BackButtonComponent
  ],
  styleUrls: ['./new-person-page.component.scss']
})
export class NewPersonPageComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode = false;
  userId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: [''],
        zipcode: [''],
        geo: this.fb.group({
          lat: [''],
          lng: ['']
        })
      }),
      phone: [''],
      website: [''],
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: ['']
      })
    });

    this.userId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.userId;

    if (this.isEditMode) {
      this.userService.getUser(this.userId!).subscribe(user => {
        this.userForm.patchValue(user);
        this.userForm.markAsPristine(); // чтобы кнопка осталась неактивной до изменений
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert('Форма заполнена некорректно.');
      return;
    }

    if (!this.userForm.dirty) {
      alert('Вы не внесли изменений.');
      return;
    }

    const userData = this.userForm.value;

    if (this.isEditMode && this.userId) {
      this.userService.updateUser(this.userId, userData).subscribe({
        next: () => {
          alert('Пользователь обновлён.');
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Ошибка при обновлении:', err);
          alert('Ошибка при обновлении пользователя.');
        }
      });
    } else {
      this.userService.addUser(userData).subscribe({
        next: () => {
          alert('Пользователь добавлен.');
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Ошибка при добавлении:', err);
          alert('Ошибка при добавлении пользователя.');
        }
      });
    }
  }
}
