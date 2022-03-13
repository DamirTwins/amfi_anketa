
const url = "https://script.google.com/macros/s/AKfycbxkzZE5AJry4cXomSYR8hb2cRpmqZvX6awdB5E6n2iDsptSExWmv9fEQ6edUzSvOMznFw/exec";
const form  = document.forms["google-sheet"];
form.addEventListener('submit', e => { 
   console.log("hello");
    e.preventDefault()
    fetch(url, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Спасибо за участие в заполнении Анкеты!"))
        .catch(error => console.error('Error!', error.message))
});

function submitForm() {
    // Get the first form with the name
    // Hopefully there is only one, but there are more, select the correct index
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit
    frm.reset();  // Reset
    return false; // Prevent page refresh
 }


 document.getElementById('blabla').value = ''
