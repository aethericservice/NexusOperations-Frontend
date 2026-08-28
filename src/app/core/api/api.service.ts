import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Organization, Stat, Activity, LandingMetric, User, AuthResponse } from '../../shared/models/app.models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = environment.apiUrl;
  private endpoints = environment.endpoints;

  constructor(private http: HttpClient) {}

  // Generic methods
  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: unknown) {
    return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: unknown) {
    return this.http.put<T>(url, body);
  }

  // Authentication endpoints
  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}${this.endpoints.login}`, { email, password });
  }

  register(email: string, password: string, name: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}${this.endpoints.register}`, { email, password, name });
  }

  forgotPassword(email: string) {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}${this.endpoints.forgotPassword}`, { email });
  }

  logout() {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}${this.endpoints.logout}`, {});
  }

  // Organization endpoints
  getOrganizations() {
    return this.http.get<Organization[]>(`${this.apiUrl}${this.endpoints.organizations}`);
  }

  selectOrganization(id: string) {
    const url = this.endpoints.selectOrganization.replace(':id', id);
    return this.http.put<{ success: boolean }>(`${this.apiUrl}${url}`, {});
  }

  createOrganization(organization: Partial<Organization>) {
    return this.http.post<Organization>(`${this.apiUrl}${this.endpoints.organizations}`, organization);
  }

  // Dashboard endpoints
  getDashboardStats() {
    return this.http.get<Stat[]>(`${this.apiUrl}${this.endpoints.dashboardStats}`);
  }

  getDashboardHealth() {
    return this.http.get<{ name: string; value: number }[]>(`${this.apiUrl}${this.endpoints.dashboardHealth}`);
  }

  getDashboardActivities() {
    return this.http.get<Activity[]>(`${this.apiUrl}${this.endpoints.dashboardActivities}`);
  }

  // Landing page endpoints
  getLandingMetrics() {
    return this.http.get<LandingMetric[]>(`${this.apiUrl}${this.endpoints.landingMetrics}`);
  }
}
