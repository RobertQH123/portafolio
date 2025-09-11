// Tu código existente para el clic (está perfecto)
let list = document.querySelectorAll('.navigation #li-menu')

function activeLink() {
  list.forEach((item) => item.classList.remove('active'))
  this.classList.add('active')
}

list.forEach((item) => item.addEventListener('click', activeLink))

// --- AÑADE ESTE NUEVO CÓDIGO ---

// 1. Selecciona todas las secciones que tienen un ID
const sections = document.querySelectorAll('section[id]')

// 2. Crea la función que se ejecutará al hacer scroll
function highlightActiveLinkOnScroll() {
  // Obtiene la posición actual del scroll vertical
  let scrollY = window.scrollY

  // 3. Revisa cada sección
  sections.forEach((currentSection) => {
    const sectionHeight = currentSection.offsetHeight // Alto de la sección
    const sectionTop = currentSection.offsetTop - 100 // Distancia desde el top de la página hasta la sección (con un margen de 100px)
    let sectionId = currentSection.getAttribute('id')

    // 4. Comprueba si la posición del scroll está dentro de la sección actual
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // 5. Si está, busca el enlace correspondiente y le añade la clase 'active'
      document
        .querySelector('.navigation a[href*=' + sectionId + ']')
        .parentElement.classList.add('active')
    } else {
      // 6. Si no, le quita la clase 'active'
      document
        .querySelector('.navigation a[href*=' + sectionId + ']')
        .parentElement.classList.remove('active')
    }
  })
}

// 7. Escucha el evento 'scroll' en la ventana y llama a la función
window.addEventListener('scroll', highlightActiveLinkOnScroll)

const hamburgerBtn = document.querySelector('.hamburger-menu')
const closeBtn = document.querySelector('.close-btn')
const navigationMenu = document.querySelector('.navigation')
const navLinks = document.querySelectorAll('.navigation a') // Todos los enlaces del menú

// Función para abrir el menú
function openMenu() {
  navigationMenu.classList.add('open')
}

// Función para cerrar el menú
function closeMenu() {
  navigationMenu.classList.remove('open')
}

// Event listener para el botón de hamburguesa
hamburgerBtn.addEventListener('click', openMenu)

// Event listener para el botón de cierre
closeBtn.addEventListener('click', closeMenu)

// Cierra el menú al hacer clic en un enlace (muy útil para páginas de una sola sección)
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})
