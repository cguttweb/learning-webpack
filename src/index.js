import _ from 'lodash'
import './styles.css'
import image from './olympics-rings.jpg'

function component(params) {

  const el = document.createElement('div');

  el.innerHTML = _.join(['Hello webpack', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique excepturi minima cupiditate tenetur ipsa, voluptatem atque, optio deserunt inventore eum id quisquam, et expedita in dolorem porro saepe ullam unde dignissimos recusandae. Nulla dolore fuga atque nam tempore nihil adipisci facilis eos numquam. Totam, alias? Laudantium aliquid rerum quibusdam qui iusto similique molestiae natus in non atque impedit odit laborum quidem error, ducimus ipsa nulla voluptas ratione officia! Libero natus ex deleniti, vel in quasi numquam cupiditate odit velit expedita minima corrupti consequuntur sequi earum quis! Dolore perferendis pariatur a praesentium, similique vitae cum tempora? Beatae architecto earum quaerat?'], ' ');
  
  el.classList.add('hello')

  const img = new Image()
  img.src = img

  el.appendChild(img)

  return el
}

document.body.appendChild(component());