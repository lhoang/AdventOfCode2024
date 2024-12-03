import { readFileAsLines, split } from '../../../utils/input.js'
import { expect } from 'vitest'
import {
  combinations,
  derive,
  isSafe,
  isSafeWithTolerance,
  parse,
} from './RedNosedReports'

const realInput = readFileAsLines('2024/day02/input.txt')

const input = split`
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`

describe('RedNosedReports', () => {
  it('should derive reports', () => {
    const res = parse(input).map(derive)
    expect(res[0]).toEqual([-1, -2, -2, -1])
    expect(res[1]).toEqual([1, 5, 1, 1])
  })

  it('should count safe reports', () => {
    expect(parse(input).filter(isSafe)).toHaveLength(2)
  })

  it('should count safe reports ⭐️', () => {
    expect(parse(realInput).filter(isSafe)).toHaveLength(670)
  })

  it('should generate all combinations', () => {
    expect(combinations([1, 2, 3, 4, 5])).toEqual([
      [2, 3, 4, 5],
      [1, 3, 4, 5],
      [1, 2, 4, 5],
      [1, 2, 3, 5],
      [1, 2, 3, 4],
    ])
  })

  it('should count safe reports with tolerance', () => {
    expect(parse(input).filter(isSafeWithTolerance)).toHaveLength(4)
  })

  it('should count safe reports with tolerance ⭐️⭐️', () => {
    expect(parse(realInput).filter(isSafeWithTolerance)).toHaveLength(700)
  })
})
