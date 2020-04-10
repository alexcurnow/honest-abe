let bills = []

export const getBills = () =>
  fetch('http://localhost:8088/legislations')
    .then((res) => res.json())
    .then((parsedBills) => (bills = parsedBills))

export const useBills = () => bills.slice()
