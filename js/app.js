//VARIABLES

const introSection = document.getElementById('section1');
const favColorsSection = document.getElementById('section2');
const seasonsSection = document.getElementById('section3');
const angerSection = document.getElementById('section4');

const nextButton1 = document.getElementById('button1');

//EVENT LISTENERS


//FUNCTIONS

function show() {

    favColorsSection.style.display = "block";
    console.log('hey');

}

nextButton1.onclick = show();


