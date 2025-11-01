/** DEV guard for String.repeat negative counts. Remove after fixing source. */
const _origRepeat = String.prototype.repeat;
String.prototype.repeat = function(count: number) {
  const safe = Math.max(0, Math.floor(Number(count) || 0));
  // @ts-expect-error preserve binding
  return _origRepeat.call(this, safe);
};
