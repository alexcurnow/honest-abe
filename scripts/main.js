import { getPoliticians } from './politicians/politicianProvider.js'
import { PoliticianList } from './politicians/PoliticianList.js'
import { getCorporations } from './corporations/corporationProvider.js'
import { CorporationList } from './corporations/CorporationList.js'
import { getPacs } from './pacs/pacsProvider.js'
import { getCorporateDonations } from './pacs/corporationDonationsProvider.js'
import { PacList } from './pacs/PacList.js'
import { getPacDonations } from './politicians/pacDonationsProvider.js'

getPoliticians()
  .then(getCorporations)
  .then(CorporationList)
  .then(getPacs)
  .then(getCorporateDonations)
  .then(PacList)
  .then(getPacDonations)
  .then(PoliticianList)
