const introContent = '프론트엔드 개발자, 고은별의 웹 포트폴리오 입니다.'
// console.log(introContent[0])
const introEl = document.querySelector(".intro")

let index = 0
setInterval(() => {
  introEl.textContent += introContent[index]
  // console.log('index', index)
  // console.log(introEl.textContent)
  ++index
  // console.log('++index', index)
  // console.log(introContent.length)
  if (index > introContent.length) {
    introEl.textContent = ""
    index = 0
  }
}, 200)

const headerEl = document.querySelector(".header")
// console.log(window.pageYOffset, headerEl.offsetTop)

window.addEventListener('scroll', () => {
  if (visualViewport.height < window.scrollY) {
    headerEl.classList.add("fixed")
  } else {
    headerEl.classList.remove("fixed")
  }
})

const menuEls = document.querySelectorAll('.menu li')
const headerElHeight = headerEl.offsetHeight

menuEls[0].addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.profile').offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})
menuEls[1].addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.career').offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})
menuEls[2].addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.license').offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})
menuEls[3].addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.project').offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})
menuEls[4].addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.skill').offsetTop,
    left: 0,
    behavior: 'smooth'
  })
});
// const divEl = document.createElement('div')
// divEl.setAttribute("class", "line")
// console.log(divEl)
// const careerContentEl = document.querySelector('.career .content')

new Swiper('.project .swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 4000
  },
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable : true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});



// window.addEventListener('scroll', () => {
//   if (window.pageYOffset >= headerEl.offsetTop) {
//     headerEl.classList.add("fixed")
//   } else {
//     headerEl.classList.remove("fixed")
//   }
// })
/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

