import {
    buttonPlay,
    buttonStop,
    buttonMais,
    buttonMenos,
    buttonArvore,
    buttonChuva,
    buttonCasa,
    buttonFogo,
    inputArvore,
    inputChuva,
    inputCasa,
    inputFogo,
    buttonWhite,
    buttonDark,
    corpo
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
        sons.tocarSomFloresta(5 / 10)
    })
    
    buttonChuva.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomChuva(5 / 10)
    })
    
    buttonCasa.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomCasa(5 / 10)
    })
    
    buttonFogo.addEventListener('click', () => {
        sons.stopTodosSom()
        sons.tocarSomFogo(5 / 10)
    })

    inputArvore.addEventListener('click', (event) => {
        let volume = (event.target.value / 10)
        sons.stopTodosSom()
        sons.aumentarVolumeFloresta(volume)
    })

    inputChuva.addEventListener('click', (event) => {
        let volume = (event.target.value / 10)
        sons.stopTodosSom()
        sons.aumentarVolumeChuva(volume)
    })

    inputCasa.addEventListener('click', (event) => {
        let volume = (event.target.value / 10)
        sons.stopTodosSom()
        sons.aumentarVolumeCasa(volume)
    })

    inputFogo.addEventListener('click', (event) => {
        let volume = (event.target.value / 10)
        sons.stopTodosSom()
        sons.aumentarVolumeFogo(volume)
    })

    buttonWhite.addEventListener('click', () => {
        buttonWhite.classList.toggle('hide')
        buttonDark.classList.toggle('hide')
        corpo.style.backgroundColor = 'black'
        corpo.style.color = "white"
    })

    buttonDark.addEventListener('click', () => {
        buttonWhite.classList.toggle('hide')
        buttonDark.classList.toggle('hide')
        corpo.style.backgroundColor = 'white' 
        corpo.style.color = "black"
    })

}