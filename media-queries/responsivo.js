function toggleMenu(){
    const asideMenu = document.getElementsByTagName("aside")[0];
    asideMenu.classList.toggle("show");
}

const botaoHamburguer = document.querySelector(".hamburguer");
botaoHamburguer.onclick = toggleMenu;