import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalRoutingService {
  process(input: SignalInput): SignalOutput {
    // Determine route based on signalCategory and source
    let route = 'default';
    if (input.signalCategory === 'critical') route = 'emergency_processing';
    else if (input.signalCategory === 'analytics') route = 'analytics_pipeline';
    else if (input.signalSource === 'user') route = 'user_facing_queue';

    const metadata = [
      `route:${route}`,
      `category:${input.signalCategory}`,
      `source:${input.signalSource}`,
    ];

    return {
      id: generateOutputId(),
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