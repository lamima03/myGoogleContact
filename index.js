const firstNameInput = document.querySelector("#firsName");
const nameInput = document.querySelector("#name");
const entrepriseInput = document.querySelector("#entreprise");
const fonctionInput = document.querySelector("#fonction");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const libeleeInput = document.querySelector("#libellee");
let leftSection = document.querySelector(".sectionleft");
const buttonContactList = document.querySelector(".buttonContactList");
const submissionButton = document.querySelector(".submissionButtonNew");
let form = document.getElementById('form');
const inputs = form.elements;
let formulaire = null;
const createContactForm = document.getElementById('form');
const mesInput = document.querySelectorAll(".inputForm")
let compte = 0;



//menu burger
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

const showNewContactSection = (target) => {
    const element = document.getElementById('rightSection').firstElementChild;
    element.classList.add("hideSection");
    const cible = document.getElementById(target);
    cible.classList.remove('hideNewContactSection');
}
// removeEventListener()

function addcontact() {
    // <tr class="table__lign">
    //     <td class="item__tab">jemima</td>
    //     <td class="item__tab">jemiMukanza@gmail.com</td>
    //     <td class="item__tab">0810640653</td>
    //     <td class="item__tab">DG</td>
    //     <td class="item__tab">hiegbzds,bl;</td>
    // </tr>
    // console.log("addcontact :",formulaire)
    const trItem = document.createElement('tr');
    trItem.setAttribute("class", "table__lign");

    const tdNomComplet = document.createElement("td");
    tdNomComplet.setAttribute("class", "item__tab")
    tdNomComplet.textContent = firstNameInput.value + " " + nameInput.value ; 

    const tdEmail = document.createElement("td");
    tdEmail.setAttribute("class", "item__tab")
    tdEmail.textContent = emailInput.value;

    const tdPhone = document.createElement("td");
    tdPhone.setAttribute("class", "item__tab");
    tdPhone.textContent = phoneInput.value;

    const tdFonction = document.createElement("td");
    tdFonction.setAttribute("class", "item__tab")
    tdFonction.textContent = fonctionInput.value + " " + entrepriseInput.value;

    const tdLibelee = document.createElement("td");
    tdLibelee.setAttribute("class", "item__tab");
    tdLibelee.textContent = libeleeInput.value;

    let container__right = document.querySelector('.container__right')

    trItem.append(tdNomComplet, tdEmail, tdPhone, tdFonction, tdLibelee);
    container__right.appendChild(trItem);

    leftSection.append(tdLibelee);
    compte++
    for (let index = 0; index <mesInput.length; index++) {
         mesInput[index].value= "";
        
    }
}




function showMyListContact() {
    const contactList = document.getElementById('mainSection');
    contactList.classList.remove("hideSection");
    const newContactSection = document.getElementById("newContactSection")
    newContactSection.classList.add('hideNewContactSection');
    newContactSection.classList.add('newcontact') ;
    
}

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
const deletelibeleeSection = () =>{
    const eleveChampsLibelee =document.querySelector(".libeleeSection");
    eleveChampsLibelee.classList.add("libeleeSectionDisplay")
    
}

const savelibelee = ()=>{
    const valueLibelee = document.querySelector(".inputLibelee")
    const monLibelee = document.createElement("div");
    monLibelee.setAttribute("class", "libeleeform")
    // const monLabel = document.querySelector(".showlabel")
    // monLabel.classList.remove("labelLibelee")
    if (valueLibelee.value !== " " &&  valueLibelee.value !== leftSection.childNodes){
        monLibelee.textContent = valueLibelee.value ; 
    leftSection.append(monLibelee); 
        console.log(monLibelee);
    valueLibelee.value="";
    deletelibeleeSection();
    }
    else{
        deletelibeleeSection();
    }
   
    
    
    

}








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

