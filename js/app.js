//VARIABLES

const introSection = document.getElementById('section1');
const favColorsSection = document.getElementById('section2');
const seasonsSection = document.getElementById('section3');
const angerSection = document.getElementById('section4');

const nextButton1 = document.getElementsByClassName('next-btn')[0];
const nextButton2 = document.getElementsByClassName('next-btn')[1];
const nextButton3 = document.getElementsByClassName('next-btn')[2];

const colorBoxes = document.getElementsByClassName('color');

const summerBox = document.getElementsByClassName('summer-box')[0];
const summerImage = document.getElementsByClassName('summer-box')[0].getElementsByTagName('img')[0];

//EVENT LISTENERS


nextButton1.addEventListener('click', showColors);
nextButton2.addEventListener('click', showSeasons);
nextButton3.addEventListener('click', showAnger);


colorBoxes[0].addEventListener('click', markAsChecked1);
colorBoxes[1].addEventListener('click', markAsChecked2);
colorBoxes[2].addEventListener('click', markAsChecked3);
colorBoxes[3].addEventListener('click', markAsChecked4);
colorBoxes[4].addEventListener('click', markAsChecked5);
colorBoxes[5].addEventListener('click', markAsChecked6);
colorBoxes[6].addEventListener('click', markAsChecked7);
colorBoxes[7].addEventListener('click', markAsChecked8);

summerBox.addEventListener('mouseover', hoverSeasonsIn);
summerBox.addEventListener('mouseleave', hoverSeasonsOut);

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

function hoverSeasonsIn() {
    summerImage.style.opacity = "0";
    const summerTextP = document.createElement('p');
    summerTextP.textContent = "Summer";
    summerTextP.appendChild(summerBox);
}

function hoverSeasonsOut() {
    summerImage.style.opacity = "1";
}



function markAsChecked1(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[0].classList.toggle('color-checked');
    }

}
    function markAsChecked2(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[1].classList.toggle('color-checked');
    }

}
    function markAsChecked3(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[2].classList.toggle('color-checked');
    }

}
    function markAsChecked4(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[3].classList.toggle('color-checked');
    }

}    function markAsChecked5(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[4].classList.toggle('color-checked');
    }

}    function markAsChecked6(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[5].classList.toggle('color-checked');
    }

}    function markAsChecked7(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[6].classList.toggle('color-checked');
    }

}
      function markAsChecked8(e) {

    const item = e.target;

    if (item.classList[0] === 'color') {

            colorBoxes[7].classList.toggle('color-checked');
    }

}

