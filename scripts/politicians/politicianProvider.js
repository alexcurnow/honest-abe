let politicians = []

export const getPoliticians = () =>
  fetch('http://localhost:8088/politicians')
    .then((res) => res.json())
    .then((parsedPoliticians) => (politicians = parsedPoliticians))

export const usePoliticians = () => politicians.slice()
