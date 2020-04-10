import { usePoliticians } from './politicianProvider.js'
import { Politician } from './Politician.js'

const contentTarget = document.querySelector('.politicianContainer')

export const PoliticianList = () => {
  const politicians = usePoliticians()
  const render = () => {
    contentTarget.innerHTML = ` <h1>POLITICIANS</h1>
    ${politicians.map((politician) => Politician(politician)).join('')}
  `
  }
  render()
}
