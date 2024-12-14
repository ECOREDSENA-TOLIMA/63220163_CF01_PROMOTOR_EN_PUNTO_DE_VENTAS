<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Portafolio, tipos y categoría de productos
      
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-01.png', alt='')

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        p.mb-5(data-aos="fade-right") El portafolio de productos hace referencia al conjunto de productos que las empresas ofrecen; estos, se agrupan en diferentes tipos de acuerdo a alguna característica común en su uso o destino, por ejemplo: aseo, alimentos, ferretería, etc. Para cada tipo de producto se puede establecer una o más categorías, que a su vez, pueden dividirse  en subcategorías, las que incluso se pueden especificar más.  Por ejemplo el   tipo de productos “alimentos” tiene categorías como los cárnicos, bebidas, perecederos, conservados, granos, cereales y panes, entre otros; una subcategoría de los panes podría ser “Tostadas”, las que a su vez, admiten una última clasificación o segmento posible, como es el caso de “Integrales”.
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema1/img-02.svg', alt='Imagen decorativa')

        .col-lg-6.col-12.mb-3(data-aos="fade-right")
          p Algunas empresas se dedican a la fabricación de un solo tipo o categoría de producto, mientras otras tienen en su portafolio una amplia variedad; que para el caso de empresas comercializadoras o almacenes, como las denominadas de grandes superficies, tienen un amplio portafolio compuesto por diversas categorías de productos, dada la gran variedad empresas fabricantes que las conforman.
          .cajon.color-primario.p-4(style="background-color:#FFECDA")
            p.mb-0 En realidad, son las empresas quienes definen sus categorías y subcategorías en forma precisa y de acuerdo a las características del producto e intereses.  Cuando se habla de una subdivisión más, después de la subcategoría, el objetivo es determinar un grupo de compradores más específicos y con características particulares, similar a cuando se segmenta el mercado, por eso se asocia con la palabra segmento.  
        
    p.mb-5(data-aos="fade-left") Este tema es de particular importancia para los promotores en el punto de venta, ya que, se debe tener perfecto conocimiento del portafolio de la empresa y del producto o productos que va a impulsar, con el fin de preparar la exhibición por categorías, sub categorías y segmentos; de esta forma se garantiza al cliente el orden en el punto de venta que le facilite su visualización.  Es necesario tener en cuenta para la organización estratégica de la exhibición, conocer las prioridades del cliente en sus compras (tema conocido con el nombre de “Árbol de decisiones de los clientes”); dicho de otra manera, se debe determinar qué pesa más en el cliente para tomar la decisión de compra en cada una de las categorías o subcategorías; por ejemplo: el precio, la calidad, la marca, la promoción, etc., y con esa información organizar estratégicamente la exhibición. Toda exhibición se hace de forma estratégica tal como se recomienda a continuación:

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Organización de exhibiciones de productos para el punto de venta.</i>
        figure.mb-3
          img.d-none.d-sm-none.d-lg-block(src='@/assets/curso/temas/tema1/img-03-01.svg', alt='La gráfica comparte un embudo que presenta la exhibición de los productos de una manera estratégica organizando las categorías según las necesidades del cliente para entender que el cliente recibe una exhibición optimizada.')
          img.d-block.d-lg-none(src='@/assets/curso/temas/tema1/img-03-02.svg', alt='La gráfica comparte un embudo que presenta la exhibición de los productos de una manera estratégica organizando las categorías según las necesidades del cliente para entender que el cliente recibe una exhibición optimizada.') 

    p.mb-5(data-aos="fade-right") Si se habla de una empresa que fabrica productos para el aseo del hogar y para el cuidado personal, es posible categorizarla en la de #[b “Productos para el hogar”], donde estaría la subcategoría “Servilletas”, el factor importante para el cliente es posible que sea la marca, seguido del tamaño o tipo de servilleta. En la categoría #[b “Cuidado Femenino”], es muy posible que la decisión de compra esté basada primero en la subcategoría —cuando se determina el producto a comprar por ejemplo toallas higiénicas, tampones, protectores— y luego en la calidad,  ya que este tipo de producto resulta fundamental para el bienestar de la mujer, por lo que el cliente está dispuesto a pagar por calidad. En la categoría de #[b “Cuidado de Mascotas”], es muy posible que la decisión de compra esté basada en el beneficio del producto y no en la marca ni el precio. Si se reconocen estas señales en el cliente, además de realizar exhibiciones estratégicas, un buen promotor podrá orientar al cliente a realizar una compra que le satisfaga y le motive a volver a comprar el producto.






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
