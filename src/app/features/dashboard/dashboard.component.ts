import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card.component';
import { ChartCardComponent } from '../../shared/components/chart-card/chart-card.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { Activity, Stat } from '../../shared/models/app.models';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [PageHeaderComponent, StatCardComponent, ChartCardComponent, DataTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stats: Stat[] = [];
  health: { name: string; value: number }[] = [];
  activities: Activity[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    // Load stats
    this.api.getDashboardStats().subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (error) => {
        console.error('Failed to load dashboard stats:', error);
        this.setDefaultStats();
      },
    });

    // Load health metrics
    this.api.getDashboardHealth().subscribe({
      next: (health) => {
        this.health = health;
      },
      error: (error) => {
        console.error('Failed to load health metrics:', error);
        this.setDefaultHealth();
      },
    });

    // Load activities
    this.api.getDashboardActivities().subscribe({
      next: (activities) => {
        this.activities = activities;
      },
      error: (error) => {
        console.error('Failed to load activities:', error);
        this.setDefaultActivities();
      },
    });
  }

  private setDefaultStats(): void {
    this.stats = [
      { label: 'Active automations', value: '128', change: '12.5%', icon: '⚡', tone: 'violet' },
      { label: 'Tasks completed', value: '24.8K', change: '18.2%', icon: '✓', tone: 'green' },
      { label: 'Hours saved', value: '1,284', change: '9.4%', icon: '◷', tone: 'cyan' },
      { label: 'Cost efficiency', value: '$42.6K', change: '15.1%', icon: '↗', tone: 'orange' },
    ];
  }

  private setDefaultHealth(): void {
    this.health = [
      { name: 'Automation success', value: 97 },
      { name: 'Integration uptime', value: 99 },
      { name: 'SLA compliance', value: 91 },
    ];
  }

  private setDefaultActivities(): void {
    this.activities = [
      {
        name: 'Invoice reconciliation',
        type: 'Automation',
        owner: 'Finance Ops',
        status: 'Active',
        time: '2 min ago',
      },
      {
        name: 'Customer churn analysis',
        type: 'AI Insight',
        owner: 'Growth Team',
        status: 'Active',
        time: '18 min ago',
      },
      {
        name: 'Vendor onboarding',
        type: 'Workflow',
        owner: 'Procurement',
        status: 'Pending',
        time: '42 min ago',
      },
      {
        name: 'CRM daily sync',
        type: 'Integration',
        owner: 'RevOps',
        status: 'Failed',
        time: '1 hour ago',
      },
    ];
  }
}
