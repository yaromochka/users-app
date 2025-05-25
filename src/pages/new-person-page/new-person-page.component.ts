import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-person-page',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './new-person-page.component.html',
  styleUrl: './new-person-page.component.scss'
})
export class NewPersonPageComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

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
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe({
        next: (response) => {
          console.log('Ответ от сервера:', response);
          alert('Пользователь успешно добавлен!');
          this.router.navigate(['/users']);
        },
        error: (error) => {
          console.error('Ошибка при добавлении пользователя:', error);
          alert(`Ошибка при добавлении пользователя: ${error.message || 'Неизвестная ошибка'}`);
        }
      });
    } else {
      alert('Пожалуйста, заполните форму корректно.');
    }
  }
}
