import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  email = 'demo@acme.ai';
  password = 'password';
  isLoading = false;
  errorMessage = '';

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // If already authenticated, redirect to organizations
    if (this.auth.isAuthenticated()) {
      void this.auth['router'].navigateByUrl('/organizations');
    }
  }

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.auth.login(this.email, this.password);

    // Reset loading state after a delay (since login is async)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
