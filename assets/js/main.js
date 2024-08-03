const menu_open = document.getElementById('menu_open');
const menu_modal = document.getElementById('menu_modal');
const menu_close = document.getElementById('menu_close');
const contact_open = document.getElementById('contact_open');
const contact_modal = document.getElementById('contact_modal');
const contact_close = document.getElementById('contact_close')
const submit_btn = document.getElementById('submit_btn')

function closeModal(modal_name) {
    modal_name.classList.remove('show')
}

menu_open.addEventListener('click', () => {
    menu_modal.classList.add('show');
});

menu_close.addEventListener('click', ()=> {
    closeModal(menu_modal);
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('links')) {
        closeModal(menu_modal);
    }
})

contact_open.addEventListener('click', () => {
    contact_modal.classList.add('show');
});

contact_close.addEventListener('click', ()=> {
    closeModal(contact_modal);
});

submit_btn.addEventListener('click', ()=> {
    closeModal(contact_modal);
});


var copy = document.querySelector(".testimonial-list").cloneNode(true);
document.querySelector(".testimonial-container").appendChild(copy);
