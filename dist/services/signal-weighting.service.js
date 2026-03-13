"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalWeightingService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalWeightingService {
    process(input) {
        // Compute a weight based on signal value and version
        let weight = 1.0;
        if (input.signalValue === 'critical')
            weight = 2.5;
        else if (input.signalValue === 'high')
            weight = 2.0;
        else if (input.signalValue === 'medium')
            weight = 1.5;
        else
            weight = 1.0;
        // Version adds a small bonus
        weight += input.version * 0.1;
        const metadata = [
            `weight:${weight.toFixed(2)}`,
            `value:${input.signalValue}`,
            `version:${input.version}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalWeightingService',
            status: 'weight_assigned',
            result: `Signal weight = ${weight.toFixed(2)}`,
            priorityLevel: input.priorityLevel,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalWeightingService = SignalWeightingService;
