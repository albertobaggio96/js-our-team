const mainElement = document.querySelector("main");


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
  
  let imgElement = getNewImgElement()
  imgElement.src = `img/${personTeam.photo}`
  mainElement.append(imgElement)
  let divElement = getNewDiv(mainElement)
  console.log(imgElement)
  mainElement.append(divElement)
  divElement.append(`${personTeam.name} ${personTeam.surname} ${personTeam.workingRole}`)
}

let getElement = document.querySelector("img")

console.log(getElement)



// *********************** Funzioni ******************************
function getNewDiv(){
  let newElement= document.createElement("div");

  return newElement
}

function getNewImgElement(){
  let newElement= document.createElement("img");

  return newElement
}