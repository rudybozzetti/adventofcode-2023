
import { part1, part2, convToNumber } from './day01'

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

const testInput2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

describe('day01', () => {


  it('part1', () => {

    expect(part1(testInput)).toBe(142)

  })

  it('convToNumber', () => {
    expect(convToNumber('one')).toBe(1)
    expect(convToNumber('two')).toBe(2)
    expect(convToNumber('three')).toBe(3)
    expect(convToNumber('four')).toBe(4)
    expect(convToNumber('five')).toBe(5)
    expect(convToNumber('six')).toBe(6)
    expect(convToNumber('seven')).toBe(7)
    expect(convToNumber('eight')).toBe(8)
    expect(convToNumber('nine')).toBe(9)
    expect(convToNumber('1')).toBe('1')
  })

  it.only('part2 tricky', () => {
    expect(part2('fiveight')).toBe(58)
    expect(part2('one7one')).toBe(11)

    expect(part2('oneight')).toBe(18)
    expect(part2('oneightwo')).toBe(12)
    expect(part2('twone')).toBe(21)
    expect(part2('eightwo')).toBe(82)
    expect(part2('two')).toBe(22)
    expect(part2('one')).toBe(11)
    expect(part2('one7one')).toBe(11)

    expect(part2('4231')).toBe(41)
    expect(part2('3oneone')).toBe(31)
    expect(part2('zmtdfour8')).toBe(48)
    expect(part2('797ninetwotwo')).toBe(72)








  })

  it('part2', () => {

    expect(part2(testInput2)).toBe(281)

  })


})