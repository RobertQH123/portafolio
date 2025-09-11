const enlaceCopiarCorreo = document.getElementById('copiar-correo')
const etiquetaConfirmacion = document.getElementById('etiqueta-confirmacion')

// ¡IMPORTANTE! Reemplaza esto con tu correo electrónico real
const miCorreo = 'robertquispehuacho@gmail.com'

// Añadimos el evento 'click' al enlace
enlaceCopiarCorreo.addEventListener('click', function (event) {
  // Prevenimos que el enlace navegue a "#"
  event.preventDefault()

  // Usamos la API del Portapapeles para copiar el correo
  navigator.clipboard
    .writeText(miCorreo)
    .then(() => {
      // Si la copia es exitosa, MOSTRAMOS la etiqueta añadiendo la clase 'visible'
      etiquetaConfirmacion.classList.add('visible')

      // Después de 2.5 segundos, la OCULTAMOS quitando la clase 'visible'
      setTimeout(() => {
        etiquetaConfirmacion.classList.remove('visible')
      }, 800) // 2500 milisegundos = 2.5 segundos
    })
    .catch((err) => {
      console.error('Error al intentar copiar el correo: ', err)
      // Si hay un error, podemos cambiar el texto y el color de la etiqueta
      etiquetaConfirmacion.innerText = 'Error'
      etiquetaConfirmacion.style.backgroundColor = '#dc3545' // Color rojo
      etiquetaConfirmacion.classList.add('visible')

      setTimeout(() => {
        etiquetaConfirmacion.classList.remove('visible')
        // Restauramos el texto y color originales por si el usuario lo intenta de nuevo
        etiquetaConfirmacion.innerText = 'Copiado'
        etiquetaConfirmacion.style.backgroundColor = '#28a745'
      }, 3000)
    })
})
