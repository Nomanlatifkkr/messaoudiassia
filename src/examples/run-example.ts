import { SignalInput } from '../models/signal-input';
import { SignalRegistryService } from '../services/signal-registry.service';
import { SignalPriorityEngineService } from '../services/signal-priority-engine.service';
import { SignalRoutingService } from '../services/signal-routing.service';

// Create a sample signal
const sampleSignal: SignalInput = {
  id: 'sig-12345',
  signalType: 'urgent_alert',
  signalCategory: 'critical',
  signalSource: 'sensor',
  signalValue: 'high_temperature',
  priorityLevel: 5,
  timestamp: new Date().toISOString(),
  version: 2,
  isActive: true,
};

// Instantiate services
const registry = new SignalRegistryService();
const priorityEngine = new SignalPriorityEngineService();
const routing = new SignalRoutingService();

// Process and log results
console.log('=== SignalRegistryService ===');
console.log(registry.process(sampleSignal));
console.log('\n=== SignalPriorityEngineService ===');
console.log(priorityEngine.process(sampleSignal));
console.log('\n=== SignalRoutingService ===');
console.log(routing.process(sampleSignal));