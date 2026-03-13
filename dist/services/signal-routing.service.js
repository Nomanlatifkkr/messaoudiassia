"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignalRoutingService = void 0;
const uuid_1 = require("../utils/uuid");
class SignalRoutingService {
    process(input) {
        // Determine route based on signalCategory and source
        let route = 'default';
        if (input.signalCategory === 'critical')
            route = 'emergency_processing';
        else if (input.signalCategory === 'analytics')
            route = 'analytics_pipeline';
        else if (input.signalSource === 'user')
            route = 'user_facing_queue';
        const metadata = [
            `route:${route}`,
            `category:${input.signalCategory}`,
            `source:${input.signalSource}`,
        ];
        return {
            id: (0, uuid_1.generateOutputId)(),
            inputSignalId: input.id,
            processedBy: 'SignalRoutingService',
            status: 'routed',
            result: `Signal routed to ${route}`,
            priorityLevel: input.priorityLevel,
            metadata,
            processedAt: new Date().toISOString(),
        };
    }
}
exports.SignalRoutingService = SignalRoutingService;
