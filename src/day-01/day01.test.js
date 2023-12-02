
import { part1 } from './day01'

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

describe('day01', () => {


  it('part1', () => {

    expect(part1(testInput)).toBe(142)

  })


})