let corporateDonations = []

export const getCorporateDonations = () =>
  fetch('http://localhost:8088/corporatedonations')
    .then((res) => res.json())
    .then((parsedDonations) => (corporateDonations = parsedDonations))

export const useDonations = () => corporateDonations.slice()
