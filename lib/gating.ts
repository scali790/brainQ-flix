export const FREE_COOLDOWN_DAYS = 14;

export function canTakeFreeTest(lastTakenAtMs: number | null, nowMs = Date.now()): boolean {
  if (!lastTakenAtMs) return true;
  const cooldownMs = FREE_COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  return nowMs - lastTakenAtMs >= cooldownMs;
}
