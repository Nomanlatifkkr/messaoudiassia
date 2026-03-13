"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOutputId = generateOutputId;
// Simple ID generator for output signals
function generateOutputId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `out-${timestamp}-${random}`;
}
