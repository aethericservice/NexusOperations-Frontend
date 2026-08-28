import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../shared/models/app.models';
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  collapsed = input(true);
  groups: { title: string; items: NavItem[] }[] = [
    {
      title: 'Workspace',
      items: [
        { label: 'Dashboard', icon: '⌂', route: '/dashboard' },
        { label: 'AI Assistant', icon: '✦', route: '/ai-assistant' },
      ],
    },
    {
      title: 'Operations',
      items: [
        { label: 'Task Automation', icon: '✓', route: '/operations/tasks' },
        { label: 'Workflows', icon: '⌘', route: '/operations/workflows' },
        { label: 'Process Monitor', icon: '◉', route: '/operations/processes' },
        { label: 'Approvals', icon: '◇', route: '/operations/approvals', badge: '3' },
      ],
    },
    {
      title: 'Intelligence',
      items: [
        { label: 'Integrations', icon: '⛓', route: '/integrations' },
        { label: 'API Management', icon: '⌁', route: '/integrations/api' },
        { label: 'Analytics', icon: '▥', route: '/analytics' },
        { label: 'Reports', icon: '▤', route: '/analytics/reports' },
        { label: 'AI Insights', icon: '◈', route: '/analytics/insights' },
        { label: 'Alerts', icon: '♢', route: '/alerts', badge: '5' },
      ],
    },
    {
      title: 'Administration',
      items: [
        { label: 'Users', icon: '♙', route: '/users' },
        { label: 'Roles & Permissions', icon: '♜', route: '/users/roles' },
        { label: 'General Settings', icon: '⚙', route: '/settings/general' },
        { label: 'Plans & Billing', icon: '▰', route: '/settings/billing' },
        { label: 'Security', icon: '♢', route: '/settings/security' },
        { label: 'Notifications', icon: '♧', route: '/settings/notifications' },
        { label: 'Audit Logs', icon: '☷', route: '/settings/audit' },
        { label: 'My Profile', icon: '●', route: '/settings/profile' },
      ],
    },
  ];
}
