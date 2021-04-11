const liveBottom = document.querySelectorAll('.live'),
imgBottom = document.querySelector('.big__img'),
linkBlock = document.querySelectorAll('.link__active')

imgBottom.addEventListener("click", event => document.querySelector('.glv__img').classList.add('active'));
document.querySelector('.exit').addEventListener('click', event => document.querySelector('.glv__img').classList.remove('active'))

for (let i = 0; i < liveBottom.length; i++) {
    const tabItem = liveBottom[i];
    tabItem.addEventListener('click',function(){
        liveBottom[0].classList.remove('active')
        liveBottom[1].classList.remove('active')
        liveBottom[i].classList.add('active')
    })
  }

  document.querySelector('.bars')
  document.querySelector('.bars').addEventListener('click', event => document.querySelector('.nav__link').style = 'transform: translateX(0)')
  document.querySelector('.x_exit').addEventListener('click', event => document.querySelector('.nav__link').style = clientInformation)