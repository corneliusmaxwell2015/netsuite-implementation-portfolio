-- Top 10 customers by revenue
SELECT entity, SUM(amount) AS total_revenue
FROM transaction
WHERE type = 'Invoice'
GROUP BY entity
ORDER BY total_revenue DESC
LIMIT 10;

-- Low inventory items
SELECT itemid, quantityavailable
FROM item
WHERE quantityavailable < 10;

