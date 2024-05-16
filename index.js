const firstNameInput = document.querySelector("#firsName");
const nameInput = document.querySelector("#name");
const entrepriseInput = document.querySelector("#entreprise");
const fonctionInput = document.querySelector("#fonction");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone")
const libeleeInput = document.querySelector("#libellee")


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



const showNewContactSection = (target) => {
    const element = document.getElementById('rightSection').firstElementChild;
    element.classList.add("hideSection");
    const cible = document.getElementById(target);
    cible.classList.remove('hideNewContactSection');
}

let formulaire = null;
const createContactForm = document.getElementById('form');




function addcontact() {
    // <tr class="table__lign">
    //     <td class="item__tab">jemima</td>
    //     <td class="item__tab">jemiMukanza@gmail.com</td>
    //     <td class="item__tab">0810640653</td>
    //     <td class="item__tab">DG</td>
    //     <td class="item__tab">hiegbzds,bl;</td>
    // </tr>
    // console.log("addcontact :",formulaire)
    const tr__item = document.createElement('tr');
    tr__item.setAttribute("class", "table__lign");

    const td__nomComplet = document.createElement("td");
    td__nomComplet.setAttribute("class", "item__tab")
    td__nomComplet.textContent = firstNameInput.value + " " + nameInput.value ; 

    const td__Email = document.createElement("td");
    td__Email.setAttribute("class", "item__tab")
    td__Email.textContent = emailInput.value;

    const td__phone = document.createElement("td");
    td__phone.setAttribute("class", "item__tab")
    td__phone.textContent = phoneInput.value;

    const td__fonction = document.createElement("td");
    td__fonction.setAttribute("class", "item__tab")
    td__fonction.textContent = fonctionInput.value + " " + entrepriseInput.value;

    const td__libelee = document.createElement("td");
    td__libelee.setAttribute("class", "item__tab")
    td__libelee.textContent = libeleeInput.value;

    let container__right = document.querySelector('.container__right')

    tr__item.append(td__nomComplet, td__Email, td__phone, td__fonction, td__libelee);
    container__right.appendChild(tr__item);
}




function showMyListContact() {
    const contactList = document.getElementById('mainSection');
    contactList.classList.remove("hideSection");
    const newContactSection = document.getElementById("newContactSection")
    newContactSection.classList.add('hideNewContactSection');
    newContactSection.classList.add('newcontact');
}

const buttonContactList = document.querySelector(".buttonContactList");

const submissionButton = document.querySelector(".submissionButtonNew");






const showlibeleesection = (target) => {
    const newLibellee = document.getElementById('champLibele');
    newLibellee.classList.remove("libeleeSectionDisplay");
    const cible = document.getElementById(target);
    cible.classList.add('libeleeSection');

}


const cancelLibeleeSection = () => {
    const annulLibelee = document.getElementById('champLibele');
    annulLibelee.classList.add('libeleeSectionDisplay');
    const inputLibelee = document.querySelector('.inputLibelee');
    inputLibelee.value = '';

}
function deletelibeleeSection() {
    const libeleeSection = document.querySelector(".main");
    libeleeSection.classList.add("libeleeSection");
}




libeleeInput = document.querySelector("#libellee");
document.addEventListener("click", function(event){
    libeleeInput.remove(event);
})



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$tous  mes evenement $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


createContactForm.addEventListener('submit', (event) => {
    // const data = new FormData(event.target)
    // formulaire = Object.fromEntries(data.entries())//.fromEntries à partir des entrees//
    // console.log(formulaire);
    addcontact()
})

buttonContactList.addEventListener("click", showMyListContact);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputs.name);
})

