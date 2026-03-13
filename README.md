# Signal Intelligence Backend – First Milestone

This project implements the first milestone of a larger AI platform: **10 independent signal processing modules** following a strict input → service → output architecture.

## Modules

1. SignalRegistryService
2. SignalClassificationService
3. SignalPriorityEngineService
4. SignalWeightingService
5. SignalRoutingService
6. SignalConflictResolverService
7. SignalExpirationService
8. SignalSilenceFilterService
9. SignalEscalationService
10. SignalIntegrityCheckerService

Each service processes a `SignalInput` and returns a `SignalOutput` with a single responsibility.

## Running the Example

```bash
npm install
npm run dev