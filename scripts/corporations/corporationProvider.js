let corporations = []

export const getCorporations = () =>
  fetch('http://localhost:8088/corporations')
    .then((res) => res.json())
    .then((parsedCorporations) => (corporations = parsedCorporations))

export const useCorporations = () => corporations.slice()
