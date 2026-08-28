import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/api/api.service';
import { LandingMetric } from '../../shared/models/app.models';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  metrics: LandingMetric[] = [
    {
      icon: '♟',
      value: '10K+',
      label: 'Active Users',
      note: 'Trusted by operations teams worldwide',
    },
    {
      icon: '✚',
      value: '250+',
      label: 'Integrations',
      note: 'Connect your favorite tools and systems',
    },
    {
      icon: '◆',
      value: '99.9%',
      label: 'Uptime',
      note: 'Enterprise-grade reliability you can count on',
    },
    {
      icon: '◔',
      value: '24/7',
      label: 'AI Support',
      note: 'Intelligent assistance whenever you need it',
    },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadMetrics();
  }

  private loadMetrics(): void {
    this.api.getLandingMetrics().subscribe({
      next: (metrics) => {
        this.metrics = metrics;
      },
      error: (error) => {
        console.error('Failed to load landing metrics:', error);
        // metrics already initialized with defaults
      },
    });
  }
}
