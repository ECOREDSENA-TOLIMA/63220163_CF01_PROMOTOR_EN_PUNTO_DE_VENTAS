<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Acuerdos comerciales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img-01.svg', alt='')
      .col-lg-8.col-12.mb-3(data-aos="fade-left")
        p En el contexto de la promoción de productos, los acuerdos comerciales desempeñan un papel fundamental. Estos convenios, que se establecen entre proveedores y distribuidores, buscan optimizar la venta de productos en puntos de venta específicos. El promotor, como intermediario clave en este proceso, tiene un rol esencial en la negociación y ejecución de estos acuerdos.
        p Los acuerdos comerciales surgen de la necesidad de ambas partes de alcanzar objetivos comunes. Estos pueden variar desde la introducción de nuevos productos en el mercado hasta el incremento de las ventas de productos ya existentes. La negociación, en este sentido, se convierte en un proceso dinámico en el cual se establecen condiciones mutuamente beneficiosas.
        p La efectividad de un acuerdo comercial depende en gran medida de la planificación y la negociación. Los promotores deben contar con información detallada sobre los productos, los objetivos de la empresa y las características de los puntos de venta. Además, deben ser capaces de identificar las necesidades y expectativas de los clientes y adaptar la propuesta comercial en consecuencia.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ubicación de los productos en el punto de venta es un factor determinante en su visibilidad y, por ende, en su venta. Las zonas calientes, aquellas de mayor flujo de clientes, son altamente codiciadas por las marcas. Sin embargo, la negociación de estos espacios requiere de una comprensión profunda de la dinámica del punto de venta y de las estrategias de #[i merchandising.]

    p.mb-5(data-aos="fade-right") Los elementos clave en la negociación de acuerdos comerciales son los siguientes: 

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        //- .d-none.d-sm-none.d-md-block
        figure 
          img(src='@/assets/curso/temas/tema3/img-03.svg', alt='')
      .col-lg-6.col-12(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Objetivos claros y medibles") Los promotores deben establecer objetivos específicos y cuantificables para cada negociación.
          p(numero="2" titulo="Conocimiento del producto y del mercado") Una sólida comprensión del producto y de su posicionamiento en el mercado es esencial para argumentar de manera efectiva.
          p(numero="3" titulo="Análisis de la competencia") El conocimiento de las acciones de la competencia permite identificar oportunidades y diferenciar la propuesta.
          p(numero="4" titulo="Habilidades de negociación") La capacidad de escuchar, persuadir y llegar a acuerdos mutuamente beneficiosos es fundamental.
          p(numero="5" titulo="Flexibilidad") La disposición a adaptar la propuesta a las necesidades del cliente es clave para cerrar acuerdos. 

    p.mb-5(data-aos="fade-left") Para determinar las zonas calientes y frías en un punto de venta, se debe analizar la circulación del cliente considerando tres situaciones: 

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        PasosA.color-acento-contenido.mb-5.px-md-5.px-4(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              p.mb-0 Cuando se trata de una compra fuerte como el reabastecimiento de productos básicos; en este tipo de visita, su recorrido básicamente cubre todo el punto de venta.  En este caso, la zona caliente incluye los pasillos principales del almacén.

            .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema3/img-04.png', alt='Texto que describa la imagen')

          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/img-05.png', alt='Texto que describa la imagen')

            .col-lg-6(data-aos="fade-left")
              p.mb-0 Cuando se trata de una compra específica, es decir, para reponer un producto que se le ha agotado, su circulación dentro del local es por el perímetro del mismo porque sabe exactamente qué busca y pretende dirigirse al anaquel que lo contiene. En este caso, la zona caliente sería el perímetro del almacén y la zona a donde se dirige. 

          .row.justify-content-center.align-items-center(data-aos="fade-right")
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              p.mb-0 Cuando visita el almacén con solo la intención de observar o verificar algo de su interés. En este caso, la zona caliente seria el perímetro del almacén.

            .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema3/img-06.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-right") De acuerdo a lo anterior, se puede concluir que hay una zona en la que circula el #[i shopper] en cualquiera de las situaciones y es el perímetro del almacén; esta zona de mayor tránsito, es la de más impacto en el comprador. Otro punto alto de circulación es el cruce de ruta de la compra fuerte con la compra específica. Considerando esta situación, se denomina “Zona caliente” al recorrido natural que hace el #[i shopper] en la búsqueda visual de lo que necesita; por tanto, se identifica como zona caliente el perímetro del almacén y los puntos que se visitan en cada una de las situaciones explicadas para una compra fuerte y para una compra específica.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4.mb-5(style="background-color:#FFECDA")
          p.mb-0 El término de zona caliente, también es aplicable a aquella donde el cliente o #[i shopper] pasa mayor tiempo, ya sea tocando, observando o degustando los productos; como por ejemplo, las cajas registradoras, dado que estas, generalmente, se encuentran a la entrada o sitios estratégicos de distribución del almacén, llevando al fácil desplazamiento del cliente por estos lugares. 

        p.mb-5 Se le denomina zonas frías a aquellas que están más retiradas de la zona caliente, detrás de columnas, en rincones o puntos ciegos como se puede evidenciar en la siguiente gráfica:

        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Zonas calientes y frías en el almacén.</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema3/img-07-01.svg', alt='La gráfica representa un dibujo de los movimientos que se hacen en los puntos de venta permitiendo establecer zonas de calor para alimentos y zonas refrigeradas que se ubican de manera estratégica para mantener las prioridades y características de los productos.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema3/img-07-01.svg', alt='La gráfica representa un dibujo de los movimientos que se hacen en los puntos de venta permitiendo establecer zonas de calor para alimentos y zonas refrigeradas que se ubican de manera estratégica para mantener las prioridades y características de los productos.') 

        .col-12.d-block.d-md-none.mt-4
          a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_zonas_calientes_frías_en_el_almacén.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Anexo.] Zonas calientes y frías en el almacén

    p(data-aos="fade-left") Para puntos de venta como supermercados de barrio o de venta con mostrador y vitrinas, las zonas calientes son diferentes, ya que estas se relacionan con el área de atención brindada por el encargado de mostrador.
    p.mb-4(data-aos="fade-down-right") Según la forma del punto de venta se dispondrá de un ordenamiento en “Paralelo o Lineal”. De acuerdo con esto, se colocan los estantes o vitrinas en los laterales del punto de venta es decir 2 caras de exhibición.

    .row.fondo2-t2.justify-content-center.align-items-center.py-4.px-lg-5.px-4.mb-4
      .col-lg-10(data-aos="fade-down-right")
        p.mb-4 La organización en “U” tienen tres caras de la exhibición. En los laterales y al frente del punto de venta; el cajero se ubica en la entrada o al fondo que es la misma salida. 
        .row.mb-1
          .col-md-6.col-lg.mb-5.mb-lg-0
            img(src='@/assets/curso/temas/tema3/img-08.png').mb-4
            h4 Las vitrinas sobre tres paredes del punto de venta

          .col-md-6.col-lg.mb-5.mb-lg-0
            img(src='@/assets/curso/temas/tema3/img-09.png').mb-4
            h4 Punto de venta con múltiples lugares de exhibición
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down-right")
        p(data-aos="fade-left") Amanera de conclusión, se puede decir, que al proveedor le interesa negociar eventos promocionales, lo que significa otorgar un descuento en el precio de compra o algún tipo de incentivo material,  que disminuya el precio del producto o lo haga más atractivo para la compra; todo esto, con el objetivo de lograr un sensible aumento en la cantidad de venta durante la promoción, en forma tal, que ese aumento represente más en utilidad que lo que se invierte en la campaña promocional.
        p(data-aos="fade-down-right") Una vez puntualizados los aspectos de los acuerdos comerciales, el promotor de ventas estará en capacidad de reconocer los objetivos de una negociación, y comprender que estos son una herramienta para incrementar las ventas a través de su gestión, la cual se hará más efectiva mediante la aplicación de estos conocimientos. 



</template>

<script>
export default {
  name: 'Tema3',
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
