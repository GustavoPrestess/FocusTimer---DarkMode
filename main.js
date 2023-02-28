const body = document.querySelector('body')
const buttonLight = document.querySelector('.lightButton')
const buttonDark = document.querySelector('.darkButton')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.sum')
const buttonRemoveMinutes = document.querySelector('.subtraction')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cards = document.querySelector('.cards')
const forest = new Audio('./sounds/Floresta.wav')
const rain = new Audio('./sounds/Chuva.wav')
const coffeeshop = new Audio('./sounds/Cafeteria.wav')
const fireplace = new Audio('./sounds/Lareira.wav')
const forestVolume = document.querySelector('#forestVolume')
const rainVolume = document.querySelector('#rainVolume')
const coffeeVolume = document.querySelector('#coffeeVolume')
const fireVolume = document.querySelector('#fireVolume')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

function darkModeOff() {
  buttonLight.classList.remove('hide')
  buttonDark.classList.add('hide')
  body.classList.remove('dark')
}

function darkModeOn() {
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')
  body.classList.add('dark')
}

buttonLight.addEventListener('click', function () {
  darkModeOn()
})

buttonDark.addEventListener('click', function () {
 darkModeOff()
})

function addTimer() {
  minutes = Number(minutes) + 5
  updateTimerDisplay(minutes, 0)
}

function removeTimer() {
  if (minutes > 0) {
    minutes = Number(minutes) - 5
    updateTimerDisplay(minutes, 0)
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}

function pauseTimer() {
  clearTimeout(timerTimerOut)
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      return
    }
    if (seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function audioForestPlay() {
  forest.play()
}
function audioForestPause() {
  forest.pause()
}
function audioRainPlay() {
  rain.play()
}
function audioRainPause() {
  rain.pause()
}
function audioCoffeshopPlay() {
  coffeeshop.play()
}
function audioCoffeshopPause() {
  coffeeshop.pause()
}
function audioFireplacePlay() {
  fireplace.play()
}
function audioFireplacePause() {
  fireplace.pause()
}

function togglePlay() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  if (buttonForest.classList.contains('active')) {
    forest.play()
  } else if (buttonRain.classList.contains('active')) {
    rain.play()
  } else if (buttonCoffeeShop.classList.contains('active')) {
    coffeeshop.play()
  } else if (buttonFirePlace.classList.contains('active')) {
    fireplace.play()
  }
}

function togglePause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  forest.pause()
  rain.pause()
  coffeeshop.pause()
  fireplace.pause()  
}

function desableForest() {
  buttonForest.classList.remove('active')
  forest.pause()
}

function desableRain() {
  buttonRain.classList.remove('active')
  rain.pause()
}

function desableCoffeeShop() {
  buttonCoffeeShop.classList.remove('active')
  coffeeshop.pause()
}

function desableFirePlace() {
  buttonFirePlace.classList.remove('active')
  fireplace.pause()
}

buttonPlay.addEventListener('click', function () {
  countdown()
  togglePlay()
})

buttonPause.addEventListener('click', function () {
  togglePause()
  pauseTimer()
  forest.pause()
  rain.pause()
  coffeeshop.pause()
  fireplace.pause()
})

buttonStop.addEventListener('click', function () {
  togglePause()
  resetTimer()
  desableForest()
  desableRain()
  desableCoffeeShop()
  desableFirePlace()
})

buttonAddMinutes.addEventListener('click', function () {
  addTimer()
})

buttonRemoveMinutes.addEventListener('click', function () {
  removeTimer()
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.add('active')
  if (forest.paused == true) {
    forest.play()
    resetTimer()
    countdown()
  } 
  forest.loop = true
  togglePlay()
  toggleForestVolume()
  desableRain()
  desableCoffeeShop()
  desableFirePlace()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.add('active')
  if (rain.paused == true) {
    rain.play()
    resetTimer()
    countdown()
  }
  rain.loop = true
  togglePlay()
  toggleRainVolume()
  desableForest()
  desableCoffeeShop()
  desableFirePlace()
})

buttonCoffeeShop.addEventListener('click', function () {
  buttonCoffeeShop.classList.add('active')
  if (coffeeshop.paused == true) {
    coffeeshop.play()
    resetTimer()
    countdown()
  }
  coffeeshop.loop = true
  togglePlay()
  toggleCoffeeVolume()
  desableForest()
  desableRain()
  desableFirePlace()
})

buttonFirePlace.addEventListener('click', function () {
  buttonFirePlace.classList.add('active')
  if (fireplace.paused == true) {
    fireplace.play()
    resetTimer()
    countdown()
  } 
  fireplace.loop = true
  togglePlay()
  toggleFireVolume()
  desableForest()
  desableRain()
  desableCoffeeShop()
})

function toggleForestVolume() {
  forestVolume.addEventListener('change', function () {
    forest.volume = forestVolume.value / 100
  })
}

function toggleRainVolume() {
  rainVolume.addEventListener('change', function () {
    rain.volume = rainVolume.value / 100
  })
}

function toggleCoffeeVolume() {
  coffeeVolume.addEventListener('change', function () { 
    coffeeshop.volume = coffeeVolume.value / 100
  })
}

function toggleFireVolume() {
  fireVolume.addEventListener('change', function () {
    fireplace.volume = fireVolume.value / 100
  })
} 