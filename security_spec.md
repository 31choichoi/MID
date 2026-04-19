# Security Specification - MID Interior Design

## Data Invariants
- A booking must have a valid date, time, client name, and contact.
- Only users with the 'admin' role in the `/admins` collection can access or modify bookings (except for creation).
- The `status` field can only be one of the predefined states.
- The `createdAt` must be set by the server.

## The "Dirty Dozen" Payloads
1. **Unauthorized List**: Attempt to list `/bookings` without being an admin.
2. **Identity Spoofing (Write)**: Create a booking with a status other than 'pending'.
3. **Identity Spoofing (Admin)**: Attempt to write to `/admins` to make oneself an admin.
4. **State Shortcutting**: Update a booking status from 'pending' to 'completed' without being an admin.
5. **Resource Poisoning**: Create a booking with a 1MB string in `details`.
6. **Malicious ID**: Attempt to create a document with a path-traversal ID.
7. **PII Leak**: A non-admin user attempts to `get` a specific booking by ID.
8. **Shadow Field**: Adding `isVerified: true` to a booking during creation.
9. **Timestamp Manipulation**: Providing a future `createdAt` from the client.
10. **Admin Locked Out**: Deleting an admin record from the client.
11. **Bypassing Query**: listing bookings without a `where` clause (if any were permitted).
12. **Recursive Cost Attack**: Making thousands of requests to check admin status.

## Rules Draft Strategy
- Default deny.
- `admins` collection: read-only for admin users, no one can create except via console (or first-time bootstrap).
- `bookings` collection: 
  - `create`: public (if valid shape).
  - `read/list/update/delete`: only for admins.
