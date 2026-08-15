# NetSuite Implementation Portfolio

A clean, professional SuiteScript 2.1 portfolio demonstrating NetSuite implementation skills, implementation design, and SOC 2–aware architecture thinking.

## Overview

This repository showcases:

- SuiteScript 2.1 scripts (UE, Client, Suitelet, RESTlet, Map/Reduce, Workflow Action)
- Saved searches for operational reporting
- Basic SuiteQL examples
- Documentation for implementation case study and functional requirements
- SOC 2–aligned architectural considerations (security, availability, confidentiality)

## Modules

- **Credit Governance**
  - `ue_customer_credit_validation.js`
  - `wa_credit_violation_logger.js`
  - `customer_credit_risk.json`
- **Customer Integration**
  - `rl_customer_create.js`
  - `suitetalk_oauth_example.js`
- **Inventory Visibility**
  - `sl_inventory_dashboard.js`
  - `inventory_low.json`
- **Revenue Processing**
  - `mr_revenue_recalc.js`
  - `suiteql_examples.sql`

## Architecture & SOC 2 Considerations

This portfolio is designed with SOC 2 Trust Service Criteria in mind:

- **Security:** Access to scripts and deployments is controlled via least privilege and version control.
- **Availability:** Batch processes (Map/Reduce) and dashboards are designed to be resilient and restartable.
- **Confidentiality:** Customer and financial data are assumed to be protected via encryption at rest and in transit at the platform level.
- **Processing Integrity:** Credit checks, revenue calculations, and search logic are deterministic and auditable.
- **Privacy:** Customer data flows are documented in the case study and treated as sensitive.

While this repo is illustrative and not a live SaaS stack, the design and documentation reflect SOC 2–ready thinking.

## Structure

- `suiteScripts/` — SuiteScript 2.1 portfolio
- `savedSearches/` — JSON definitions of saved searches
- `docs/` — Case study, functional requirements, and architecture notes
- `LICENSE` — MIT License
- `.gitignore` — Common exclusions for Node/SDF-style projects

## License

This project is licensed under the MIT License.
