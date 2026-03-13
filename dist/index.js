"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signal_registry_service_1 = require("./services/signal-registry.service");
const signal_classification_service_1 = require("./services/signal-classification.service");
const signal_priority_engine_service_1 = require("./services/signal-priority-engine.service");
const signal_weighting_service_1 = require("./services/signal-weighting.service");
const signal_routing_service_1 = require("./services/signal-routing.service");
const signal_conflict_resolver_service_1 = require("./services/signal-conflict-resolver.service");
const signal_expiration_service_1 = require("./services/signal-expiration.service");
const signal_silence_filter_service_1 = require("./services/signal-silence-filter.service");
const signal_escalation_service_1 = require("./services/signal-escalation.service");
const signal_integrity_checker_service_1 = require("./services/signal-integrity-checker.service");
// A representative sample signal
const sampleSignal = {
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
    { name: 'SignalRegistryService', instance: new signal_registry_service_1.SignalRegistryService() },
    { name: 'SignalClassificationService', instance: new signal_classification_service_1.SignalClassificationService() },
    { name: 'SignalPriorityEngineService', instance: new signal_priority_engine_service_1.SignalPriorityEngineService() },
    { name: 'SignalWeightingService', instance: new signal_weighting_service_1.SignalWeightingService() },
    { name: 'SignalRoutingService', instance: new signal_routing_service_1.SignalRoutingService() },
    { name: 'SignalConflictResolverService', instance: new signal_conflict_resolver_service_1.SignalConflictResolverService() },
    { name: 'SignalExpirationService', instance: new signal_expiration_service_1.SignalExpirationService() },
    { name: 'SignalSilenceFilterService', instance: new signal_silence_filter_service_1.SignalSilenceFilterService() },
    { name: 'SignalEscalationService', instance: new signal_escalation_service_1.SignalEscalationService() },
    { name: 'SignalIntegrityCheckerService', instance: new signal_integrity_checker_service_1.SignalIntegrityCheckerService() },
];
console.log('=== Processing Signal through all 10 modules ===\n');
console.log('Input Signal:', JSON.stringify(sampleSignal, null, 2), '\n');
services.forEach(({ name, instance }) => {
    console.log(`--- ${name} ---`);
    const output = instance.process(sampleSignal);
    console.log(JSON.stringify(output, null, 2));
    console.log('');
});
