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
    // cible.classList.add('newcontact');
}
 const createContactForm= document.getElementById('form');
 createContactForm.addEventListener('submit', (event)=>{
    const data = new FormData(event.target)
    const formulaire = Object.fromEntries(data.entries())//.fromEntries à partir des entrees//
    console.log(formulaire);
 })

//  <tr class="table__lign">
//  <td class="item__tab">jemima</td>
//  <td class="item__tab">jemiMukanza@gmail.com</td>
//  <td class="item__tab">0810640653</td>
//  <td class="item__tab">DG</td>
//  <td class="item__tab">hiegbzds,bl;</td>
// </tr>


function addcontact(){
    const tr__item = document.createElement('tr');
    tr__item.setAttribute("class","table__lign");

    const td__item = document.createElement("td")
    td__item.setAttribute("class","item__tab")
    td__item.textContent = formulaire.firsName

    let container__right= document.querySelector('.container__right')

    tr__item.appendChild(td__item);
    container__right.appendChild(tr__item);
}


function showMyListContact(){
    const contactList = document.getElementById('mainSection');
    contactList.classList.remove("hideSection");
    const newContactSection = document.getElementById("newContactSection")
    newContactSection.classList.add('hideNewContactSection');
    newContactSection.classList.add('newcontact');
}

const buttonContactList = document.querySelector(".buttonContactList");
buttonContactList.addEventListener("click", showMyListContact);


const submissionButton = document.querySelector(".submissionButtonNew");
submissionButton.addEventListener("click", addcontact );

function showlibeleesection(){
    const newLibellee = document.getElementById('champLibele');
    newLibellee.classList.add("libeleeSection");

    // const ourLibelée = document.getElementById("newContactSection")
    // newContactSection.classList.add('hideNewContactSection');
    // newContactSection.classList.add('newcontact');
}
const button__libelle = document. querySelector(".button__libelle");
button__libelle.addEventListener("click",showlibeleesection )


