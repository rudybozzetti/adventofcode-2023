
import { part1 } from "./day03"


const testInput =
  `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

describe('day03', () => {
  it('part1', () => {
    expect(part1(testInput)).toBe(4361)
  })


})