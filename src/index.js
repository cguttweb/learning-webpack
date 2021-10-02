// import _ from 'lodash'
import './styles.css'
import image from './olympics-rings.jpg'
import printMe from './print'

// function getComponent() {
  async function getComponent(){
    const el = document.createElement('div')
    const { default: _ } = await import('lodash')

    el.innerHTML = _.join(['Hello', 'webpack'], ' ')

  // return import('lodash')
  // .then(({ default: _ }) => {
    // const element = document.createElement('div')

  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  //   element.classList.add('hello')
  //   return element
  // })
  // .catch((error) => 'An error has occurred while loading component')

  // const btn = document.createElement('button')

  // el.innerHTML = _.join(['Hello', ' webpack'], ' ')
  // el.classList.add('hello')

  // btn.innerHTML = 'Click Me'
  // btn.onclick = printMe

  // const img = new Image()
  // img.src = image

  // el.appendChild(btn)

  return el
}

// document.body.appendChild(component());

getComponent().then((component) => {
  document.body.appendChild(component)
})