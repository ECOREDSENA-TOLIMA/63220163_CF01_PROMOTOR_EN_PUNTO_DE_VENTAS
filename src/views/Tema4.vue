<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Campaña promocional

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='')

    p.mb-5 Cobra vigencia una vez dado el acuerdo comercial; ésta requiere de una planeación con asignación de recursos, un montaje y una ejecución.  Su planeación debe establecer el paso a paso para la campaña, especificando los recursos necesarios, tanto materiales como humanos. Los recursos materiales están relacionados con la cantidad de mercancía, los elementos necesarios para armar las exhibiciones, el material promocional en el punto de compra —P.O.P.— y herramientas que requiera el promotor de ventas para impulsar el producto.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Recursos para el plan promocional 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img-02.svg', alt='')
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        .cajon.color-secundario.p-4.mb-4(style="background-color:#FFF8E0")
          p.mb-0 El recurso humano requerido para el plan promocional resalta la acción del promotor de ventas, ya que es el encargado directo de llegar al cliente final, también se debe contar con el ejecutivo de ventas y los mercaderistas trabajando bajo el mismo objetivo. 
        p Dentro de los recursos materiales esenciales para el plan promocional, se cuenta con los incentivos al comprador, las degustaciones o muestras y la inversión en publicidad, que además, incluye el material #[i Point-of-Purchase] (P.O.P) —Punto de compra— a utilizarse en el punto y todos los recursos económicos que se asignen para llevar a cabo la campaña —como el dinero que se deja de recibir al aplicar una estrategia de reducción de precio, las inversiones en muebles, accesorios o similares— 

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Material P.O.P

    p El material P.O.P. #[i (Point of Purchase)] hace referencia al material de publicidad que se coloca en el punto de ventas. Se usa como una estrategia comercial para llamar la atención del cliente o #[i shopper]; está compuesto por variados objetos donde se imprime la información que complementan la exhibición. 
    p.mb-5 Algunos de los objetos que se elaboran a manera de material P.O.P son los siguientes:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo1")(data-aos="zoom-in-up")

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Tipos de exhibiciones

    p Las exhibiciones están relacionadas con el montaje o preparación de la campaña promocional. Si la campaña requiere de exhibiciones adicionales a las que se tienen en el punto de venta o montajes especiales, deberán realizarse bajo la principal responsabilidad del mercaderista de la empresa, ya que éste conoce perfectamente las técnicas de exhibición; además, el promotor de ventas es corresponsable por ser el encargado de mantener estas exhibiciones.
    p.mb-5 Debe tenerse en cuenta que las exhibiciones se clasifican como principales y secundarias.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#544403") Exhibiciones principales

    p Aquellas que se tienen de forma continua en el punto de venta, o aquellas que se hacen en el espacio que se ha asignado a la compañía por el punto de venta; de este tipo de exhibición proviene la mayor parte de las ventas totales.
    p.mb-5 Generalmente el espacio asignado a la exhibición principal, se basa en la participación que tiene en ventas para el mercado a nivel general, lo que determina su asignación en área para el estante o anaquel en la exhibición del producto de la compañía proveedora. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img-04.png', alt='Imagen decorativa')

      .col-lg-6.col-12.mb-3(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-circle(style="color:#544403")
            h4 #[b(style="color: #544403 !important") Ejemplo para medir y controlar el espacio de exhibición]
        p Una categoría de producto general como arroz de una determinada marca, tiene una participación del 20 % en el total de ventas en el punto de venta, entonces, se asigna este porcentaje para la exhibición de la marca de acuerdo al espacio total que se tiene determinado para la exhibición del arroz en el punto de venta.
        p.mb-4 El cálculo del espacio asignado para la exhibición se puede realizar de la siguiente manera:
        ol.lista-ol--cuadro.lista-ol--separador.mb-4
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000") 1
            p.mb-0 Mida el espacio total asignado a todas las marcas del mismo producto. 

          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000") 2
            p.mb-0 Use una regla de 3 para calcular el espacio asignado

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4.mb-4(style="background-color:#FFECDA")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4 
              img.mb-3(src='@/assets/curso/temas/tema4/img-05.svg')
            .col-lg-9
              p.mb-0 Espacio asignado a la exhibición de arroz = 3000 cm o 30 metros
              p Espacio asignado a su marca de arroz = 20 % 
              p Si se desea saber a cuanto equivale el espacio asignado para la exhibición se realiza el cálculo así:
              p 3000cm * 20 / 100 = 600 cm      o      30 x * 20 / 100 = 6 metros

    p Es decir, que se cuenta con 600 cm, o lo que es igual a 6 metros para realizar la exhibición, de acuerdo a la estrategia, tamaño y forma del producto. 
    p.mb-5 El espacio de exhibición puede utilizar una de las siguientes técnicas:

    .row.mb-1
      .col-lg-6.col-ipad.mb-4
        img(src='@/assets/curso/temas/tema4/img-06.svg').mb-4
        h3 Vertical
        p Consiste en colocar los productos desde la parte alta del anaquel hasta la parte inferior. En este tipo de exhibición pueden ubicarse diferentes referencias del producto en cada lineal, o la misma referencia en un espacio más angosto. El objetivo de esta exhibición es hacer un bloque que genere gran impacto visual.  

      .col-lg-6.col-ipad.mb-4
        img(src='@/assets/curso/temas/tema4/img-07.svg').mb-4
        h3 Horizontal
        p En este caso la exhibición se hace a lo largo del lineal, pudiendo crear un impacto visual dependiendo de la zona del anaquel donde esté la exhibición.

    .row.align-items-center.mb-4(data-aos="zoom-in")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema4/icono.svg', style="width: 50px" ,alt='').m-auto
      .col-auto.bg-c7(style="z-index:1")
        .p-2
          h3.mb-0.ms-3(style="color:#544403") Exhibiciones secundarias

    p.mb-5 Son todas aquellas adiciones que se pueden montar en el punto de venta, ya sea como producto de una negociación o un acuerdo comercial con el punto de venta. Se utilizan para exhibir una oferta, el lanzamiento de un nuevo producto o para eventos programados como las “toma de almacén”. Algunos tipos de exhibiciones secundarias son:

    SlyderB.slyder-b-img.mb-5.p-5(:datos="datosSlyderEjemplo2")(data-aos="zoom-in-up")

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Zonas en el anaquel o góndola

    p.mb-5 Las siguientes son las formas de visualización en relación a la altura de las personas paradas que visitan una tienda, a continuación se revisa los detalles con esa relación:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-5
          .row.p-4(numero="1" titulo="Zona alta y sombrero")
            .col-md-12.mb-4.mb-md-0
              p Se dispone a la altura de los ojos del Cliente (130 a 170 cm). Es una zona predilecta para exhibir el producto, dado que esa altura llama la atención del cliente.  Es considerada zona caliente en el anaquel. Cuando la altura de la góndola o anaquel excede el nivel de los ojos de un cliente con estatura promedio, se convierte en una zona sombrero y es una zona fría dado que no capta la atención del cliente, siendo muy difícil observar los productos que allí se encuentran. 

            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img-08.png', alt='Imagen decorativa')
          
          .row.p-4(numero="2" titulo="Zona media")
            .col-md-12.mb-4.mb-md-0
              p Está dispuesta al nivel de las manos  del consumidor o #[i shopper]; resulta muy cómoda para él. También se clasifica como una buena zona de exhibición. 

            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img-09.png', alt='Imagen decorativa')
          
          .row.p-4(numero="3" titulo="Zona baja")
            .col-md-12.mb-4.mb-md-0
              p Se clasifica como una zona fría en el anaquel, ya que, el cliente no la percibe fácilmente. Se encuentra por debajo de los 80 cm.  

            .col-12
              figure
                img(src='@/assets/curso/temas/tema4/img-010.png', alt='Imagen decorativa')
          
    Separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Gestión en el punto de venta

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img-011.svg', alt='')
      .col-lg-8.col-12.mb-3(data-aos="fade-left")
        p.mb-4 La parte de ejecución de las campañas promocionales corresponden al promotor de ventas, quien estará supervisado por el representante de ventas de la compañía que provee el punto de venta, y que realizó la negociación o acuerdo comercial.  La recomendación para mejorar su desempeño en el punto de ventas, es que inicie su gestión de la forma más correcta posible desde el primer día, portando un uniforme impecable y en excelente estado, con carnet si es el caso; debe llevar el material de apoyo documental correspondiente, como planillas y otros requeridos para su trabajo, así como, manejar una comunicación asertiva con todo el personal en el punto de ventas saludando por su nombre; debe  romper el hielo mostrando una actitud basada en la amabilidad y el respeto. Esto le abrirá las puertas para tener un buen ambiente de trabajo y facilitar la tarea.
        .cajon.color-secundario.p-4.mb-4(style="background-color:#FFF8E0")
          p.mb-0 Lo primero que se hace en la visita al punto de venta es conocer el espacio de ubicación de los productos de su compañía, revisar y resurtir las exhibiciones, revisar inventarios y verificar que no hayan agotados; verificar los espacios de exhibición de acuerdo a lo asignado por el gerente del punto —esta asignación se hace de acuerdo a la participación del producto en el mercado o a la negociación con el proveedor— .

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-012.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En las estanterías o góndolas se debe tener en cuenta las categorías, verificando que el espacio corresponde con el asignado a la compañía y de acuerdo al planograma —representación gráfica del acomodo de las mercancías, en este caso en las góndolas— La exhibición en los lineales debe hacerse de acuerdo a las fechas de vencimiento del producto, colocando las de fecha más cercana al vencimiento en las primeras filas o caras del producto.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        p Si se han realizado negociaciones de espacios o exhibiciones adicionales, se tendrán que organizar de acuerdo al tipo de exhibición que se determine. En el caso de que ya exista la exhibición, entonces es necesario reabastecerlas.
        p.mb-5 En el mismo tiempo que se verifican las exhibiciones y el surtido, se deben verificar: los precios, el buen estado de las etiquetas, el material POP y corregir lo que sea necesario.   

      .col-lg-4.col-12.mb-3.d-lg-flex.d-none(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img-013.svg', alt='Imagen decorativa')

      .col-lg-6.col-12.mb-3(data-aos="fade-right")
        p.mb-5 Aspectos a reportar al encargado del punto de ventas y al jefe:
        ol.lista-ol--cuadro.lista-ol--separador.mb-4
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000") 1
            p.mb-0 Inconsistencias en las exhibiciones o espacios asignados.

          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000") 2
            p.mb-0 Agotados. 
          
          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000") 3
            p.mb-0 Estado de los productos.

          li 
            .lista-ol--cuadro__vineta
              span(style="color:#000") 4
            p.mb-0 Fechas de vencimiento y advertencia.



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyderEjemplo1: [
      {
        titulo: 'Display y muebles de piso',
        texto:
          'Mueble publicitario en cartón u otro material, algunos se colocan directamente en el piso, otros sobre entrepaños, anaqueles o muebles.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Cenefas',
        texto:
          'Tiras de papel donde se imprime la información, generalmente usadas en los entrepaños de las góndolas',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Carros de impulso o muebles de degustación',
        texto:
          'Usados generalmente para disponer los productos que se ofrecen en las degustaciones.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Puntas de góndola',
        texto: 'Inicio de la góndola, la cual se decora.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Carteles, afiches, pendones o banners',
        texto:
          'Por lo general se usan en medios impresos en papel o sustratos sintéticos.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Habladores o <em>speaker</em>',
        texto:
          'Diseños que sirven para colocar en diferentes tipos de ubicación.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Saltarines o <em>danglers</em>',
        texto:
          'Su diseño tiene una tira de donde cuelgan para ser más atractivos a la vista y tener movilidad.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Cuellos de botella',
        texto:
          'Para colocar en las botellas o recipientes de este tipo de forma.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Rompe tráficos o stoppers',
        texto:
          'Es el tipo de publicidad que se puede colocar en el paso de <em>shopper</em> o comprador en diferentes tamaños.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Volantes o flyers',
        texto: 'Se requiere una logística estratégica de distribución.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Grafica de piso o foor prints',
        texto:
          'Son materiales que se pueden pisar sin problemas y que no sean resbaladizos, deben estar plastificados para garantizar su duración.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Mupis o aviso luminoso',
        texto: 'Se presentan de forma impresa o digital.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Cabezotes',
        texto: 'Para ubicar en la parte alta de la góndola.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Exhibidores temporales',
        texto:
          'Diferentes diseños que son utilizados para las exhibiciones secundarias.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
    ],
    datosSlyderEjemplo2: [
      {
        titulo: 'Isla',
        texto:
          'Es aquella que se realiza en una pila céntrica permitiendo circular alrededor de ella. Generalmente realizada en los espacios abiertos del punto de venta (PV).',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Punta de góndola',
        texto:
          'Es la parte inicial o final del anaquel, donde se realiza la exhibición.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Cajas de pago',
        texto:
          'Por esta una zona caliente del almacén se realizan exhibiciones cerca o pegada a la cajas de pago.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Mostrador',
        texto: 'Generalmente usado para eventos de demostración o degustación.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
      {
        titulo: 'Exhibidores de piso',
        texto: 'Diseñados para ubicarse en un sitio estratégico.',
        imagen: require('@/assets/curso/temas/tema4/img-03.png'),
      },
    ],
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
