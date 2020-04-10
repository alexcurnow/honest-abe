import { useCorporations } from './corporationProvider.js'
import { Corporation } from './Corporation.js'
const contentTarget = document.querySelector('.corporationContainer')

export const CorporationList = () => {
  const corporations = useCorporations()

  const render = () => {
    contentTarget.innerHTML = `
    <h1>CORPORATIONS</h1>
    ${corporations.map((corporation) => Corporation(corporation)).join('')}
    `
  }
  render()
}
