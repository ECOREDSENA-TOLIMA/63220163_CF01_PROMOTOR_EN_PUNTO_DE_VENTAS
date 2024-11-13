<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Las ventas y la promoción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img-01.svg', alt='')
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        p Las ventas se planean de acuerdo a los objetivos propuestos por cada empresa, y las estrategias promocionales deben apuntar al logro de éstos, considerando siempre, factores como el plan de mercadeo formulado, ya que éste se constituye en carta de navegación para orientar las acciones relacionadas con las ventas, los calendarios comerciales y el ciclo de vida del producto, entre otros. 
        .cajon.color-secundario.p-4.mb-4(style="background-color:#FFF8E0")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4.mb-lg-0.mb-4 
              img.mb-3(src='@/assets/curso/temas/tema2/img-02.svg')
            .col-lg-9
              p.mb-0 El plan de ventas es el registro de la meta en ventas que se fija una empresa en un periodo determinado. Este documento es fundamental tanto para la planeación estratégica de las ventas (plan de mercadeo) como para su control. 

    p.mb-5(data-aos="fade-right") Cumplir con el plan de ventas es responsabilidad del representante o ejecutivo de ventas de cada compañía proveedora; éste, debe trabajar de la mano con los mercaderistas y promotores de venta, para lograr el objetivo y llegar a la meta trazada. La labor del promotor de ventas en las campañas promocionales es fundamental, y gran parte de su responsabilidad radica en garantizar su buen éxito. Los planes de ventas se deben revisar desde un enfoque estratégico tal como se narra a continuación: 

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Descripción general de la planificación de ventas estratégica.</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema2/img-03-01.svg', alt='La gráfica comparte un engranaje que presenta las 3 partes fundamentales de una planificación de ventas, por un lado está el calendario comercial, seguido del plan promocional que a su vez presenta y cierra el ciclo de vida del producto.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema2/img-03-02.svg', alt='La gráfica comparte un engranaje que presenta las 3 partes fundamentales de una planificación de ventas, por un lado está el calendario comercial, seguido del plan promocional que a su vez presenta y cierra el ciclo de vida del producto.') 

    p.mb-5(data-aos="fade-left") El plan de ventas puede estar diseñado con base en un #[b calendario comercial], que es una herramienta que usan las empresas para priorizar la venta de diferentes categorías, especificando las temporadas o fechas en las cuales se incrementa la venta de un producto por algún acontecimiento especial, como es el día de las madres, el día del amor y la amistad, la temporada escolar etc. En consonancia con este calendario comercial se hace posible establecer el #[b plan promocional], en el que se incluyen actividades y eventos dirigidos a incrementar la venta en estas temporadas; este plan promocional se concreta a través de negociaciones o acuerdos comerciales con los puntos de venta. El plan promocional también puede establecerse en función del ciclo de vida de un producto, esto significa, que de acuerdo a la etapa en la que se encuentre el producto, puede resultar conveniente a la empresa crear un plan promocional para promover su venta o para cumplir con el plan de ventas. 

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Ciclo de vida un producto 

    p.mb-5(data-aos="fade-right") Se encuentra referido al comportamiento de su perfil de venta durante el tiempo que permanezca activo en el mercado. Considerando que las condiciones de venta de un producto son cambiantes a lo largo del tiempo, se hace necesario entender y precisar el ciclo de vida que le asiste, con el fin de establecer estrategias basadas en la acción directa sobre el precio, la distribución y la promoción, de esta manera, se pretende alargar su vida en el mercado.

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-right")
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-out-up")
              .row(titulo="Fase de introducción")
                .col-md-12.mb-4.mb-md-0
                  p Esta fase aplica para nuevos productos que penetran el mercado, mediante la ejecución de altas inversiones en publicidad y eventos promocionales para dar a conocer el producto.  En esta fase difícilmente se obtiene una rentabilidad sobre la venta.

              .row(titulo="Fase de crecimiento")
                .col-md-12.mb-4.mb-md-0
                  p Es la etapa siguiente, siempre que esta haya tenido éxito en la de introducción del producto. En esta fase se comercializa en forma creciente el producto; en ella, la competencia aparece o ataca, situación que favorece la demanda y la empresa dueña del producto en crecimiento se preocupa por fortalecerlo o crear valor agregado que lo diferencie de la competencia; con base en esto, se planean las campañas promocionales.

              .row(titulo="Fase de madurez")
                .col-md-12.mb-4.mb-md-0
                  p En esta fase la mayoría de los consumidores potenciales poseen el producto y la demanda tiende a estancarse. Las empresas, ante la escasa demanda, tratan de reducir los costos para mantener el margen de utilidad, o crea eventos promocionales como el relanzamiento del producto introduciendo algún tipo de cambio, ya sea en la imagen o algún atributo adicional. 
              
              .row(titulo="Fase de declive")
                .col-md-12.mb-4.mb-md-0
                  p Esta es la fase final de un producto, su demanda se ha reducido significativamente y las empresas suelen tomar decisiones como sacarlo del mercado, y se concentran en la creación de otros bienes sustitutivos o diferentes. En esta fase, se pueden crear eventos promocionales que buscan la liquidación del producto y agotar los inventarios finales. 

      .col-lg-4.col-12.mb-5.d-lg-flex.d-none(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema2/img-04.svg', alt='Rutinas de limpieza')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#FFECDA")
          p.mb-0 Las fases son diferentes de acuerdo al tipo de producto, por ejemplo la fase de madurez de un producto de consumo cotidiano como alimentos es diferente a la fase de madurez de un producto como los teléfonos celulares. Los expertos en mercadeo tienen en cuenta todas estas consideraciones cuando planean la promoción o la realización de eventos.







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
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
