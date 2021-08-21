const reviewsData = [
  {
    img: './img/img-1.png',
    fullname: 'John Doe',
    position: 'CEO',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus temporibus unde repellendus facilis id possimus, cum eveniet quod nulla, iusto a debitis. Ipsa vitae deserunt quos culpa enim laboriosam perspiciatis commodi amet accusantium nobis.',
  },
  {
    img: './img/img-2.png',
    fullname: 'Mark Miller Doe',
    position: 'Senior Developer',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus temporibus unde repellendus facilis id possimus, cum eveniet quod nulla, iusto a debitis. Ipsa vitae deserunt quos culpa enim laboriosam perspiciatis commodi amet accusantium nobis.',
  },
  {
    img: './img/img-3.jpeg',
    fullname: 'Kelly Clarkson',
    position: 'Designer',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus temporibus unde repellendus facilis id possimus, cum eveniet quod nulla, iusto a debitis. Ipsa vitae deserunt quos culpa enim laboriosam perspiciatis commodi amet accusantium nobis.',
  },
  {
    img: './img/img-4.jpeg',
    fullname: 'Mark humming',
    position: 'Artist',
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero necessitatibus temporibus unde repellendus facilis id possimus, cum eveniet quod nulla, iusto a debitis. Ipsa vitae deserunt quos culpa enim laboriosam perspiciatis commodi amet accusantium nobis.',
  },
]

let index = 0

const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const nameEl = document.getElementById('name')
const position = document.getElementById('position')
const review = document.getElementById('review-text')
const reviewImg = document.querySelector('.review-img')

const showData = (indexNum = 0) => {
  reviewImg.style.backgroundImage = `url(./img/img-${indexNum}.jpeg)`
  nameEl.textContent = reviewsData[indexNum].fullname
  position.textContent = reviewsData[indexNum].position
  review.textContent = reviewsData[indexNum].review
}

const nextReview = () => {
  index++
  index = index === reviewsData.length ? 0 : index
  console.log(index)
  showData(index)
}

const prevReview = () => {
  index--
  index = index === -1 ? reviewsData.length - 1 : index
  console.log(index)
  showData(index)
}

showData()
nextBtn.addEventListener('click', nextReview)
prevBtn.addEventListener('click', prevReview)
