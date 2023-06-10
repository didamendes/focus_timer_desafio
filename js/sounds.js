export default function() {
    const somArvore = new Audio("audios/Floresta.wav")
    const somChuva = new Audio("audios/Chuva.wav")
    const somCasa = new Audio("audios/Cafeteria.wav")
    const somFogo = new Audio("audios/Lareira.wav")

    function tocarSomFloresta() {
        somArvore.play()
    }

    function tocarSomChuva() {
        somChuva.play()
    }

    function tocarSomCasa() {
        somCasa.play()
    }

    function tocarSomFogo() {
        somFogo.play()
    }

    function stopTodosSom() {
        somArvore.pause()
        somChuva.pause()
        somCasa.pause()
        somFogo.pause()
    }

    return { tocarSomFloresta, tocarSomChuva, tocarSomCasa, tocarSomFogo, stopTodosSom }

}