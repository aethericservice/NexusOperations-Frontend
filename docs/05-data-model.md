# 05. Data Model

## Design Goals

The data model must support:

- multi-tenant isolation
- business event ingestion
- mixed structured and semi-structured data
- AI-driven analysis across datasets
- alert generation and workflow triggers
- historical trend analysis

## Core Entities

### Tenant
Represents a customer account.

Fields:
- id
- name
- status
- created_at
- updated_at
- settings
- plan

### User
Represents a person with access to the tenant.

Fields:
- id
- tenant_id
- email
- name
- role
- status
- created_at

### Integration
Represents an external system connection.

Fields:
- id
- tenant_id
- name
- type
- auth_config
- sync_interval
- status
- last_sync_at
- created_at

### Customer
Represents a business customer or account.

Fields:
- id
- tenant_id
- external_id
- name
- segment
- status
- risk_score
- created_at
- updated_at

### Order
Represents a business transaction or order.

Fields:
- id
- tenant_id
- external_id
- customer_id
- amount
- status
- created_at
- updated_at

### Payment
Represents payment records or transaction outcomes.

Fields:
- id
- tenant_id
- external_id
- customer_id
- amount
- status
- failure_reason
- created_at

### Ticket / Issue
Represents service or support issue records.

Fields:
- id
- tenant_id
- external_id
- customer_id
- subject
- status
- priority
- created_at
- updated_at
- resolved_at

### Job / Service Appointment
Represents operational work orders or appointments.

Fields:
- id
- tenant_id
- external_id
- customer_id
- assigned_to
- status
- scheduled_at
- completed_at
- sla_deadline

### Inventory Item
Represents stock or service material tracking.

Fields:
- id
- tenant_id
- external_id
- sku
- name
- quantity
- reorder_threshold
- updated_at

### Alert
Represents an operational incident or anomaly.

Fields:
- id
- tenant_id
- type
- severity
- status
- title
- description
- entity_type
- entity_id
- triggered_at
- resolved_at

### Workflow
Represents a rule/action automation definition.

Fields:
- id
- tenant_id
- name
- trigger_type
- trigger_condition
- actions
- enabled
- created_at

### AI Insight
Represents generated summaries or recommendations.

Fields:
- id
- tenant_id
- source_type
- source_id
- summary
- recommendation
- confidence_score
- created_at

## Relationship Overview

- Tenant has many Users
- Tenant has many Integrations
- Tenant has many Customers
- Tenant has many Orders
- Tenant has many Tickets
- Tenant has many Jobs
- Tenant has many Inventory Items
- Tenant has many Alerts
- Tenant has many Workflows
- Tenant has many AI Insights

## Event and Audit Model

The platform should also store:

- raw external event payloads
- normalized event records
- audit trail of changes
- integration sync logs
- workflow execution history
- AI prompt/request logs

This is critical for explainability and debugging.

## Data Quality Principles

- persist raw source data for traceability
- normalize keys before analytics
- track schema version per integration
- keep timestamps consistent across datasets
- deduplicate repeated events
- maintain clear mapping of source to normalized entity

## Example Query Use Cases

- show all open tickets older than 24 hours
- detect revenue drop compared to previous week
- show customers with repeated failed payments
- show no-stock items with active orders
- find jobs with SLA risk today

## Implementation Note

PostgreSQL should be the main transactional database, while Redis and a queue system support ingestion and async analysis. A vector database is optional but useful later for AI retrieval or memory-heavy features.
