let politicianLegislations = []

export const getPoliticianLegislations = () =>
  fetch('http://localhost:8088/politicianlegislations')
    .then((res) => res.json())
    .then(
      (parsedPoliticianLegislations) =>
        (politicianLegislations = parsedPoliticianLegislations)
    )

export const usePoliticianLegislations = () => politicianLegislations.slice()
