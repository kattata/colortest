//VARIABLES

const introSection = document.getElementById('section1');
const favColorsSection = document.getElementById('section2');
const seasonsSection = document.getElementById('section3');
const angerSection = document.getElementById('section4');

const nextButton1 = document.getElementsByClassName('next-btn')[0];
const nextButton2 = document.getElementsByClassName('next-btn')[1];
const nextButton3 = document.getElementsByClassName('next-btn')[2];

const colorBoxes = document.getElementsByClassName('color');

const summerImage = document.getElementsByClassName('summer-box')[0].getElementsByTagName('img')[0];
const summerText = document.getElementById('section3').getElementsByTagName('p')[0];

const fallImage = document.getElementsByClassName('fall-box')[0].getElementsByTagName('img')[0];
const fallText = document.getElementById('section3').getElementsByTagName('p')[1];

const winterImage = document.getElementsByClassName('winter-box')[0].getElementsByTagName('img')[0];
const winterText = document.getElementById('section3').getElementsByTagName('p')[2];

const springImage = document.getElementsByClassName('spring-box')[0].getElementsByTagName('img')[0];
const springText = document.getElementById('section3').getElementsByTagName('p')[3];

const seasonBoxes = document.getElementsByClassName('season');

const colorsUl = document.getElementById('colors-list');
const colorsDiv = document.getElementById('colors-added');
const colorOkBtn = document.getElementById('ok-btn');
const colorsInput = document.getElementById('input');

const trashBtn = document.getElementsByClassName('trash-btn');

//EVENT LISTENERS


nextButton1.addEventListener('click', showColors);
nextButton2.addEventListener('click', showSeasons);
nextButton3.addEventListener('click', showAnger);


//make this loop work bitch
//for (i = 0; i < seasonBoxes.length; i++) {
//    seasonBoxes[i].addEventListener('click', marker(this));
//}


colorOkBtn.addEventListener('click', addToList);

colorsUl.addEventListener('click', deleteListItem);


//FUNCTIONS

function showColors() {

    introSection.style.pointerEvents = "none";
    favColorsSection.style.opacity = "1";
    favColorsSection.style.pointerEvents = "visible";
    introSection.style.opacity = "0";

}

function showSeasons() {

    favColorsSection.style.pointerEvents = "none";
    favColorsSection.style.opacity = "0";
    seasonsSection.style.opacity = "1";
    seasonsSection.style.pointerEvents = "visible";
}

function showAnger() {

    seasonsSection.style.pointerEvents = "none";
    seasonsSection.style.opacity = "0";
    angerSection.style.opacity = "1";
    angerSection.style.pointerEvents = "visible";

}


function hoverSeasonsIn(image, name) {
    for (i = 0; i < seasonBoxes.length; i++) {
        image.style.opacity = "0";
        name.style.opacity = "1";

    }
}

function hoverSeasonsOut(image, name) {
    for (i = 0; i < seasonBoxes.length; i++) {
        image.style.opacity = "1";
        name.style.opacity = "0";
    }
}



function addToList(event) {
    event.preventDefault();

    //create colors-items div
    const list = document.createElement('div');
    list.classList.add('colors-items');

    //create colors-item li
    const listItem = document.createElement('li');
    listItem.classList.add('colors-item');
    list.appendChild(listItem);

    //create trash-btn button
    const trashBtn = document.createElement('button');
    const trashImg = document.createElement('img');
    trashImg.classList.add('height');
    trashImg.src = 'media/bin.svg';
    trashBtn.appendChild(trashImg);
    trashBtn.classList.add('trash-btn');
    list.appendChild(trashBtn);

    //appennd to ul
    colorsDiv.appendChild(list);

    //clear input after submitting
    colorsInput.value = "";
}

function deleteListItem(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const iconParent = item.parentElement;
        iconParent.remove();
        console.log('heh');
    }
}






function marker(box) {
    box.classList.toggle('color-checked');
}