# NetSuite Portfolio – Interview Cheat Sheet

## Core Story

“I built a NetSuite implementation portfolio that demonstrates real-world SuiteScript development, functional design, and SOC 2–aware architecture thinking. It covers credit governance, customer onboarding automation, inventory visibility, and revenue processing.”

## Key Talking Points

**1. Credit Governance**

- Problem: Sales orders exceeded customer credit limits; finance had to manually intervene.
- Solution: `ue_customer_credit_validation.js` checks credit limit, balance, and order total before submit.
- Impact: Automated enforcement of credit policy; fewer risky orders.

**2. Customer Integration**

- Problem: Customer onboarding was manual and slow; external systems couldn’t push data into NetSuite.
- Solution: `rl_customer_create.js` RESTlet accepts JSON payloads and creates customers.
- Impact: Faster onboarding, cleaner data, integration-ready design.

**3. Inventory Visibility**

- Problem: Warehouse relied on spreadsheets; no real-time view of stock.
- Solution: `sl_inventory_dashboard.js` Suitelet renders a dashboard from a saved search.
- Impact: Real-time visibility, better operational decisions.

**4. Revenue Processing**

- Problem: Revenue fields needed consistent recalculation at scale.
- Solution: `mr_revenue_recalc.js` Map/Reduce script updates invoices in batch.
- Impact: Consistent financial data, governance-safe processing.

## SOC 2–Aware Architecture

- Emphasize:
  - Role-based access and least privilege in NetSuite.
  - No secrets in code; configuration handled outside the repo.
  - Deterministic logic and version-controlled changes.
  - Awareness of Security, Availability, Confidentiality, Processing Integrity, and Privacy.

## Closing Line

“This portfolio shows that I don’t just write SuiteScript—I think in terms of business problems, system design, and compliance-aware architecture. I can walk from requirements to code to impact.”
