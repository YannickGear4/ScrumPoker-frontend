import { Routes } from '@angular/router';
import { UsernamePageComponent } from './username-page/username-page.component';
import { RoomPageComponent } from './room-page/room-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/username', pathMatch: 'full' },
    { path: 'username', component: UsernamePageComponent },
    { path: 'room-page', component: RoomPageComponent },
  ]