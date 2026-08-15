# NetSuite Implementation Architecture (SOC 2–Aligned)

## Overview
This document outlines the architecture used in the NetSuite Implementation Portfolio, including SuiteScript components, data flows, and SOC 2 Trust Service Criteria alignment.

---

## 1. System Components

### Application Layer
- SuiteScript 2.1 Scripts
  - User Event Scripts
  - Client Scripts
  - Suitelets
  - RESTlets
  - Map/Reduce Scripts
  - Workflow Action Scripts
  - Scheduled Scripts
  - Portlet Scripts

### Data Layer
- NetSuite Records (Customer, Invoice, Item, Sales Order)
- Saved Searches
- Custom Records (Credit Log)

### Integration Layer
- RESTlet API for external system integration
- SuiteTalk OAuth example

---

## 2. SOC 2 Trust Service Criteria Alignment

### Security
- Role-based access control (RBAC) assumed within NetSuite.
- No credentials stored in code.
- All external communication assumed encrypted via HTTPS/TLS.

### Availability
- Map/Reduce scripts designed to be restartable.
- Suitelets and RESTlets follow NetSuite governance limits.
- Scheduled scripts provide predictable execution windows.

### Processing Integrity
- Credit validation logic is deterministic and testable.
- Revenue recalculation follows consistent formula.
- Workflow Action Scripts ensure auditability.

### Confidentiality
- Customer and financial data treated as confidential.
- No sensitive data stored in repository.
- NetSuite platform provides encryption at rest and in transit.

### Privacy
- Customer PII (email, company name) handled through documented flows.
- RESTlet validates required fields to prevent malformed data.

---

## 3. High-Level Architecture Diagram

