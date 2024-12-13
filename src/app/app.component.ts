import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsernamePageComponent } from "./username-page/username-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsernamePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ScrumPoker-frontend';
}
