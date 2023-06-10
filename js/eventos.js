import {
    buttonPlay,
    buttonStop,
    buttonMais,
    buttonMenos,
    buttonArvore,
    buttonChuva,
    buttonCasa,
    buttonFogo,
} from './elementos.js'

export default function({
    sons, 
    timer
}) {

    buttonPlay.addEventListener('click', () => {
        timer.countdown()
    })
    
    buttonStop.addEventListener('click', () => {
        timer.reset()
    })
    
    buttonMais.addEventListener('click', () => {
        timer.addMinutes()
    })
    
    buttonMenos.addEventListener('click', () => {
        timer.removeMinutes()
    })
    
    buttonArvore.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomFloresta()
    })
    
    buttonChuva.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomChuva()
    })
    
    buttonCasa.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomCasa()
    })
    
    buttonFogo.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomFogo()
    })

}