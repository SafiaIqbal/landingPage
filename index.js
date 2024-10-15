function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    const nav = document.getElementById("nav");
    nav.classList.toggle("change");
 
    if (nav.classList.contains("change")) {
        nav.style.display = 'flex'; 
    } else {
        nav.style.display = 'none'; 
    }
}
 function darkTheme(){

    document.body.classList.toggle("dark-theme");
    }
 
const toggleButton=document.getElementById("toggle-btn");
toggleButton.addEventListener("change", darkTheme);