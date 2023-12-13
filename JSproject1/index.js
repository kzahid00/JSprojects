const btn =  document.querySelector('button');
const span = document.querySelector('span');

btn.addEventListener("click", () => {
    const yourName = prompt('Please Enter your name');
    span.textContent = yourName;
});

