const buttonAudioTrigger = document.querySelector('.buttonAudioTrigger')
const linkAudioTrigger = document.querySelector('.linkAudioTrigger')
const audioTriggerContainer = document.querySelector('.audioTriggerContainer')
const audioPlayer = document.querySelector('audio')



audioTriggerContainer.addEventListener('click', event => {
  event.preventDefault()
  if (event.target === linkAudioTrigger || event.target === buttonAudioTrigger) {
    toggleRemoveClass(audioTriggerContainer)
    toggleRemoveClass(audioPlayer)
    audioPlayer.play()
  }
})

function toggleRemoveClass(domElement) {
  domElement.classList.toggle('remove');
  console.log(domElement)
}