// Simple ID generator for output signals
export function generateOutputId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `out-${timestamp}-${random}`;
}