<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Medios de pago
      p.mb-5.mt-4 Hoy en día, existen numerosos medios de pago que permiten a los clientes efectuar sus compras de manera conveniente y segura. Es importante entender los diferentes tipos y su funcionamiento para adaptarse a las preferencias y necesidades de cada cliente.
  
      .mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Concepto y tipos
          img.icon(src='@/assets/curso/temas/icon.svg') 
      p.mb-5.mt-4 Los medios de pago son elementos o instrumentos que facilitan la compra, contratación o cancelación de todo tipo de deudas, bienes o servicios, ya sea de forma física o electrónica. A continuación, se presentan los tipos más comunes:
  
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.bggris.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-3.col-5
              img.mt-2(src='@/assets/curso/temas/tema3/slyf1-1.png' alt='AvatarTop')
          p.text-center.mt-4 #[b Pago en efectivo:] pagos realizados con dinero físico, con cheque bancario al portador o con algún otro medio físico similar.
        .tarjeta.bggris.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-3.col-5
              img.mt-2(src='@/assets/curso/temas/tema3/slyf1-2.png' alt='AvatarTop')
          p.text-center.mt-4 Pago con tarjeta de crédito o débito.
        .tarjeta.bggris.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-3.col-5
              img.mt-2(src='@/assets/curso/temas/tema3/slyf1-3.png' alt='AvatarTop')
          p.text-center.mt-4 Pago por PayPal.
        .tarjeta.bggris.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-3.col-5
              img.mt-2(src='@/assets/curso/temas/tema3/slyf1-4.png' alt='AvatarTop')
          p.text-center.mt-4 Pago a través del dispositivo móvil.
        .tarjeta.bggris.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-3.col-5
              img.mt-2(src='@/assets/curso/temas/tema3/slyf1-5.png' alt='AvatarTop')
          p.text-center.mt-4 Bonos.
        .tarjeta.bggris.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-md-3.col-5
              img.mt-2(src='@/assets/curso/temas/tema3/slyf1-6.png' alt='AvatarTop')
          p.text-center.mt-4 Pagos en línea.
  
      .row.justify-content-center.align-items-center.mb-5.mt-5
        .col-9.col-md-7.col-lg-3
          img(src='@/assets/curso/temas/tema3/imagen1.png', alt='')
        .col-sm-12.col-md-12.col-lg-9.mt-4
          .row
            .col-lg-6
              p.mb-5.mt-5
              .mb-4
                .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
                  img.icon3(src='@/assets/curso/temas/icon.svg') 
                  h3.col.px-4.mb-0.mx-2.text-white(data-aos="zoom-in-left") Tarjetas débito y crédito
          p Las tarjetas de crédito permiten financiar compras, pagar a plazos y realizar adquisiciones sin necesidad de desembolsar el total del pago de inmediato, siempre que no se exceda el límite concedido por el banco. Estas tarjetas ofrecen flexibilidad y conveniencia para gestionar pagos y gastos.
          p Por otro lado, las tarjetas de débito deducen el importe directamente de la cuenta del titular, descontando el saldo disponible de manera inmediata. Esto asegura que las compras se realicen dentro de los límites de los fondos disponibles, evitando el endeudamiento.
    
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-9
          .mb-4.d-flex.ps-lg-0
            .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
              h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Códigos de pago
              img.icon(src='@/assets/curso/temas/icon.svg') 
          p Los códigos de pago son números de varios dígitos que autorizan el abono de facturas a través de medios de pago electrónicos. Estos pueden incluir servicios como: Gana, Baloto, Su Chance, los mismos #[em retail] o un cajero automático. Por lo general, el código de pago electrónico se encuentra en el extremo superior derecho de la primera hoja de la factura. Estos códigos facilitan transacciones rápidas y seguras, mejorando la eficiencia en el pago de servicios y productos.
        .col-9.col-md-7.col-lg-3
          img(src='@/assets/curso/temas/tema3/imagen2.png', alt='')
  
      .row.justify-content-center.align-items-center
          .mb-4.d-flex.ps-lg-0
            .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
              h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Otros medios de pago
              img.icon(src='@/assets/curso/temas/icon.svg') 
          p.mb-5 Comprender y ofrecer una variedad de medios de pago es esencial para proporcionar una experiencia de compra flexible y accesible a todos los clientes, adaptándose a sus preferencias y mejorando su satisfacción. En el #[em retail], se destacan otros medios de pago alternativos a los tradicionales, que, de igual manera, permiten acceder a la compra de un producto, adquisición de un bien o servicio, o cancelación de deudas. Estos son:
  
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/tar1-1.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Bonos
              p.mb-0.text-center.text-white Los bonos son títulos que otorgan el derecho a recibir pagos periódicos a cambio de entregar una cantidad de dinero en el momento de su emisión. Estos títulos pueden ser emitidos por un Estado, un gobierno local, un municipio o una empresa con el objetivo de financiarse mediante deuda.
  
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/tar1-2.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Puntos
              p.mb-0.text-center.text-white Los puntos son una forma de recompensa que se acumula al comprar en una red determinada. Estos puntos pueden canjearse por productos como alimentos, viajes, actividades recreativas, ropa, calzado, accesorios, y otros en los #[em retailers] aliados o en las tiendas #[em online].
  
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").borde-redondo
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/tar1-3.png", alt="alt")
            .crd_hover_txt--body.cambio
              h4.mb-3.text-center Medios adicionales
              p.mb-0.text-center.text-white Existen otros medios de pago que ofrecen alternativas a los métodos tradicionales: moneda virtual (criptomonedas y otros activos digitales), contra reembolso, en línea sin necesidad directa de tarjeta, y a través de dispositivos móviles (#[em eWallet y contactless]).
  
        p.mt-5.mb-5 Le invitamos a consultar el siguiente contenido que presenta las ventajas en el uso de pagos en línea:
  
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-md-12.col-lg-10
            figure
              .video
                iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/0te5WfUyur0?si=w2X8tX-RXNMbuJ-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
              figcaption Video: Razones para utilizar el pago en línea
  
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
