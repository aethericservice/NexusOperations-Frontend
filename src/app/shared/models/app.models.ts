export interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: string;
}

export interface Organization {
  id: string;
  name: string;
  workspace: string;
  icon: string;
  color: string;
  current?: boolean;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  token?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  tone: 'violet' | 'cyan' | 'green' | 'orange';
}

export interface TableColumn {
  key: string;
  label: string;
}

export interface Activity {
  name: string;
  type: string;
  owner: string;
  status: string;
  time: string;
}

export interface LandingMetric {
  icon: string;
  value: string;
  label: string;
  note: string;
}
