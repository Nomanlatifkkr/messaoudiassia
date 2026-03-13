"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalRegistryService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalRegistryService {
    process(input) {
        // Simulate registration: store or acknowledge the signal
        const metadata = [
            `registeredType:${input.signalType}`,
            `category:${input.signalCategory}`,
            `source:${input.signalSource}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalRegistryService',
            status: 'registered',
            result: 'Signal successfully registered in the system',
            priorityLevel: input.priorityLevel, // unchanged
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalRegistryService = SignalRegistryService;
