const scriptURL = 'https://script.google.com/macros/s/AKfycbzbwRZPkJ17rWzpZflDB2ZRLtO7eCrD3Fd5Wmq41kY-ww_lTUneH_Rq5s6p6cSj0Bp7/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you!for reaching out to BC PARTNERS ,your form is submitted successfully."))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
