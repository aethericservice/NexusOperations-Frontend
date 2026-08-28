export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  endpoints: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    organizations: '/organizations',
    selectOrganization: '/organizations/:id/select',
    dashboardStats: '/dashboard/stats',
    dashboardHealth: '/dashboard/health',
    dashboardActivities: '/dashboard/activities',
    landingMetrics: '/landing/metrics',
  },
};
