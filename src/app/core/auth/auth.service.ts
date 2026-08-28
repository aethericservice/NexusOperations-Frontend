import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { User } from '../../shared/models/app.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'opspilot_token';
  private readonly sessionKey = 'opspilot_session';
  readonly user = signal<User | null>(this.readSession());

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  login(email: string, password: string = 'password'): void {
    this.api.login(email, password).subscribe({
      next: (response) => {
        this.setSession(response.user, response.token);
        void this.router.navigateByUrl('/organizations');
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Fallback to mock login for demo purposes
        this.loginDemo(email);
      },
    });
  }

  private loginDemo(email: string): void {
    const user: User = { name: 'Arpita Das', email };
    this.setSession(user);
    void this.router.navigateByUrl('/organizations');
  }

  logout(): void {
    this.api.logout().subscribe({
      next: () => {
        this.clearSession();
      },
      error: () => {
        // Clear session even if API call fails
        this.clearSession();
      },
    });
  }

  forgotPassword(email: string): void {
    this.api.forgotPassword(email).subscribe({
      next: () => {
        console.log('Password reset email sent');
      },
      error: (error) => {
        console.error('Failed to send password reset email:', error);
      },
    });
  }

  isAuthenticated(): boolean {
    return !!this.user();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setSession(user: User, token?: string): void {
    localStorage.setItem(this.sessionKey, JSON.stringify(user));
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    }
    this.user.set(user);
  }

  private clearSession(): void {
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem(this.tokenKey);
    this.user.set(null);
    void this.router.navigateByUrl('/');
  }

  private readSession(): User | null {
    try {
      return JSON.parse(localStorage.getItem(this.sessionKey) ?? 'null');
    } catch {
      return null;
    }
  }
}
