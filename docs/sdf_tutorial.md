# SuiteCloud Development Framework (SDF) Tutorial

This tutorial explains how to think about SDF in the context of your NetSuite implementation portfolio.

---

## 1. What Is SDF?

SuiteCloud Development Framework (SDF) is NetSuite’s way to:

- Package customizations (scripts, custom records, forms, fields)
- Version-control them
- Deploy them between accounts (sandbox → production)

In your portfolio, you conceptually show SDF readiness via:

- `sdf/manifest.xml`
- `sdf/deploy.xml`
- `sdf/objects/` (custom records, forms, fields)

---

## 2. Typical SDF Project Structure

A real SDF project often looks like:

```text
sdf/
  manifest.xml
  deploy.xml
  objects/
    customrecord_creditlimit.xml
    customform_salesorder.xml
    customfield_revenue_calc.xml
  scripts/
    ue_customer_credit_validation.js
    mr_revenue_recalc.js
