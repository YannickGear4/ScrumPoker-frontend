import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-page',
  standalone: true,
  imports: [],
  templateUrl: './username-page.component.html',
  styleUrl: './username-page.component.scss'
})
export class UsernamePageComponent {

  constructor(private readonly router: Router){

  }

  createAndNavigate() {
    this.router.navigate(['room-page']);
    const usernameInput = document.getElementById('username-input') as HTMLInputElement;
    const username = usernameInput.value.trim();
    
    if (username) {
      localStorage.setItem('username', username);

      console.log(`Benutzername "${username}" wurde gespeichert.`);
    } else {
      console.warn('Benutzername darf nicht leer sein.');
    }

  }
}
