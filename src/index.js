import _ from 'lodash'
import './styles.css'
import image from './olympics-rings.jpg'
import printMe from './print'

function component() {
  const el = document.createElement('div')
  const btn = document.createElement('button')

  el.innerHTML = _.join(['Hello', ' webpack'], ' ')
  el.classList.add('hello')

  btn.innerHTML = 'Click Me'
  btn.onclick = printMe

  const img = new Image()
  img.src = image

  el.appendChild(btn)

  return el
}

document.body.appendChild(component());