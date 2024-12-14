<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Promoción y publicidad lugar de venta (PLV)

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema6/img-01.png', alt='')

    p.mb-5 La Promoción y Publicidad en el Lugar de Venta (PLV) comprende una serie de actividades de corta duración orientadas a motivar directamente la compra, ya sea mediante incentivos económicos para el consumidor o el vendedor. Su objetivo es aumentar las ventas a través de estrategias como cupones, demostraciones, degustaciones, incentivos de fidelización, bonos, exhibiciones, muestras gratis, premios, ofertas y concursos. Aunque estas actividades representan una inversión significativa, se espera que generen un incremento en las ventas que compense el costo promocional, logrando así un retorno positivo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-4(style="background-color:#FFF8E0")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4 
              img.mb-3(src='@/assets/curso/temas/tema6/img-02.svg')
            .col-lg-9
              p Algunas estrategias promocionales destacadas incluyen:
              ul.lista-ul.mb-3
                li(data-aos="fade-down")
                  i.fas.fa-store(style="color: #FFACAC")
                  p.mb-0 Cupones distribuidos en el punto de venta o enviados al domicilio del consumidor, como los que se adjuntan a facturas de servicios.
                
                li(data-aos="fade-down")
                  i.fas.fa-store(style="color: #FFACAC")
                  p.mb-0 Productos adicionales gratuitos (como una muestra de menor tamaño o un obsequio).
                
                li(data-aos="fade-down")
                  i.fas.fa-store(style="color: #FFACAC")
                  p.mb-0 Reducciones de precio en áreas destacadas del establecimiento, como en puntas de góndola. 
                
    p Aunque las promociones en el lugar de venta generan un fuerte impacto en las ventas, una adecuada combinación con la publicidad puede potenciar aún más los resultados de una campaña. La publicidad es una comunicación no personal que informa, persuade y recuerda al consumidor sobre las características y beneficios del producto, utilizando medios como la televisión.
    p.mb-5 Hernández Garnica y Maubert Viveros (2009) destacan varios tipos de publicidad:

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        //- .d-none.d-sm-none.d-md-block
        figure 
          img(src='@/assets/curso/temas/tema6/img-03.svg', alt='')
      .col-lg-6.col-12(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Publicidad pionera") Se dirige a una categoría de productos, no a una marca específica. Por ejemplo, una campaña para fomentar el consumo de huevo.
          p(numero="2" titulo="Publicidad competitiva") Resalta beneficios específicos de un producto frente a la competencia, siendo informativa o persuasiva.
          p(numero="3" titulo="Publicidad comparativa") Compara dos o más marcas en función de características concretas.
          p(numero="4" titulo="Publicidad de recordación") Busca que el consumidor recuerde la marca mediante elementos como melodías o frases pegajosas.
          p(numero="5" titulo="Publicidad de refuerzo") Asegura al cliente que tomó una decisión correcta al elegir el producto.  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4.mb-5(style="background-color:#FFECDA")
          p.mb-0 La PLV va más allá de simplemente exhibir información, pues busca crear una experiencia única en el consumidor dentro del punto de venta, motivándolo a comprar mediante la presentación de elementos atractivos y diferenciadores frente a la competencia. Esta estrategia de #[i marketing] también utiliza material P.O.P #[i (Point of Purchase)], elaborado cuidadosamente por agencias de publicidad, para transmitir mensajes y visuales diseñados para captar la atención del cliente y generar una conexión memorable con el producto.
          




</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
