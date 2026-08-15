# Functional Requirements

## 1. Credit Governance

**FR-1.1** System must prevent sales orders that exceed customer credit limits.  
**FR-1.2** Error messages must be clear and actionable for sales reps.  
**FR-1.3** Credit exposure must be calculated using:
- Customer credit limit
- Current balance
- Sales order total

**FR-1.4** Credit violations must be logged for reporting and audit purposes.

## 2. Customer Integration

**FR-2.1** External systems must be able to create customers via a RESTlet endpoint.  
**FR-2.2** Required fields:
- Company name
- Email

**FR-2.3** API must return the internal ID of the created customer.  
**FR-2.4** Invalid or incomplete payloads must be rejected with a clear error response.

## 3. Inventory Dashboard

**FR-3.1** Dashboard must show item availability in real time.  
**FR-3.2** Data must be sourced from a saved search.  
**FR-3.3** UI must be accessible from the NetSuite navigation menu.  
**FR-3.4** Dashboard must support at least 50 items without noticeable performance degradation.

## 4. Revenue Processing

**FR-4.1** System must recalculate revenue-related fields on invoices.  
**FR-4.2** Processing must run in batch mode using Map/Reduce.  
**FR-4.3** Script must respect NetSuite governance limits.  
**FR-4.4** Updated invoices must be saved with consistent logic.

## 5. SOC 2–Aligned Non-Functional Requirements

**NFR-5.1 Security**  
- Access to scripts and deployments must be controlled via role-based access and version control.
- No secrets or credentials are stored in code.

**NFR-5.2 Availability**  
- Batch jobs (Map/Reduce) must be restartable without data corruption.
- Failures should be logged for review.

**NFR-5.3 Confidentiality**  
- Assumes platform-level encryption at rest and in transit.
- Customer and financial data are treated as confidential in all flows.

**NFR-5.4 Processing Integrity**  
- Credit checks and revenue calculations must be deterministic and testable.
- Changes to logic must go through peer review and documented deployment steps.

**NFR-5.5 Privacy**  
- Customer data fields (e.g., email) are handled as PII and documented in data flow diagrams.
