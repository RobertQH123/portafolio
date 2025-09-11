const container = document.getElementById('container')
const colors = ['#0f0', '#ff0', '#f00', '#f0f', '#0ff', '#0af', '#fa0', '#f05']
const cardSize = 50 // tamaño de cada cuadrito

function generateCards() {
  container.innerHTML = '' // limpiar antes
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight

  const cols = Math.floor(containerWidth / cardSize)
  const rows = Math.floor(containerHeight / cardSize)

  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
  container.style.gap = '2px'

  for (let i = 0; i < rows * cols; i++) {
    const div = document.createElement('div')
    div.className = 'card'
    div.style.setProperty(
      '--clr',
      colors[Math.floor(Math.random() * colors.length)]
    )
    container.appendChild(div)
  }

  // efecto de luz al mover el mouse
  let cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.onmousemove = function (e) {
      let rect = card.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      card.style.setProperty('--x', x + 'px')
      card.style.setProperty('--y', y + 'px')
    }
  })
}

generateCards()
window.addEventListener('resize', generateCards)

var typed = new Typed('.text-main-span', {
  strings: ['Ingeniero de Sistemas', 'Desarrollador Fullstack'],
  typeSpeed: 50, // antes 100
  backSpeed: 50, // antes 100
  backDelay: 500, // antes 1000
  loop: true,
})
