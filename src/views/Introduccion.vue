<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='')
      .col-lg-8.col-12.mb-3(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4(style="background-color:#FFF8E0")
          p.mb-0 Un promotor en el punto de venta es aquella persona que se dedica a impulsar y cerrar la venta, dando información de los producto y resaltando sus bondades. El promotor en el punto de venta es muy importante dado que se tienen datos estadísticos que muestran que más del 75% de las decisiones de compra se toman en el punto de venta.
        p Conocer algunos conceptos básicos de la actividad de #[i merchandising] facilitará la preparación del promotor de ventas para ejecutar su labor y es la razón por la cual en esta unidad trataremos los conceptos claves que le permitirán reconocer los elementos que conforman esta actividad, su aplicabilidad y manejo.
        p Contextualizados los recursos que requiere la promoción en el punto de ventas, y entendido el manejo que se debe dar a la negociación mediante la preparación del escenario para llegar al cliente o consumidor final, es importante centrar la atención en el desempeño que debe tener el promotor durante las diferentes campañas promocionales, así como en el desempeño de actividades y tareas habituales propias de su labor, en donde se resalta la perspicacia en el conocimiento del cliente y la definición del recurso apropiado para su abordaje efectivo, de manera que su acción de venta alcance el éxito esperado. 
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/cEJn3TPp3Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
