# 04. Technical Architecture

## Overview

The platform is built as a multi-tenant SaaS system with:

- Angular frontend
- NestJS or Express backend
- PostgreSQL as core transactional database
- Redis for caching and queues
- BullMQ for async jobs
- WebSocket support for live updates
- integrations for SaaS data ingestion
- AI layer for analysis and recommendations
- observability and monitoring for reliability

## High-Level Architecture

```text
Client Applications
  ├─ Angular Web App
  ├─ Admin Portal
  └─ API Consumers

API Layer
  └─ NestJS / Express REST API

Core Services
  ├─ Auth & Tenant Management
  ├─ Integration Service
  ├─ Data Sync Service
  ├─ Alert Engine
  ├─ AI Analysis Service
  ├─ Workflow Orchestrator
  └─ Notification Service

Data Stores
  ├─ PostgreSQL
  ├─ Redis
  └─ Vector Database (for AI memory / RAG)

External Systems
  ├─ Shopify / Stripe / Salesforce / Slack / etc.
  ├─ Webhooks
  └─ Custom APIs
```

## Frontend

### Recommended stack
- Angular
- Angular Material
- NgRx or Signals for state management
- RxJS for streaming logic
- modular design for later micro-frontends

### Frontend responsibilities
- dashboards and business summaries
- alert list and detail views
- AI assistant interface
- workflow management
- tenant admin screens
- configuration UI for integrations

## Backend

### Recommended stack
- Node.js
- TypeScript
- NestJS preferred for structure and modularity
- PostgreSQL for persistence
- Redis for queueing and caching
- BullMQ for background job processing

### Major backend domains
- tenant management
- auth and permissions
- connectors and integrations
- event ingestion pipeline
- analytics and anomaly calculation
- AI request orchestration
- workflow execution engine
- notifications and audit trails

## Data Flow

1. External systems push or sync data via API or webhook.
2. Integration service validates and normalizes data.
3. Data is persisted into tenant-specific tables.
4. Alerting and analytics workers process the latest data.
5. AI summarization and recommendation services generate insights.
6. Notifications and automation actions are delivered.
7. Users view results in dashboards and chat UI.

## Multi-Tenant Model

The platform should be built with tenant isolation in mind.

### Tenant-level scope
- users
- data stores
- workflows
- AI settings
- connectors
- alerts and policies
- notifications

### Security requirements
- tenant-scoped database access
- strict per-tenant encryption and storage strategy
- role-based access control
- audit logs for user and system actions
- secure secret storage for third-party integrations

## AI Architecture

### AI components
- Large language model API access
- domain-specific prompts
- summarization and explanation engine
- anomaly context builder
- workflow recommendation engine
- optional RAG pattern for reference data

### Recommended approach
- keep AI logic behind controlled service boundaries
- feed precise structured data into prompts
- validate outputs with rules and evidence
- avoid excessive autonomous actions in the first release

## Integration Architecture

### Connector model
Each integration should expose a common contract:

- auth configuration
- connection health status
- sync schedule
- transformation mapping
- retry logic
- rate-limit handling
- webhook event support

### Integration design principles
- consistent connector lifecycle
- health monitoring per integration
- normalization before analytics
- data retention and audit trail

## Reliability and Observability

### Essential operational tools
- OpenTelemetry
- structured logs
- metric tracking
- health checks
- job monitoring
- retry and dead-letter queue handling
- alerting for system failures

### Reliability requirements
- idempotent event processing
- retry-safe job execution
- deduplication for repeated webhook events
- data quality checks before AI analysis

## Deployment Model

### Initial deployment
- Docker-based local environment
- cloud deployment on AWS, Azure, or GCP
- Postgres and Redis managed services

### Later expansion
- Kubernetes
- CI/CD pipelines
- blue/green or rolling deployments
- environment-based configuration management

## Scalability Strategy

- separate ingestion, analysis, and automation services
- queue asynchronous jobs
- isolate heavy AI processes
- maintain clear service boundaries for future modular growth
- scale tenants independently through architecture and config

## Critical Engineering Principle

Do not build a giant monolith without boundaries. Keep integration, analytics, AI, and workflow orchestration separate enough to evolve.
