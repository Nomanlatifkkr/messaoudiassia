import { SignalInput } from './models/signal-input';
import { SignalRegistryService } from './services/signal-registry.service';
import { SignalClassificationService } from './services/signal-classification.service';
import { SignalPriorityEngineService } from './services/signal-priority-engine.service';
import { SignalWeightingService } from './services/signal-weighting.service';
import { SignalRoutingService } from './services/signal-routing.service';
import { SignalConflictResolverService } from './services/signal-conflict-resolver.service';
import { SignalExpirationService } from './services/signal-expiration.service';
import { SignalSilenceFilterService } from './services/signal-silence-filter.service';
import { SignalEscalationService } from './services/signal-escalation.service';
import { SignalIntegrityCheckerService } from './services/signal-integrity-checker.service';

// A representative sample signal
const sampleSignal: SignalInput = {
  id: 'sig-999',
  signalType: 'urgent_alert',
  signalCategory: 'critical',
  signalSource: 'sensor',
  signalValue: 'high_temperature',
  priorityLevel: 5,
  timestamp: new Date().toISOString(),
  version: 2,
  isActive: true,
};

// List of all services to execute
const services = [
  { name: 'SignalRegistryService', instance: new SignalRegistryService() },
  { name: 'SignalClassificationService', instance: new SignalClassificationService() },
  { name: 'SignalPriorityEngineService', instance: new SignalPriorityEngineService() },
  { name: 'SignalWeightingService', instance: new SignalWeightingService() },
  { name: 'SignalRoutingService', instance: new SignalRoutingService() },
  { name: 'SignalConflictResolverService', instance: new SignalConflictResolverService() },
  { name: 'SignalExpirationService', instance: new SignalExpirationService() },
  { name: 'SignalSilenceFilterService', instance: new SignalSilenceFilterService() },
  { name: 'SignalEscalationService', instance: new SignalEscalationService() },
  { name: 'SignalIntegrityCheckerService', instance: new SignalIntegrityCheckerService() },
];

console.log('=== Processing Signal through all 10 modules ===\n');
console.log('Input Signal:', JSON.stringify(sampleSignal, null, 2), '\n');

services.forEach(({ name, instance }) => {
  console.log(`--- ${name} ---`);
  const output = instance.process(sampleSignal);
  console.log(JSON.stringify(output, null, 2));
  console.log('');
});