import { introNodes } from './intro.js'
import { phoneNodes } from './phone.js'
import { investigateNodes } from './investigate.js'
import { elfChatNodes } from './elf/elf-chat.js'
import { elfFightNodes } from './elf/elf-fight.js'
import { workshopEntranceNodes } from './workshop/workshop-entrance.js'
import { workshopFloorNodes } from './workshop/workshop-floor.js'
import { workshopOfficeNodes } from './workshop/workshop-office.js'
import { mrsClausNodes } from './workshop/mrs-claus.js'
import { noelNodes } from './workshop/noel.js'
import { jackFrostNodes } from './workshop/jack-frost.js'
import { workshopEndingNodes } from './workshop/workshop-endings.js'
import { stablesYardNodes } from './stables/stables-yard.js'
import { reindeerHandlerNodes } from './stables/reindeer-handlers.js'
import { stablesLoftNodes } from './stables/stables-loft.js'
import { stablesEndingNodes } from './stables/stables-endings.js'

export const textNodes = [
  ...introNodes,
  ...phoneNodes,
  ...investigateNodes,
  ...elfChatNodes,
  ...elfFightNodes,
  ...workshopEntranceNodes,
  ...workshopFloorNodes,
  ...workshopOfficeNodes,
  ...mrsClausNodes,
  ...noelNodes,
  ...jackFrostNodes,
  ...workshopEndingNodes,
  ...stablesYardNodes,
  ...reindeerHandlerNodes,
  ...stablesLoftNodes,
  ...stablesEndingNodes
]