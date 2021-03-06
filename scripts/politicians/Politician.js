export const Politician = (politician, pacDonationsArr, pacsArr) => {
  return `
  <section class="politician">
    <header class="politician__name">
      <h1>${politician.name.first} ${politician.name.last}</h1> 
    </header>
    <div class="politician__info">
      <div>Age: ${politician.age}</div>
      <div>Represents: ${politician.district}</div>
    </div>
    <div class="pac__donors">
      <h4>PAC Donors (if applicable)</h4>
      <ul>
      ${pacDonationsArr
        .map((rel) => {
          return `<li>${
            pacsArr.find((pac) => pac.id === rel.pacId).registeredName
          } ($${rel.amount.toLocaleString()})</li>`
        })
        .join('')}
      </ul>

    </div>
  </section>
  `
}
