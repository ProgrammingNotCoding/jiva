# Shift Handover Service

Handles digital shift logs, and manages templates and ensures adherence to statutory/non-statutory formats.

## Flow

1. Supervisor inputs shift data via the app.
2. Data sent to the Shift Handover Service, validated, and stored in its database.
3. Logs synced with the Reporting Service for generating a report.
4. Notifications about the next shift are sent using the Notification Service.
5. The log is forwarded to the ERP Integration Service for storage in the ERP system.
