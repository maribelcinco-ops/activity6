import { Component } from '@angular/core';
import { AddUsers } from './pages/admin/add-users/add-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddUsers],
  templateUrl: './app.html'
})

export class App{}