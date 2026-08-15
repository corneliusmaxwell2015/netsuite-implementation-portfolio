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

+-------------------------+          +---------------------------+
| External Systems (CRM,  |  HTTPS   |   NetSuite RESTlet        |
| Website, Partner Portal)|--------->|   rl_customer_create.js   |
+-------------------------+          +---------------------------+

|

v

+------------------+
| Customer Records |
+------------------+


+------------------+       Submit SO        +---------------------------+
| Sales Rep (UI)   |----------------------->| UE Script                 |
| NetSuite UI      |                        | ue_customer_credit_...   |
+------------------+                        +---------------------------+

|

v

+------------------+
| Credit Decision  |
| (Pass / Block)   |
+------------------+

|

v

+---------------------------+
| Workflow Action Script    |
| wa_credit_violation_...   |
+---------------------------+

|

v

+---------------------------+
| Credit Log Custom Record  |
+---------------------------+


+------------------+   Menu → Dashboard   +---------------------------+
| Warehouse Manager|--------------------->| Suitelet                  |
| NetSuite UI      |                      | sl_inventory_dashboard.js |
+------------------+                      +---------------------------+

|

v

+---------------------------+
| Saved Search: Inventory   |
+---------------------------+


+---------------------------+
| Map/Reduce Script         |
| mr_revenue_recalc.js      |
+---------------------------+

|

v

+---------------------------+
| Invoice Records           |
+---------------------------+


---

## 4. Data Flow Summary

### Customer Creation Flow
1. External system sends JSON payload → RESTlet  
2. RESTlet validates fields  
3. Customer record created  
4. Internal ID returned  

### Credit Governance Flow
1. Sales rep submits Sales Order  
2. UE script loads customer  
3. Credit limit evaluated  
4. Pass or block  
5. Workflow logs violation  

### Inventory Dashboard Flow
1. Warehouse manager opens Suitelet  
2. Saved search runs  
3. Results rendered in UI  

### Revenue Processing Flow
1. Map/Reduce loads invoices  
2. Revenue recalculated  
3. Updated invoices saved  

---

## 5. Compliance Notes

- No sensitive data stored in repository.
- All examples are sanitized and generic.
- Architecture demonstrates SOC 2–aligned thinking for enterprise environments.
