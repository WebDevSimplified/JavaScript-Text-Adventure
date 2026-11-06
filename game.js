import { textNodes } from './story/index.js'
import { imageFor } from './story/images.js'

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const sceneImageElement = document.getElementById('scene-image')
const sceneImg = document.getElementById('scene-img')

const startingItems = {
  cigarettes: true,
  phone: true,
}

const startingState = {
  hasCalledSanta: false,
}

let state = {}
let currentImage = null

sceneImg.addEventListener('load', () => {
  sceneImageElement.classList.remove('loading')
})

sceneImg.addEventListener('error', () => {
  sceneImageElement.classList.remove('loading')
  sceneImageElement.classList.add('missing')
})

function setSceneImage(textNode) {

  const file = imageFor(textNode)

  // many scenes in a row share a picture, so only reload when it changes
  if (file === currentImage) return
  currentImage = file

  sceneImageElement.classList.add('loading')
  sceneImageElement.classList.remove('missing')
  sceneImageElement.dataset.label = `images/${file}`

  sceneImg.alt = file.replace(/\.[a-z]+$/i, '').replace(/-/g, ' ')
  sceneImg.src = `images/${file}`
}

function startGame() {

  state = {
    ...startingItems,
    ...startingState
  }

  showTextNode('intro-prologue')

}

function showTextNode(textNodeId) {

  const textNode = textNodes.find(textNode => textNode.id === textNodeId)

  if (!textNode) {
    console.error(`Text node "${textNodeId}" not found`)
    return
  }

  textElement.innerText = textNode.text
  setSceneImage(textNode)

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {

    if (showOption(option)) {

      const button = document.createElement('button')

      button.innerText = option.text
      button.classList.add('btn')

      button.addEventListener('click', () => selectOption(option))

      optionButtonsElement.appendChild(button)
    }

  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {

  const nextTextNodeId = option.nextText

  // endings use nextText: -1 ("Play again"); 'restart' also still works
  if (nextTextNodeId === 'restart' || nextTextNodeId === -1) {
    return startGame()
  }

  if (option.setState) {
    state = {
      ...state,
      ...option.setState
    }
  }

  showTextNode(nextTextNodeId)
}

startGame()