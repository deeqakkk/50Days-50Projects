const smallCups =
    document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage =
    document.getElementById('percentage');
const remained =
    document.getElementById('remained');

updateBigCup();

// Iterating through smallCups array
smallCups.forEach((cup, index) => {
//     handling the each click and calling the highlightCups() function to handle that
    cup.addEventListener('click', () =>
        highlightCups(index)
    );
});

// Highlight function
function highlightCups(index) {
//     if a glass is already fill and we again click on it, this condition will reduce the current index by 1
    if (
        smallCups[index].classList.contains('full') &&
        !smallCups[
            index
        ].nextElementSibling.classList.contains(
            'full'
        )
    ) {
        index--;
    }
//     iterating through each small cups and adding a class of 'full' 
    smallCups.forEach((cup, index2) => {
//         this condition will make sure that all the jars before the clicked jar also gets 'highlighted' on click
        if (index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
//     calling the updateBigCup
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(
        '.cup-small.full'
    ).length;
    console.log(fullCups);
//     counting the total number of small cups
    const totalCups = smallCups.length;
//     if the fullcup means no jar is clicked it means 100% of water is remaining to drink
    if (fullCups === 0) {
//         visibility of the bigger jar water percentage as hidden
        percentage.style.visibility = 'hidden';
//        so setting height =0
        percentage.style.height = 0;
    } else {
//         if any of the small jar is clicked then enabling the visibility of the percentage and water height in bigger container
        percentage.style.visibility = 'visible';
        percentage.style.height = `${
      (fullCups / totalCups) * 330
    }px`;
        percentage.innerText = `${
      (fullCups / totalCups) * 100
    }%`;
    }
// CHALLENGE : Try understanding following lines of code and its functioning, share your answer in the comment section
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${
      2 - (250 * fullCups) / 1000
    }L`;
    }
}
