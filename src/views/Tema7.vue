<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Análisis del <em>shopper</em> o cliente

    p Se denomina #[i shopper] al comprador de un producto o al visitante del punto de venta con la intención de compra, sin importar si es o no consumidor del producto que va a adquirir. Anteriormente los consumidores de un producto eran fieles a su marca y lo buscaban de manera específica, actualmente su comportamiento es diferente, de ahí la denominación de #[i shopper], puesto que se toma más tiempo para tomar una decisión en el punto de venta dado la mayor información que lo acompaña registrada en su tableta, celular o microcomputador. Las estadísticas hablan que más del 75 % de decisiones de compra se concretan en el punto de venta, de donde se deduce la importancia del promotor de venta en este lugar. 
    p.mb-5 El comportamiento del consumidor está basado en el estilo de vida, dicho estilo de vida está influenciado por costumbres y creencias.  Las variables que determinan el estilo de vida son: 

    .row.justify-content-center.mb-3(data-aos="zoom-in")
      .col-lg-3.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema7/img-01.png', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Culturales")
            p Resultado de la interacción del consumidor con el medio en el que ha vivido. Las  costumbres, creencias y tradiciones del grupo social al que pertenece, son determinantes de  gustos y hábitos. 

          .tarjeta.color-acento-botones--borde.p-4(titulo="Valores")
            p La moral y la ética como  motivante  del comportamiento de compra del consumidor o #[i shopper];  incluso este tema puede determinar que no se comercialicen algunos productos por la no aceptación de los consumidores.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Sociales")
            p Establecidos por el medio y la cultura en la que vive el cliente. Se relacionan con su estatus en la sociedad, nivel y calidad de vida, aspectos que influencian su decisión de compra como respuesta al rol que desempeña en este entorno.  
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

          .tarjeta.color-acento-botones--borde.p-4(titulo="De percepción")
            p Se basa en los conocimientos y estímulos que recibe el cliente, generando una idea del producto. La forma en la que se percibe un producto es quizá más importante que las características reales del mismo.
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

          .tarjeta.color-acento-botones--borde.p-4(titulo="Demográficos")
            p Refieren la edad, el sexo, nivel socioeconómico, estado civil y otros aspectos de tipo personal del consumidor. Constituye el elemento básico para realizar la segmentación del mercado, con el fin de llegar de forma adecuada y efectiva al consumidor.  
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right") 
        p Existen otro tipo de variables que explican el comportamiento del consumidor; éstas pertenecen al fuero interno en el individuo, se definen a través de la “Pirámide de necesidades de Maslow”, la cual habla de que el ser humano tiene prioridades en la satisfacción de sus necesidades en 5 niveles: Fisiológicas, Seguridad, Pertenencia o Afiliación, Estatus o reconocimiento y Autorrealización.
        p La siguiente imagen permite reconocer los componentes de cada una de las categorías e identificar las prioridades de satisfacción de necesidades en el consumidor, así como su comportamiento de compra.

    .row.justify-content-center.mt-5.mb-3
      .col-lg-12.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Pirámide de necesidades de los consumidores basada en el estudio de las necesidades de Maslow.</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema7/img-02-01.svg', alt='La imagen evidencia la pirámide de las necesidades de los seres humanos según el autor Maslow que inicia por las necesidades fisiológicas y finaliza con las actividades de autorealización.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema7/img-02-01.svg', alt='La imagen evidencia la pirámide de las necesidades de los seres humanos según el autor Maslow que inicia por las necesidades fisiológicas y finaliza con las actividades de autorealización.') 

        .col-12.d-block.d-md-none.mt-4
          a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Pirámide_de_necesidades_de_los_consumidores.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Anexo.] Pirámide de necesidades de los consumidores basada en el estudio de las necesidades de Maslow.

    p.mb-5 Estos son los factores que influyen en el comportamiento de compra del consumidor, conociéndolos y estudiándolos se crearan las estrategias de #[i marketing] más apropiadas o efectivas para cada grupo de consumidores. Reconocer estas variables en la labor del promotor de ventas, permite brindar una mejor atención al cliente y acercarse al objetivo final de la campaña promocional que es concretar la venta.

    






</template>

<script>
export default {
  name: 'Tema7',
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
