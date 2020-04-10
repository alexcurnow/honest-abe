let pacDonations = []

export const getPacDonations = () =>
  fetch('http://localhost:8088/pacdonations')
    .then((res) => res.json())
    .then((parsedDonations) => (pacDonations = parsedDonations))

export const usePacDonations = () => pacDonations.slice()
