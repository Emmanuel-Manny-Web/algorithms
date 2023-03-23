function saveThePrisoner(n: number, m: number, s: number): number {
  // Write your code here
  const r = (((m + n) % n) + (s % n) - 1) % n
  return r == 0 ? n : ((r+n) % n)
}