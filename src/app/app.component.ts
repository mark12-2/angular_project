import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Supabase Auth</h1>
    <nav>
      <a routerLink="/login">Login</a> | <a routerLink="/register">Register</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
