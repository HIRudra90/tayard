declare global {
  interface String {
    safeRepeat(count: number): string;
  }
}
if (!String.prototype.safeRepeat) {
  // eslint-disable-next-line no-extend-native
  String.prototype.safeRepeat = function (count: number): string {
    const n = Math.max(0, Number.isFinite(count) ? Math.floor(count) : 0);
    return this.repeat(n);
  };
}
export {};
