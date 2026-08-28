import { ChangeDetectionStrategy, Component, computed, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ApiService } from '../../core/api/api.service';
import { Organization } from '../../shared/models/app.models';

@Component({
  selector: 'app-organization-selector',
  imports: [FormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization-selector.component.html',
  styleUrl: './organization-selector.component.scss',
})
export class OrganizationSelectorComponent implements OnInit {
  readonly search = signal('');
  readonly selectedId = signal('acme');
  readonly organizations = signal<Organization[]>([]);
  readonly filteredOrganizations = computed(() => {
    const query = this.search().toLowerCase().trim();
    return this.organizations().filter((org) =>
      `${org.name} ${org.workspace}`.toLowerCase().includes(query),
    );
  });

  constructor(
    public readonly auth: AuthService,
    private readonly router: Router,
    private readonly api: ApiService,
  ) {}

  ngOnInit(): void {
    this.loadOrganizations();
  }

  private loadOrganizations(): void {
    this.api.getOrganizations().subscribe({
      next: (organizations) => {
        this.organizations.set(organizations);
        const currentOrg = organizations.find((org) => org.current);
        if (currentOrg) {
          this.selectedId.set(currentOrg.id);
        }
      },
      error: (error) => {
        console.error('Failed to load organizations:', error);
        // Fallback to default organizations if API fails
        this.organizations.set([
          {
            id: 'acme',
            name: 'Acme Corporation',
            workspace: 'Enterprise Operations Workspace',
            icon: 'A',
            color: '#6852f2',
            current: true,
          },
        ]);
      },
    });
  }

  choose(org: Organization): void {
    this.selectedId.set(org.id);
    this.api.selectOrganization(org.id).subscribe({
      next: () => {
        localStorage.setItem('opsai_organization', JSON.stringify(org));
        void this.router.navigateByUrl('/dashboard');
      },
      error: (error) => {
        console.error('Failed to select organization:', error);
        // Fallback: navigate anyway but log the error
        localStorage.setItem('opsai_organization', JSON.stringify(org));
        void this.router.navigateByUrl('/dashboard');
      },
    });
  }

  addOrganization(): void {
    const newOrg: Partial<Organization> = {
      name: `New Organization ${this.organizations().length + 1}`,
      workspace: 'New Operations Workspace',
      icon: '+',
      color: '#8a67f7',
    };

    this.api.createOrganization(newOrg).subscribe({
      next: (createdOrg) => {
        this.organizations.update((items) => [...items, createdOrg]);
      },
      error: (error) => {
        console.error('Failed to create organization:', error);
      },
    });
  }
}
