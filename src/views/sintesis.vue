<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") En la siguiente representación gráfica se presenta el trabajo que se hace en el componente formativo a grandes reasgos buscando el impulso en el punto de venta: 

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La gráfica es de un mapa conceptual que presenta los conceptos trabajados en el componente formativo en este orden: Marketing e impulso en el punto de ventas Que se explica mediante El marketing aplicado Como es El merchandising como técnica de marketing La promoción y publicidad lugar de venta (PLV) El análisis del shopper o cliente Los tipos de cliente en el punto de venta Los métodos físicos y psicológicos para incentivar la venta Las técnicas promocionales y el impulso de ventas Entendidas desde Su conocimiento y aplicación La acción y labor del impulso")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
