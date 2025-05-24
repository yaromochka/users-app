import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserCardComponent} from '../components/user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-app';
}
