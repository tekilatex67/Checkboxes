let checkboxes = document.querySelectorAll('input');
let firstCheck;
let shiftDown = false;


function multicheck(e) {

    let isBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === firstCheck) {
                isBetween = !isBetween;
            }

            if (isBetween) {
                checkbox.checked = true;
            }
        })
    }
    firstCheck = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', multicheck))