"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalEscalationService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalEscalationService {
    process(input) {
        // Escalate priority if signal is from a high‑priority source or category
        let escalatedPriority = input.priorityLevel;
        let escalated = false;
        if (input.signalSource === 'executive' || input.signalCategory === 'critical') {
            escalatedPriority = Math.min(10, escalatedPriority + 2);
            escalated = true;
        }
        if (input.signalValue === 'urgent') {
            escalatedPriority = Math.min(10, escalatedPriority + 1);
            escalated = true;
        }
        const status = escalated ? 'escalated' : 'no_escalation';
        const result = escalated
            ? `Priority escalated from ${input.priorityLevel} to ${escalatedPriority}`
            : 'No escalation needed';
        const metadata = [
            `escalated:${escalated}`,
            `originalPriority:${input.priorityLevel}`,
            `newPriority:${escalatedPriority}`,
            `source:${input.signalSource}`,
            `category:${input.signalCategory}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalEscalationService',
            status,
            result,
            priorityLevel: escalatedPriority,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalEscalationService = SignalEscalationService;
