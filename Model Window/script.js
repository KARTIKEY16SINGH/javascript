'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', function() {
      console.log('Button Clicked', btnsOpenModel[i].textContent)
      modal.classList.remove('hidden')
      overlay.classList.remove('hidden')
    })
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(event){
    console.log(event)
    if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})
