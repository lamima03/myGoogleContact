const hideSideBar = (target) => {
    let cible = document.getElementById(target);
    const isHide = cible.classList.contains('hideSection');
    if (isHide) {
        cible.classList.remove("hideSection");
    }
    else {
        cible.classList.add("hideSection");
    }
}

let form = document.getElementById('form');
const inputs = form.elements

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputs.name);
})

const showNewContactSection= (target)=> {
    const element = document.getElementById('rightSection').firstElementChild;
    element.classList.add("hideSection");
    const cible = document.getElementById(target);
    cible.classList.remove('hideNewContactSection');
    cible.classList.add('newcontact');
}