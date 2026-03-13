# Scope Definition – Milestone 1

## Inside Scope
- Implement 10 signal processing services
- Each service follows Input → Service → Output pattern
- Use TypeScript interfaces for input/output contracts
- Provide execution proof for all services via `index.ts`
- Include metadata in every output
- Provide self-validation and integration documentation

## Outside Scope
- No database integration
- No API endpoints
- No frontend
- No machine learning models
- No complex business logic beyond simple rules
- No persistent state between calls

## AI Family
**Signal Family** – responsible for initial signal intake, classification, prioritization, and routing.

## Input
`SignalInput` object containing:
- id, signalType, signalCategory, signalSource, signalValue, priorityLevel, timestamp, version, isActive

## Transformation
Each service applies exactly one transformation:
- Registry: adds registration metadata
- Classification: adds classification label
- Priority: modifies priorityLevel
- Weighting: adds weight metadata
- Routing: adds route metadata
- Conflict: adds conflict detection status
- Expiration: adds expiration status
- Silence: adds silence filter status
- Escalation: modifies priorityLevel
- Integrity: adds validation issues

## Output
`SignalOutput` object with:
- id, inputSignalId, processedBy, status, result, priorityLevel, metadata, processedAt