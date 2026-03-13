import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalExpirationService {
  process(input: SignalInput): SignalOutput {
    // Check if signal is older than 1 hour (example threshold)
    const signalTime = new Date(input.timestamp).getTime();
    const now = Date.now();
    const oneHourMs = 60 * 60 * 1000;
    const isExpired = now - signalTime > oneHourMs;

    const status = isExpired ? 'expired' : 'active';
    const result = isExpired
      ? 'Signal has expired (older than 1 hour)'
      : 'Signal is still valid';

    const metadata = [
      `expired:${isExpired}`,
      `timestamp:${input.timestamp}`,
      `ageMs:${now - signalTime}`,
    ];

    return {
      id: generateOutputId(),
      inputSignalId: input.id,
      processedBy: 'SignalExpirationService',
      status,
      result,
      priorityLevel: input.priorityLevel,
      metadata,
      processedAt: new Date().toISOString(),
    };
  }
}