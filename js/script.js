const mainElement = document.querySelector("main");
const rowElement= getNewElement("div");
rowElement.classList.add("row", "text-center");
mainElement.append(rowElement);


const peopleTeam=[
  {
    name: "Wayne",
    surname: "Barnett",
    workingRole: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela",
    surname: "Caroll",
    workingRole: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Wayne",
    surname: "Gordon",
    workingRole: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela",
    surname: "Lopez",
    workingRole: "Social Media",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott",
    surname: "Estrada",
    workingRole: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara",
    surname: "Ramos",
    workingRole: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  }
];

for(let i = 0; i < peopleTeam.length; i++){
  const personTeam = peopleTeam[i];
  console.log(personTeam);
  const colElement= getNewElement("div");
  colElement.classList.add("col-6");
  rowElement.append(colElement)
  const imgElement = getNewElement("img");
  imgElement.classList.add("w-50")
  imgElement.src = `img/${personTeam.photo}`;
  colElement.append(imgElement);
  const divElement = getNewElement("div");
  colElement.append(divElement);
  divElement.innerHTML = `${personTeam.name} <br> ${personTeam.surname} <br>${personTeam.workingRole}`;
}


// *********************** Funzioni ******************************
function getNewElement(elemnt){
  let newElement= document.createElement(elemnt);

  return newElement;
}

