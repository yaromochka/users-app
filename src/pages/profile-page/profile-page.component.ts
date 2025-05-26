import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user/user';
import {NgOptimizedImage} from '@angular/common';
import {BackButtonComponent} from '../../components/back-button/back-button.component';

declare const ymaps: any;

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink,
    BackButtonComponent
  ],
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, AfterViewInit {
  user!: User;
  mapInitialized = false;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.userService.getUser(id).subscribe(user => {
        this.user = user;
        // Инициализировать карту только если DOM уже готов
        if (this.mapInitialized) {
          this.initMap();
        }
      });
    }
  }

  ngAfterViewInit(): void {
    this.mapInitialized = true;
    if (this.user) {
      this.initMap();
    }
  }

  initMap(): void {
    const lat = parseFloat(this.user.address.geo.lat);
    const lng = parseFloat(this.user.address.geo.lng);

    ymaps.ready(() => {
      const map = new ymaps.Map("yandex-map", {
        center: [lat, lng],
        zoom: 13,
        type: 'yandex#map'
      });

      const placemark = new ymaps.Placemark([lat, lng], {
        balloonContent: `${this.user.name}<br>${this.user.address.city}`
      });

      map.geoObjects.add(placemark);
    });
  }


  deleteUser(id: number): void {
    this.userService.deleteUser(String(id)).subscribe({
      next: (response) => {
        console.log('Ответ от сервера:', response);
        alert('Пользователь успешно удалён!');
        this.router.navigate(['/users']);
      },
      error: (error) => {
        console.error('Ошибка при удалении пользователя:', error);
        alert(`Ошибка при удалении пользователя: ${error.message || 'Неизвестная ошибка'}`);
      }
    });
  }
}
