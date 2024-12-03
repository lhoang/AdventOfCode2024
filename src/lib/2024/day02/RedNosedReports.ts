export const parse = (input: string[]): number[][] =>
  input.map(l => l.split(' ').map(Number))

export const derive = (report: number[]): number[] => {
  return report.slice(1).map((x, i) => x - report[i])
}

export const isSafe = (report: number[]): boolean => {
  const derived = derive(report)
  return (
    derived.every(i => Math.abs(i) <= 3 && i != 0) &&
    Math.abs(derived.map(i => Math.sign(i)).reduce((a, b) => a + b)) ==
      derived.length
  )
}

export const combinations = (report: number[]): number[][] =>
  report.map((_, i) => report.toSpliced(i, 1))

export const isSafeWithTolerance = (report: number[]): boolean => {
  const safe = isSafe(report)
  return safe || combinations(report).some(isSafe)
}
