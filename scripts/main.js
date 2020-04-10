import { getPoliticians } from './politicians/politicianProvider.js'
import { PoliticianList } from './politicians/PoliticianList.js'
import { getCorporations } from './corporations/corporationProvider.js'
import { CorporationList } from './corporations/CorporationList.js'

getPoliticians().then(PoliticianList)
getCorporations().then(CorporationList)
