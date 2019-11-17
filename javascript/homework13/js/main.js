let bColor = document.querySelector('.bg-color');
let changeThemeBtn = document.querySelector('.btn');
let theme = window.localStorage.getItem('theme');

function dark() {
   
    bColor.style.backgroundColor = "black"
    changeThemeBtn.className = "dark"
}

function light() {
   
    bColor.style.backgroundColor = "grey"
    changeThemeBtn.className = ""
}

changeThemeBtn.addEventListener('click',changeTheme);

function changeTheme(){
    if (!changeThemeBtn.className) {
        localStorage.setItem('theme', 'dark') 
        dark();
    } else {
        light();
        localStorage.setItem('theme', 'light')
        
    }
}


if (localStorage.getItem('theme') === 'dark') {
    dark()
}
