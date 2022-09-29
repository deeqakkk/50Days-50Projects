const rangeInput = document.getElementById('range');

rangeInput.addEventListener('input', (e) => {
    const value = +e.target.value;
    // getting the label element
    const label = e.target.nextElementSibling;

    // getting the width of the range input from the CSS file
    const rangeWidth = getComputedStyle(e.target)
        .getPropertyValue('width');
    // getting the width of the label from the CSS file
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    // converting 300px to 300
    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

    // getting the min and max value of the input
    const max = +e.target.max;
    const min = +e.target.min;
    const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10);
    // updating the left css property of the label
    label.style.left = `${left}px`;
    // setting the label value
    label.innerHTML = value;
})

// function to convert one range of numbers to another
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}