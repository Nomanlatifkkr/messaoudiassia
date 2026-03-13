"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalConflictResolverService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalConflictResolverService {
    process(input) {
        // Dummy conflict check: conflicts happen if signal is inactive or version mismatch
        const hasConflict = !input.isActive || input.version < 1;
        const status = hasConflict ? 'conflict_detected' : 'no_conflict';
        const result = hasConflict
            ? 'Conflict: signal inactive or low version'
            : 'No conflict detected';
        const metadata = [
            `conflict:${hasConflict}`,
            `isActive:${input.isActive}`,
            `version:${input.version}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalConflictResolverService',
            status,
            result,
            priorityLevel: input.priorityLevel,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalConflictResolverService = SignalConflictResolverService;
