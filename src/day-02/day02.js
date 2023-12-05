

export const parseInput = (data) => {
  return data.split(/\n/).reduce((acc, line, row) => {
    const x = line.split(/:/).map(o => o.trim())

    const id =  parseInt(x[0].replace('Game ',''))

    const subsets = x[1].split(';').map(o =>o .trim())

    const parsedSubsets = subsets.map(s => {
      const cubes = s.split(',').map(o => o.trim())
      

      return {
        red: cubes.reduce((acc, c) =>  c.endsWith('red') ? parseInt(c):acc, undefined),
        green: cubes.reduce((acc, c) =>  c.endsWith('green') ? parseInt(c):acc, undefined),
        blue: cubes.reduce((acc, c) =>  c.endsWith('blue') ? parseInt(c):acc, undefined),
      }
    })

    const valid = parsedSubsets.every(s => {
      return (s.red === undefined || s.red <= 12) && 
      (s.green === undefined || s.green <= 13) &&
      (s.blue === undefined || s.blue <= 14)
    })


    return valid ? [...acc, id]: acc




  }, [])
}

export const part1 = (data) => {
  const validIds = parseInput(data)
  
  return validIds.reduce((acc, curr) => acc + curr,0)

}

export const part2 = (data) => {
  
}