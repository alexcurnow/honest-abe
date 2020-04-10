let pacs = []

export const getPacs = () =>
  fetch('http://localhost:8088/pacs')
    .then((res) => res.json())
    .then((parsedPacs) => (pacs = parsedPacs))

export const usePacs = () => pacs.slice()
