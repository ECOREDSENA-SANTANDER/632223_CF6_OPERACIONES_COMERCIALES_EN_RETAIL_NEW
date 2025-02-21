<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p.mb-5 A continuación, se presenta a manera de síntesis, un esquema que articula las principales temáticas abordadas en el desarrollo del componente formativo Recursos del cajero, incluyendo las generalidades, funciones y protocolos relacionados con el cargo, así como los recursos involucrados en el puesto de pago, los medios de pago y la normativa asociada al recaudo de caja.
  
      .row.justify-content-center
        .col-lg-12.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="El esquema presenta de manera general las temáticas que aborda el componente formativo Recursos del cajero, incluyendo conocimientos asociados a los medios de pago y normativa del recaudo de caja.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
