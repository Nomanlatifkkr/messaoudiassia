"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalSilenceFilterService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalSilenceFilterService {
    process(input) {
        // Filter out signals that are considered "silent": e.g., value is empty or "silence"
        const isSilent = !input.signalValue || input.signalValue.trim() === '' || input.signalValue === 'silence';
        const status = isSilent ? 'filtered' : 'passed';
        const result = isSilent
            ? 'Signal filtered out (silent)'
            : 'Signal passed silence filter';
        const metadata = [
            `silent:${isSilent}`,
            `value:"${input.signalValue}"`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalSilenceFilterService',
            status,
            result,
            priorityLevel: input.priorityLevel,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalSilenceFilterService = SignalSilenceFilterService;
