# ERP Service

Interfaces with existing ERP systems for syncing data.

## Flow

1. ERP Integration Service listens for updates from other microservices (e.g., logs from the Shift Handover Service or SMP data).
2. Updates are formatted and transmitted to the ERP system using APIs.
3. Responses from the ERP system are relayed back to the respective services.
