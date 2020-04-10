import { usePoliticians } from './politicianProvider.js'
import { Politician } from './Politician.js'
import { usePacs } from '../pacs/pacsProvider.js'
import { usePacDonations } from './pacDonationsProvider.js'

const contentTarget = document.querySelector('.politicianContainer')

export const PoliticianList = () => {
  const politicians = usePoliticians()
  const pacs = usePacs()
  const pacDonations = usePacDonations()

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
        console.log(pacDonationRelations, relatedPacs)

        contentTarget.innerHTML += Politician(
          politician,
          pacDonationRelations,
          relatedPacs
        )
      })
      .join('')
  }
  render()
}
