
const url = "https://script.google.com/macros/s/AKfycbyfrJn36jzKoM5P8o1dfrxcv77Gi2ZQrjSXwRnEJ4Akld-oAELrt-o525J20HmXT2pzeA/exec";
const form  = document.forms["google-sheet"];
form.addEventListener('submit', e => { 
   console.log("hello");
    e.preventDefault()
    fetch(url, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Спасибо за участие в заполнении Анкеты!"))
        .catch(error => console.error('Error!', error.message))
         
});

