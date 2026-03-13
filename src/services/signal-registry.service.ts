import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalRegistryService {
  process(input: SignalInput): SignalOutput {
    // Simulate registration: store or acknowledge the signal
    const metadata = [
      `registeredType:${input.signalType}`,
      `category:${input.signalCategory}`,
      `source:${input.signalSource}`,
    ];

    return {
      id: generateOutputId(),
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