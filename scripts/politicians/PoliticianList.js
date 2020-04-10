import { usePoliticians } from './politicianProvider.js'
import { Politician } from './Politician.js'
import { usePacs } from '../pacs/pacsProvider.js'
import { usePacDonations } from './pacDonationsProvider.js'
import { useBills } from '../legislation/legislationProvider.js'
import { usePoliticianLegislations } from './politicianLegislationProvider.js'

const contentTarget = document.querySelector('.politicianContainer')

export const PoliticianList = () => {
  const politicians = usePoliticians()
  const pacs = usePacs()
  const pacDonations = usePacDonations()
  const bills = useBills()
  const politicianLegislations = usePoliticianLegislations()

  const render = () => {
    contentTarget.innerHTML = '<h1>POLITICIANS</h1>'
    politicians
      .map((politician) => {
        const pacDonationRelations = pacDonations.filter(
          (rel) => rel.politicianId === politician.id
        )

        let relatedPacs = []
        pacDonationRelations.forEach((rel) => {
          const foundPac = pacs.find((pac) => pac.id === rel.pacId)
          return relatedPacs.push(foundPac)
        })

        const politicianBillsRelations = politicianLegislations.filter(
          (rel) => rel.politicianId === politician.id
        )

        let relatedBills = []
        politicianBillsRelations.forEach((rel) => {
          const foundBill = bills.find((bill) => bill.id === rel.legislationId)
          return relatedBills.push(foundBill)
        })

        contentTarget.innerHTML += Politician(
          politician,
          pacDonationRelations,
          relatedPacs,
          relatedBills
        )
      })
      .join('')
  }
  render()
}
