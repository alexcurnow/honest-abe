export const Pac = (
  pacObj,
  relatedCorporationsArray,
  relatedDonationsArray
) => {
  return `
  <section class="pac">
    <header class="pac__name">
      <h1>${pacObj.registeredName}</h1>
    </header>
    <div class="pac__info">
      <div>${pacObj.address}</div>
    </div>
    <div class="pac__donors">
      <h4>Donors</h4>
      <ul>
       ${relatedDonationsArray
         .map((rel) => {
           return `<li>${
             relatedCorporationsArray.find(
               (corp) => corp.id === rel.corporationId
             ).company
           } ($${rel.amount.toLocaleString()})</li>`
         })
         .join('')}
      </ul>
    </div>
  </section>
  `
}
