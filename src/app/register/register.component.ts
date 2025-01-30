import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="onRegister()">
      <input type="email" [(ngModel)]="email" placeholder="Email" name="email" required />
      <input type="password" [(ngModel)]="password" placeholder="Password" name="password" required />
      <button type="submit">Register</button>
    </form>
    <p *ngIf="error" style="color: red;">{{ error }}</p>
  `,
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private supabase: SupabaseService) {}

  async onRegister() {
    const { data, error } = await this.supabase.signUp(this.email, this.password);
    if (error) {
      this.error = error.message;
    } else {
      console.log('Registered:', data);
      // Redirect or update UI
    }
  }
}
