import { getPoliticians } from './politicians/politicianProvider.js'
import { PoliticianList } from './politicians/PoliticianList.js'
import { getCorporations } from './corporations/corporationProvider.js'
import { CorporationList } from './corporations/CorporationList.js'
import { getPacs } from './pacs/pacsProvider.js'
import { getCorporateDonations } from './pacs/corporationDonationsProvider.js'
import { PacList } from './pacs/PacList.js'

getPoliticians().then(PoliticianList)
getCorporations()
  .then(CorporationList)
  .then(getPacs)
  .then(getCorporateDonations)
  .then(PacList)
