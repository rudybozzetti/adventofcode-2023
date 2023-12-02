
export const parseInput = (data) => {
  return data.split(/\n/).reduce((acc, line, row) => {
    const numbers = line.match(/\d/g)
    const n = parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
    return [...acc, n]

  }, [])
}

export const convToNumber = s => {
  switch (s) {
    case 'one':
      return 1
    case 'two':
      return 2
    case 'three':
      return 3
    case 'four':
      return 4
    case 'five':
      return 5
    case 'six':
      return 6
    case 'seven':
      return 7
    case 'eight':
      return 8
    case 'nine':
      return 9
    default:
      return s
  }
}

export const tokens = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
]

export const parseInput2 = (data) => {
  return data.split(/\n/).reduce((acc, line, row) => {
    const firstMatches = tokens.map(t => [t, line.indexOf(t)]).filter(n => n[1] !== -1).sort((a, b) => a[1] - b[1])
    const lastMatches = tokens.map(t => [t, line.lastIndexOf(t)]).filter(n => n[1] !== -1).sort((a, b) => b[1] - a[1])

    const n = parseInt(`${convToNumber(firstMatches[0][0])}${convToNumber(lastMatches[0][0])}`)

    return [...acc, n]

  }, [])
}

export const part1 = (inputData) => {
  const list = parseInput(inputData)

  return list.reduce((acc, n) => acc + n, 0)

}

export const part2 = (inputData) => {
  const list = parseInput2(inputData)

  return list.reduce((acc, n) => acc + n, 0)
}