import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalClassificationService {
  process(input: SignalInput): SignalOutput {
    // Simple classification based on signalType and value
    let classification = 'unknown';
    if (input.signalType.includes('urgent')) classification = 'high_importance';
    else if (input.signalType.includes('info')) classification = 'informational';
    else if (input.signalValue === 'alert') classification = 'alert';

    const metadata = [
      `classification:${classification}`,
      `type:${input.signalType}`,
      `value:${input.signalValue}`,
    ];

    return {
      id: generateOutputId(),
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