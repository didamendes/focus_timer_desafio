export default function Timer({
    minutosDisplay,
    segundosDisplay
}) {
    let timerOut
    let minutos = Number(minutosDisplay.textContent)

    function countdown() {
        timerOut = setTimeout(function() {
            let segundos = Number(segundosDisplay.textContent)
            let minutos = Number(minutosDisplay.textContent)

            updateTimerDisplay(minutos, 0)

            if (minutos <= 0 && segundos == 0) {
                updateTimerDisplay(minutos)
                return
            }

            if (segundos <= 0) {
                segundos = 6
                --minutos
            }

            updateTimerDisplay(minutos, String(segundos - 1))

            countdown()
        }, 1000)
    }

    function updateTimerDisplay(newMinutes, seconds) {
        minutos = newMinutes === undefined ? minutos : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutosDisplay.textContent = String(newMinutes).padStart(2, "0")
        segundosDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateTimerDisplay(minutos, 0)
        clearTimeout(timerOut)
    }

    function addMinutes() {
        clearTimeout(timerOut)
        minutosDisplay.textContent = minutos += 5
        segundosDisplay.textContent = "00"
    }

    function removeMinutes() {
        clearTimeout(timerOut)
        minutosDisplay.textContent = minutos -= 5
        segundosDisplay.textContent = "00"
    }

    return { countdown, reset, addMinutes, removeMinutes }

}