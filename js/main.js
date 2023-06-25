window.onload = function() {
  clickIconMenu();
  enableLink();
}

function showMenu(){
  let menu = document.getElementById("menu");
  menu.classList.toggle("menu-mobile");  

  let iconMenu = document.getElementById("icon-menu-movil");
  iconMenu.classList.toggle("fa-bars");
  iconMenu.classList.toggle("fa-xmark");
}

function clickIconMenu(){
  document.getElementById("icon-menu").addEventListener( 'click',  e =>{
    showMenu();  
  });
}

function enableLink(){
  let menu = document.getElementById("menu");
  let listaMenu = menu.querySelectorAll("ul li a"); 
  listaMenu.forEach(el => {
    el.addEventListener("click", e => {
      e.target.classList.toggle("active");
      if(menu.classList.contains("menu-mobile"))
        showMenu();

      let seccion = e.target.getAttribute("href");
      if(seccion == "#header"){
        document.getElementById("header").classList.remove("header-top");
       // document.querySelector("main").classList.remove("main-show");
      }
      else{
        document.getElementById("header").classList.add("header-top");
        document.querySelector(seccion).classList.add("section-show");
        //document.querySelector("main").classList.add("main-show");
      }
    });
  });
}

function funcionesLink(){
  desableLink();
  ocultarSeccion();
}

function desableLink(){
  let listaNav = document.getElementById("menu").querySelectorAll("ul li a");
  listaNav.forEach(el => {
    el.classList.remove("active");
  }); 
}

function ocultarSeccion(){
  let secciones = document.querySelectorAll("section");
  secciones.forEach(el => {
    el.classList.remove('section-show');
    
  });
}

