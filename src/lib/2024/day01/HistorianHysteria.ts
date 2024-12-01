export const parse = (input: string[]): [number[], number[]] => {
  const tmp = input.map(l => l.split('   ').map(Number))
  return [tmp.map(([a]) => a), tmp.map(([, b]) => b)]
}

export const distance = ([a, b]: [number[], number[]]): number[] => {
  const sortedA = a.toSorted((i, j) => i - j)
  const sortedB = b.toSorted((i, j) => i - j)
  return sortedA.map((x, i) => Math.abs(x - sortedB[i]))
}

export const sumDistances = (input: string[]): number =>
  distance(parse(input)).reduce((a, b) => a + b)

export const similarity = (input: string[]): number => {
  const [a, b] = parse(input)
  const counts = b.reduce(
    (acc, i) => {
      acc[i] ? acc[i]++ : (acc[i] = 1)
      return acc
    },
    {} as Record<number, number>,
  )

  return a.map(i => i * (counts[i] ?? 0)).reduce((x, y) => x + y)
}
