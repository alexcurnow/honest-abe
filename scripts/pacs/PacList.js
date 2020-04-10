import { useCorporations } from '../corporations/corporationProvider.js'
import { usePacs } from './pacsProvider.js'
import { useDonations } from './corporationDonationsProvider.js'
import { Pac } from './Pac.js'

const contentTarget = document.querySelector('.pacsContainer')

export const PacList = () => {
  const corporations = useCorporations()
  const pacs = usePacs()
  const corporateDonations = useDonations()

  const render = () => {
    contentTarget.innerHTML = '<h1>PACS</h1>'
    pacs
      .map((pac) => {
        /* this will be an array of 
         pac/corporation relationship objects */
        const corporationPacRelations = corporateDonations.filter(
          (rel) => rel.pacId === pac.id
        )
        /* this will be an array of related corporation objects */
        let associatedCorporations = []
        corporationPacRelations.map((rel) => {
          const foundCorp = corporations.find(
            (corp) => corp.id === rel.corporationId
          )
          associatedCorporations.push(foundCorp)
        })

        contentTarget.innerHTML += Pac(
          pac,
          associatedCorporations,
          corporationPacRelations
        )
      })
      .join('')
  }
  render()
}
