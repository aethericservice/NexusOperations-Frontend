import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const loadWorkspacePage = () =>
  import('./shared/components/workspace-page.component').then(
    ({ WorkspacePageComponent }) => WorkspacePageComponent,
  );

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/landing/landing.component').then(
        ({ LandingComponent }) => LandingComponent,
      ),
    title: 'OpsAI — AI-Powered Business Operations',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login.component').then(({ LoginComponent }) => LoginComponent),
    title: 'Sign in',
  },
  {
    path: 'organizations',
    loadComponent: () =>
      import('./features/organizations/organization-selector.component').then(
        ({ OrganizationSelectorComponent }) => OrganizationSelectorComponent,
      ),
    canActivate: [authGuard],
    title: 'Select your organization',
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component').then(({ ShellComponent }) => ShellComponent),
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            ({ DashboardComponent }) => DashboardComponent,
          ),
        title: 'Executive Dashboard',
      },
      {
        path: 'ai-assistant',
        loadComponent: loadWorkspacePage,
        data: { page: 'assistant' },
        title: 'AI Assistant',
      },
      {
        path: 'operations/tasks',
        loadComponent: loadWorkspacePage,
        data: { page: 'tasks' },
        title: 'Task Automation',
      },
      {
        path: 'operations/workflows',
        loadComponent: loadWorkspacePage,
        data: { page: 'workflows' },
        title: 'Workflows',
      },
      {
        path: 'operations/processes',
        loadComponent: loadWorkspacePage,
        data: { page: 'processes' },
        title: 'Process Monitor',
      },
      {
        path: 'operations/approvals',
        loadComponent: loadWorkspacePage,
        data: { page: 'approvals' },
        title: 'Approvals',
      },
      {
        path: 'integrations',
        loadComponent: loadWorkspacePage,
        data: { page: 'integrations' },
        title: 'Integrations',
      },
      {
        path: 'integrations/api',
        loadComponent: loadWorkspacePage,
        data: { page: 'api' },
        title: 'API Management',
      },
      {
        path: 'analytics',
        loadComponent: loadWorkspacePage,
        data: { page: 'analytics' },
        title: 'Business Analytics',
      },
      {
        path: 'analytics/reports',
        loadComponent: loadWorkspacePage,
        data: { page: 'reports' },
        title: 'Reports',
      },
      {
        path: 'analytics/insights',
        loadComponent: loadWorkspacePage,
        data: { page: 'insights' },
        title: 'AI Insights',
      },
      {
        path: 'alerts',
        loadComponent: loadWorkspacePage,
        data: { page: 'alerts' },
        title: 'Alerts',
      },
      {
        path: 'users',
        loadComponent: loadWorkspacePage,
        data: { page: 'users' },
        title: 'User Management',
      },
      {
        path: 'users/roles',
        loadComponent: loadWorkspacePage,
        data: { page: 'roles' },
        title: 'Roles & Permissions',
      },
      {
        path: 'settings/general',
        loadComponent: loadWorkspacePage,
        data: { page: 'general' },
        title: 'General Settings',
      },
      {
        path: 'settings/billing',
        loadComponent: loadWorkspacePage,
        data: { page: 'billing' },
        title: 'Plans & Billing',
      },
      {
        path: 'settings/security',
        loadComponent: loadWorkspacePage,
        data: { page: 'security' },
        title: 'Security',
      },
      {
        path: 'settings/notifications',
        loadComponent: loadWorkspacePage,
        data: { page: 'notifications' },
        title: 'Notifications',
      },
      {
        path: 'settings/audit',
        loadComponent: loadWorkspacePage,
        data: { page: 'audit' },
        title: 'Audit Logs',
      },
      {
        path: 'settings/profile',
        loadComponent: loadWorkspacePage,
        data: { page: 'profile' },
        title: 'My Profile',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
