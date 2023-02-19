const btnBuyTicket = document.getElementsByClassName('buy-tickets-btn')
const closeIcon = document.getElementById('form-close-icon')
const closeBtn = document.getElementById('close-btn')
const modal = document.getElementById('modal')
const modalForm = document.querySelector('.js-modal-form')
for (let i = 0; i < btnBuyTicket.length; i++) {
  btnBuyTicket[i].addEventListener('click', () => {
    modal.style.display = 'flex'
  })
}

closeIcon.addEventListener('click', () => {
  modal.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

modal.addEventListener('click', () => {
  modal.style.display = 'none'
})

modalForm.addEventListener('click', (e) => {
  e.stopPropagation()
})
