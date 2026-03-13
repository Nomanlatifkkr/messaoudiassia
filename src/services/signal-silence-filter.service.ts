import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalSilenceFilterService {
  process(input: SignalInput): SignalOutput {
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
      id: generateOutputId(),
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