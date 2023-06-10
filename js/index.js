import Timer from './timer.js'
import sounds from './sounds.js'
import {
    segundosDisplay,
    minutosDisplay
} from './elementos.js'
import Eventos from './eventos.js'

const timer = Timer({
    minutosDisplay,
    segundosDisplay
})

const sons = sounds()
Eventos({ sons, timer })
