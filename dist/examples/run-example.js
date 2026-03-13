"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signal_registry_service_1 = require("../services/signal-registry.service");
const signal_priority_engine_service_1 = require("../services/signal-priority-engine.service");
const signal_routing_service_1 = require("../services/signal-routing.service");
// Create a sample signal
const sampleSignal = {
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
const registry = new signal_registry_service_1.SignalRegistryService();
const priorityEngine = new signal_priority_engine_service_1.SignalPriorityEngineService();
const routing = new signal_routing_service_1.SignalRoutingService();
// Process and log results
console.log('=== SignalRegistryService ===');
console.log(registry.process(sampleSignal));
console.log('\n=== SignalPriorityEngineService ===');
console.log(priorityEngine.process(sampleSignal));
console.log('\n=== SignalRoutingService ===');
console.log(routing.process(sampleSignal));
