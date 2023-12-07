
export const parseInput = (data) => {
  return data.split(/\n/).reduce(([numbersAcc, linesAcc], line, row) => {


    const matches = [...line.matchAll(/(\d+)/g)];

    const m = matches.reduce((acc, curr) => {

      return [...acc, {
        n: parseInt(curr[0]),
        row,
        col: curr.index
      }]

    }, [])

    return [
      m.length > 0
        ? [...numbersAcc, ...m]
        : numbersAcc,
      [...linesAcc, line]]

  }, [[], []])
}

export const extractNumbers = (numbers, lines) => {
  return numbers.filter((n) => {


    const nLength = `${n.n}`.length

    const xStart = Math.max(0, n.col - 1)
    const xEnd = xStart + nLength + 1

    const top = n.row > 0 ? lines[n.row - 1].substring(xStart, xEnd + 1) : ''
    const bottom = n.row < (lines.length - 1) ? lines[n.row + 1].substring(xStart, xEnd + 1) : ''
    const left = n.col > 0 ? lines[n.row].substring(xStart, xStart + 1) : ''
    const right = n.col + nLength < lines[n.row].length ? lines[n.row].substring(n.col + nLength, n.col + nLength + 1) : ''

    /*
        console.log('### n', n)
        console.log('### top', top)
        console.log('### bottom', bottom)
        console.log('### left', left)
        console.log('### right', right)
    */

    const bound = top + bottom + left + right

    //  console.log('### match for', n.n, bound.match(/[^\d\.]/))

    return bound.match(/[^\d\.]/) !== null









  })


}

export const part1 = (inputData) => {
  const [numbers, lines] = parseInput(inputData)

  //  console.log('### lines', lines)
  //  console.log('### numbers', numbers)

  const n = extractNumbers(numbers, lines)

  return n.reduce((acc, curr) => acc + curr.n, 0)
}


export const part2 = (inputData) => {

}
