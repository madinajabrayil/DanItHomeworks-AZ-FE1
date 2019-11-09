let buttons = document.querySelectorAll('.btn');

document.addEventListener('keyup', (e) => {
    buttons.forEach((keyCode) => {
        if (keyCode.innerText === e.key.toUpperCase()) {
            keyCode.style.backgroundColor = "blue";
        }
    });
});

document.body.addEventListener('keydown', () => {
    buttons.forEach((keyCode) => {
        keyCode.style.backgroundColor = "black"; 
    });
    
});





