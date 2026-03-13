"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalClassificationService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalClassificationService {
    process(input) {
        // Simple classification based on signalType and value
        let classification = 'unknown';
        if (input.signalType.includes('urgent'))
            classification = 'high_importance';
        else if (input.signalType.includes('info'))
            classification = 'informational';
        else if (input.signalValue === 'alert')
            classification = 'alert';
        const metadata = [
            `classification:${classification}`,
            `type:${input.signalType}`,
            `value:${input.signalValue}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalClassificationService',
            status: 'classified',
            result: `Signal classified as ${classification}`,
            priorityLevel: input.priorityLevel,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalClassificationService = SignalClassificationService;
