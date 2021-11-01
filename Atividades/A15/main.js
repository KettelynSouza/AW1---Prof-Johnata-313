

//PEGAR TODAS AS TECLAS//

const keys = document.querySelectorAll('.key')

function playNote(event) {
  let audioKeyCode = getKeyCode(event)

  // TECLA DIGITADA OU PRECIONADA//

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  //SE TECLA EXISTE//
  
  const cantFoundAnyKey = !key

  if (cantFoundAnyKey) {
    return
  }

  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode

  const isKeyboard = event.type === 'keydown'
  if (isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove('playing')
}

function registerEvents() {
  //CLICAR COM MOUSE//


  keys.forEach(function (key) {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayingClass)
  })


  //DIGITAR NO TECLADO//

  window.addEventListener('keydown', playNote)
}

window.addEventListener('load', registerEvents)