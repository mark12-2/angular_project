import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  template: `
  <h2>Login</h2>
  <form (ngSubmit)="onLogin()">
    <input type="email" [(ngModel)]="email" placeholder="Email" name="email" required />
    <input type="password" [(ngModel)]="password" placeholder="Password" name="password" required />
    <button type="submit">Login</button>
  </form>
  <p *ngIf="error" style="color: red;">{{ error }}</p>
`
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  async onLogin() {
    const { data, error } = await this.supabase.signIn(this.email, this.password);
    if (error) {
      this.error = error.message;
    } else {
      console.log('Logged in:', data);
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    }
  }
}
