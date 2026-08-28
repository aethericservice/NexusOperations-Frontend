import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
@Component({
  selector: 'app-workspace-page',
  imports: [PageHeaderComponent, FilterBarComponent],
  templateUrl: './workspace-page.component.html',
  styleUrl: './workspace-page.component.scss',
})
export class WorkspacePageComponent {
  private route = inject(ActivatedRoute);
  private configs: Record<
    string,
    {
      eyebrow: string;
      title: string;
      subtitle: string;
      action: string;
      cards: { title: string; text: string; icon: string; tag: string }[];
    }
  > = new Proxy({}, { get: (_, key: string) => this.make(key) });
  config = computed(() => this.configs[this.route.snapshot.data['page'] ?? 'workspace']);
  private make(key: string) {
    const names: Record<string, string> = {
      assistant: 'AI Assistant',
      tasks: 'Task Automation',
      workflows: 'Workflow Builder',
      processes: 'Process Monitor',
      approvals: 'Approval Center',
      integrations: 'Integration Hub',
      api: 'API Management',
      analytics: 'Business Analytics',
      reports: 'Reports',
      insights: 'AI Insights',
      alerts: 'Alerts & Incidents',
      users: 'User Management',
      roles: 'Roles & Permissions',
      general: 'General Settings',
      billing: 'Plans & Billing',
      security: 'Security Center',
      notifications: 'Notification Settings',
      audit: 'Audit Logs',
      profile: 'My Profile',
    };
    const title = names[key] ?? 'Workspace';
    return {
      eyebrow: key.includes('setting') ? 'Configuration' : 'Operations',
      title,
      subtitle: `Manage ${title.toLowerCase()} across your organization from one intelligent workspace.`,
      action: key === 'assistant' ? 'Start new chat' : `New ${title.split(' ')[0]}`,
      cards: [
        {
          title: `Active ${title}`,
          text: 'Live, healthy and processing business events.',
          icon: '⚡',
          tag: 'ACTIVE',
        },
        {
          title: 'Requires attention',
          text: 'Items waiting for review or corrective action.',
          icon: '◇',
          tag: '3 NEW',
        },
        {
          title: 'Performance',
          text: 'Delivery, quality and efficiency summary.',
          icon: '↗',
          tag: '+12.4%',
        },
      ],
    };
  }
}
