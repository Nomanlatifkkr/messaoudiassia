import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalWeightingService {
  process(input: SignalInput): SignalOutput {
    // Compute a weight based on signal value and version
    let weight = 1.0;
    if (input.signalValue === 'critical') weight = 2.5;
    else if (input.signalValue === 'high') weight = 2.0;
    else if (input.signalValue === 'medium') weight = 1.5;
    else weight = 1.0;

    // Version adds a small bonus
    weight += input.version * 0.1;

    const metadata = [
      `weight:${weight.toFixed(2)}`,
      `value:${input.signalValue}`,
      `version:${input.version}`,
    ];

    return {
      id: generateOutputId(),
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