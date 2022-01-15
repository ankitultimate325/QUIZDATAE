
import { scriptURL } from "./open.js"
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(scriptURL)
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => $("#btom").html("<div class='alert alert-success'><b ><h3>DATA SUBMITTED SUCCESFULLY</h3></b></div>"))
    .catch(error => $("#btom").html("<div class='alert alert-danger'>Data not sent.</div>"))
})