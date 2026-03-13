import { SignalInput } from '../models/signal-input';
import { SignalOutput } from '../models/signal-output';
import { generateOutputId } from '../utils/uuid';

export class SignalIntegrityCheckerService {
  process(input: SignalInput): SignalOutput {
    // Check basic integrity: required fields, valid values
    const issues: string[] = [];

    if (!input.id) issues.push('missing id');
    if (!input.signalType) issues.push('missing signalType');
    if (!input.signalCategory) issues.push('missing signalCategory');
    if (!input.signalSource) issues.push('missing signalSource');
    if (input.priorityLevel < 1 || input.priorityLevel > 10) issues.push('priority out of range');
    if (isNaN(Date.parse(input.timestamp))) issues.push('invalid timestamp');
    if (input.version < 0) issues.push('negative version');

    const isIntegrityOk = issues.length === 0;
    const status = isIntegrityOk ? 'integrity_ok' : 'integrity_failed';
    const result = isIntegrityOk
      ? 'Signal integrity check passed'
      : `Integrity issues: ${issues.join(', ')}`;

    const metadata = [...issues];

    return {
      id: generateOutputId(),
      inputSignalId: input.id,
      processedBy: 'SignalIntegrityCheckerService',
      status,
      result,
      priorityLevel: input.priorityLevel,
      metadata,
      processedAt: new Date().toISOString(),
    };
  }
}