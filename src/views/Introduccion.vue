<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p El cajero desempeña un rol fundamental en el proceso de compra, siendo el primer y último punto de contacto del cliente en el #[em retail]. El cajero no solo maneja transacciones, sino que también asegura una experiencia de compra fluida y agradable. Esta posición es una de las más representativas en el #[em retail], ya que la atención y el servicio brindados pueden influir directamente en la satisfacción y lealtad del cliente. Este componente formativo permitirá conocer entre otras cosas, los recursos y herramientas disponibles para desempeñar las funciones del cajero de manera eficiente. Consulte el video que se presenta a continuación. ¡Éxitos en este proceso de aprendizaje!   
      
      figure
        .video
          iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/_zGNNnrKIt4?si=jJTJNLOCY9pXnI5p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Recursos del cajero: Introducción.
  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
