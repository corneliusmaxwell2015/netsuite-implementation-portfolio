# NetSuite SuiteScript & Implementation Best Practices

## 1. General Coding Practices

- **Use SuiteScript 2.1:**  
  Prefer 2.1 for modern syntax and better maintainability.

- **Keep scripts small and focused:**  
  One responsibility per script (credit validation, dashboard, integration, etc.).

- **Name scripts clearly:**  
  Use descriptive filenames like `ue_customer_credit_validation.js`, not `script1.js`.

- **Avoid hard-coded IDs in production:**  
  Use script parameters, custom records, or configuration where possible.

---

## 2. User Event Scripts

- **Use `beforeSubmit` for validation:**  
  Block invalid transactions before they’re saved.

- **Avoid heavy logic on `beforeLoad`:**  
  Keep UI changes light to avoid slow forms.

- **Don’t load more records than necessary:**  
  Only load the customer or related records you truly need.

---

## 3. Client Scripts

- **Keep UI logic simple:**  
  Use client scripts for field validation and user feedback, not heavy business logic.

- **Guard against null values:**  
  Always check for `null` or `undefined` before using field values.

- **Avoid unnecessary alerts:**  
  Use alerts sparingly; they interrupt user flow.

---

## 4. Suitelets

- **Design for clarity, not flash:**  
  Simple forms and lists beat complex UIs in NetSuite.

- **Use saved searches for data:**  
  Let NetSuite handle querying; Suitelet focuses on rendering.

- **Handle GET and POST cleanly:**  
  Check `context.request.method` and separate display vs. processing logic.

---

## 5. RESTlets

- **Validate all input:**  
  Never trust incoming JSON blindly—check required fields.

- **Return clear responses:**  
  Use `{ success: true, id: ... }` or `{ error: 'message' }` patterns.

- **Avoid exposing internal structure:**  
  Only return what external systems need.

---

## 6. Map/Reduce & Scheduled Scripts

- **Respect governance limits:**  
  Keep operations small per record; avoid huge loads in one go.

- **Log meaningfully:**  
  Use `log.audit` and `log.error` with useful context.

- **Design for restartability:**  
  Assume a run can fail mid-way; don’t corrupt data.

---

## 7. Workflow Action & Portlet Scripts

- **Workflow Action:**  
  Keep logic deterministic and side-effect aware (e.g., logging, status updates).

- **Portlet:**  
  Provide concise, high-value information—don’t overload the dashboard.

---

## 8. Saved Searches & SuiteQL

- **Name searches clearly:**  
  `customsearch_inventory_low`, `customsearch_customer_credit_risk`, etc.

- **Limit result sets:**  
  Use filters and limits to avoid performance issues.

- **Use SuiteQL for complex reporting:**  
  But keep queries readable and documented.

---

## 9. SOC 2–Aware Practices

- **No secrets in code:**  
  Never store credentials or tokens in scripts or repo.

- **Document data flows:**  
  Show how customer, financial, and inventory data move through the system.

- **Think in terms of integrity and auditability:**  
  Credit checks, revenue calculations, and logs should be traceable and explainable.

---

## 10. Documentation & GitHub

- **Always include README, LICENSE, and .gitignore.**  
- **Document business context, not just code.**  
- **Use consistent commit messages:**  
  e.g., “Add MapReduce script for item export”, “Create UE script for credit validation”.
