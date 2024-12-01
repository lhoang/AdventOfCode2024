import { readFileAsLines, split } from '../../../utils/input.js'
import { distance, parse, similarity, sumDistances } from './HistorianHysteria'

const realInput = readFileAsLines('2024/day01/input.txt')

const input = split`
3   4
4   3
2   5
1   3
3   9
3   3
`

describe('HistorianHysteria', () => {
  it('should parse 2 lists', () => {
    expect(parse(input)).toEqual([
      [3, 4, 2, 1, 3, 3],
      [4, 3, 5, 3, 9, 3],
    ])
  })
  it('should compute distances', () => {
    expect(distance(parse(input))).toEqual([2, 1, 0, 1, 2, 5])
  })

  it('should compute the distance sum', () => {
    expect(sumDistances(input)).toEqual(11)
  })

  it('should compute the distance sum ⭐️️', () => {
    expect(sumDistances(realInput)).toEqual(1882714)
  })

  it('should computre similarity score', () => {
    expect(similarity(input)).toEqual(31)
  })

  it('should computre similarity score ⭐️⭐️', () => {
    expect(similarity(realInput)).toEqual(19437052)
  })
})
