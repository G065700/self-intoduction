// MAIN 영역 class="intro"인 요소에 텍스트 및 타이핑 효과 추가
const introContent = '프론트엔드 개발자, 고은별의 웹 포트폴리오 입니다.'
const introEl = document.querySelector(".intro")

let index = 0
setInterval(() => {
  introEl.textContent += introContent[index]
  ++index
  if (index > introContent.length) {
    introEl.textContent = ""
    index = 0
  }
}, 200)

// HEADER 영역 class="header"인 요소에 position="fixed"를 위한 클래스 값 추가
const headerEl = document.querySelector(".header")

window.addEventListener('scroll', () => {
  if (visualViewport.height < window.scrollY) {
    headerEl.classList.add("fixed")
  } else {
    headerEl.classList.remove("fixed")
  }
})

// HEADER 영역의 각 메인 메뉴를 클릭하면 해당 페이지로 스크롤되는 효과 추가
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
    top: document.querySelector('.skills').offsetTop,
    left: 0,
    behavior: 'smooth'
  })
})

// PROJECT 영역에 Swiper 효과 추가
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

// FOOTER 영역 내 class="this-year" 요소에 올해가 몇년도 인지 계산하여 노출
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()