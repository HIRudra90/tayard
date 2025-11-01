// src/polyfills/safeRepeat.ts

// Keep original, unmodified implementation
const _origRepeat = String.prototype.repeat;

// Override to coerce invalid counts to a safe non-negative integer
String.prototype.repeat = function (this: string, count: number): string {
  const safe = Math.max(0, Math.floor(Number(count) || 0));
  return _origRepeat.call(this, safe);
};

export {};
