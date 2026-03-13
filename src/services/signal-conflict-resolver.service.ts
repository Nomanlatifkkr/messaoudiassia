import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalConflictResolverService {
  process(input: SignalInput): SignalOutput {
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
      id: generateOutputId(),
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