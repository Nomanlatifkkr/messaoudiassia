"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalPriorityEngineService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalPriorityEngineService {
    process(input) {
        // Adjust priority based on signalCategory and source
        let newPriority = input.priorityLevel;
        if (input.signalCategory === 'critical')
            newPriority = Math.min(10, newPriority + 3);
        else if (input.signalCategory === 'standard')
            newPriority = Math.max(1, newPriority - 1);
        if (input.signalSource === 'sensor')
            newPriority += 1;
        // Clamp between 1 and 10
        newPriority = Math.max(1, Math.min(10, newPriority));
        const metadata = [
            `originalPriority:${input.priorityLevel}`,
            `adjustedPriority:${newPriority}`,
            `reason:category=${input.signalCategory}, source=${input.signalSource}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalPriorityEngineService',
            status: 'priority_adjusted',
            result: `Priority changed from ${input.priorityLevel} to ${newPriority}`,
            priorityLevel: newPriority,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalPriorityEngineService = SignalPriorityEngineService;
