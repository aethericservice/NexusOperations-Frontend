# 03. MVP Scope

## Goal of the MVP

Build a product that proves the value of operational AI across multiple SaaS systems without building a general-purpose platform too early.

The MVP must answer three questions clearly:

1. Can the system ingest relevant business data?
2. Can it detect meaningful problems or anomalies?
3. Can it explain the issue and suggest action in plain language?

## MVP Target Customer

Start with one narrow customer type.

Recommended first vertical:

- Service businesses with scheduling, customers, work orders, and support issues

Alternative options:
- e-commerce brands with storefront, payments, support, and inventory data
- agencies with client delivery, billing, and ticket workflows

## MVP Feature Set

### 1. Integration Layer

Core integrations:
- REST API connections
- Webhook ingestion
- Slack notifications
- Stripe or payment platform
- CRM or customer system
- Helpdesk or support system
- Basic internal database or Postgres source

### 2. Unified Data Model

Normalize key entities:
- customer
- order
- payment
- ticket
- service request
- job
- inventory item
- employee or technician
- SLA record

### 3. Dashboard

A simple operational dashboard with:
- revenue and order summaries
- open issues and alerts
- unpaid or failed payments
- active service or ticket escalations
- technician workload summary
- customer risk indicators

### 4. Alerting Engine

Trigger alerts for:
- sales drop vs. expected trend
- failed payments
- delayed or overdue jobs
- unresolved tickets older than threshold
- customer churn signals
- SLA risk
- inventory mismatch or low stock

### 5. AI Assistant

User can ask:
- Why did sales drop this week?
- What customers are at risk?
- Show unresolved issues older than 24 hours.
- Which operations are overloaded right now?
- Why is this ticket escalating?

The answer should combine data and plain-language explanation.

### 6. Workflow Automation

Simple templates such as:
- payment failure → identify customer → notify team → create ticket
- SLA breach → assign owner → notify manager
- unresolved issue older than 24h → escalate to support lead

### 7. Tenant Setup and Admin

- user management
- team roles
- integration configuration
- alert setting management
- tenant-specific configuration

## MVP Non-Goals

Do not build these in the first release:

- full custom workflow designer for every use case
- broad micro-frontend architecture
- widespread industry-specific modules
- advanced predictive modeling across every business domain
- large-scale custom AI agent systems for all business functions

## MVP Success Criteria

The MVP is successful if it can:

- ingest data from 3–5 connectors reliably
- detect at least 3–5 meaningful operational anomalies
- explain issues in customer-friendly language
- support a clear call with a customer
- generate measurable operational value within a few weeks

## MVP Delivery Plan

### Phase 1: Foundation
- multi-tenant architecture
- auth and roles
- connect 3 core systems
- store normalized data
- basic dashboard

### Phase 2: Intelligence
- alerting rules
- AI explanations
- dashboard summaries

### Phase 3: Action Layer
- workflow automation
- notifications
- escalation rules

## Critical Design Decision

Build for one narrow customer and a few crucial use cases, not for every buyer story.

## Recommended Launch Narrative

> OpsPilot AI helps service and operations teams catch problems early, understand the cause, and act before customer impact grows.
