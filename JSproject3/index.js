const btnElem = document.getElementById('new-color-button');
const spanElem = document.getElementById('current-color');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];


function getRandomHexVals() {
    const randomIndexPos = Math.floor(
        Math.random() * hexValues.length
    );

    const randomHexVal = hexValues[randomIndexPos];
    return randomHexVal;
}

function getRandomHexString(stringLength) {
    let hexstring = '';
    for (let index = 0; index < stringLength; index++) {
            hexstring += getRandomHexVals();    
    }
    return hexstring;
}


btnElem.addEventListener('click', () => {
    const randomHexString =  '#' + getRandomHexString(6);
    document.body.style.setProperty(
        'background-color',
        randomHexString
    );
    spanElem.textContent = randomHexString;
});

