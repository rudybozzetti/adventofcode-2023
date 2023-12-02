
export const parseInput = data => {
  return data.split(/\n/).reduce((acc, line, row) => {
    const numbers = line.match(/\d/g)
    const n = parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
    return [...acc, n]

  }, [])
}

export const part1 = (inputData) => {
  const list = parseInput(inputData)

  return list.reduce((acc, n) => acc + n, 0)

}


export const part2 = () => {

}