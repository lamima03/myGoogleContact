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



const showNewContactSection= (target)=> {
    const element = document.getElementById('rightSection').firstElementChild;
    element.classList.add("hideSection");
    const cible = document.getElementById(target);
    cible.classList.remove('hideNewContactSection');
}

let formulaire =null;
 const createContactForm= document.getElementById('form');
 



function addcontact(formulaire){
    console.log("addcontact :",formulaire)
    const tr__item = document.createElement('tr');
    tr__item.setAttribute("class","table__lign");

    const td__item = document.createElement("td")
    td__item.setAttribute("class","item__tab")
    td__item("prenon").textContent = formulaire.firsName;
    td__item("nome").textContent = formulaire.Name;
    td__item("entreprise").textContent = formulaire.Entreprise;
    td__item("Email").textContent = formulaire.Email;
    td__item("Pays").textContent = formulaire.Pays;

    let container__right= document.querySelector('.container__right')

    tr__item.appendChild(td__item("prenon"),td__item("nome"),td__item("entreprise"), td__item("Email"),td__item("Pays"));

    container__right.append(td__item("prenon"),td__item("nome"),td__item("entreprise"), td__item("Email"),td__item("Pays"));
}


function showMyListContact(){
    const contactList = document.getElementById('mainSection');
    contactList.classList.remove("hideSection");
    const newContactSection = document.getElementById("newContactSection")
    newContactSection.classList.add('hideNewContactSection');
    newContactSection.classList.add('newcontact');
}

const buttonContactList = document.querySelector(".buttonContactList");

const submissionButton = document.querySelector(".submissionButtonNew");






const showlibeleesection = (target)=> {
    const newLibellee = document.getElementById('champLibele');
    newLibellee.classList.remove("libeleeSectionDisplay");
    const cible = document.getElementById(target);
    cible.classList.add('libeleeSection');    
    
}


const cancelLibeleeSection = ()=>{
    const annulLibelee = document.getElementById('champLibele');
    annulLibelee.classList.add('libeleeSectionDisplay');
    const inputLibelee = document.querySelector('.inputLibelee');
    inputLibelee.value='';
    
}
function deletelibeleeSection (){
    const libeleeSection = document.querySelector(".main");
    libeleeSection.classList.add("libeleeSection");
}



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$tous  mes evenement $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


createContactForm.addEventListener('submit', (event)=>{
    const data = new FormData(event.target)
    formulaire = Object.fromEntries(data.entries())//.fromEntries à partir des entrees//
    console.log(formulaire);
    addcontact(formulaire)
 })
 
buttonContactList.addEventListener("click", showMyListContact);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputs.name);
})

