// * DOM
const card = document.getElementById('card')
const cardImg = document.getElementById('card-img')
const cardComment = document.getElementById('card-comment')
const cardName = document.getElementById('card-name')
const cardJob = document.getElementById('card-job')
const buttons = document.getElementById('buttons')

// * Globals
const data = [
  {
    id: 0,
    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    src: './images/image-tanya.jpg',
    comment:
      '“ I’ve been interested in coding for a while but never taken the jump,until now. I couldn’t recommend this course enough. I’m now in the jobof my dreams and so excited about the future. ” ',
  },
  {
    id: 1,
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    src: './images/image-john.jpg',
    comment:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ',
  },
]

let position = 0

// * Functions
const printData = () => {
  cardImg.src = data[position].src
  cardComment.textContent = data[position].comment
  cardName.textContent = data[position].name
  cardJob.textContent = data[position].job
}

// * Events
buttons.addEventListener('click', (e) => {
  const { action } = e.target.dataset
  if (action === '0' && position > 0) {
    position = position - 1
    printData()
  } else if (action === '1' && position < data.length - 1) {
    position = position + 1
    printData()
  }
})

window.addEventListener('keyup', (e) => {
  const action = e.key
  if (action === 'ArrowLeft' && position === 1) {
    position = position - 1
    printData()
  } else if (action === 'ArrowRight' && position === 0) {
    position = position + 1
    printData()
  }
})
