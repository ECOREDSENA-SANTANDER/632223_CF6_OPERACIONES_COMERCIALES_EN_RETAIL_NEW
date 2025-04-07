<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borde-recto-abajo
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Normativa del recaudo de caja
      
      p.mb-4.mt-5 La necesidad de control en la recepción, custodia y despacho de bienes financieros en el #[em retail] ha llevado a la transformación de procedimientos destinados a cumplir con las normas de recaudo de caja. Esto incluye la implementación de recursos físicos, materiales y humanos para asegurar la precisión y seguridad en estas operaciones.
  
      TabsB.color-acento-contenido.mb-3
        .py-4.py-md-5(titulo="Controles de seguridad ambiental" :icono="require('@/assets/curso/temas/tema4/tab1-1.png')")
          .row.align-items-center.justify-content-center
            .col-6.col-md-4.col-lg-2.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema4/imgtab1-1.png" alt="")
            .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
              p Los controles de seguridad ambiental son registros procedimentales, administrativos, financieros y documentales que establecen las reglas a seguir para la protección del ambiente en el #[em retail]. 
              p Estos controles aseguran que todas las operaciones se realicen de manera sostenible y segura, minimizando el impacto ambiental.
        .py-4.py-md-5(titulo="Riesgos" :icono="require('@/assets/curso/temas/tema4/tab1-2.png')")
          .row.align-items-center.justify-content-center
            .col-6.col-md-4.col-lg-2.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema4/imgtab1-2.png" alt="")
            .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
              p El término “riesgo” se refiere a la posibilidad de desgaste o daño y sus posibles consecuencias. Estos riesgos pueden afectar a personas o grupos y son el resultado de un suceso o acción. Los riesgos se presentan tanto en ámbitos domésticos como laborales y sociales, entre otros.
              p La evaluación del riesgo implica considerar la vulnerabilidad frente a cada tipo de peligro. Es importante distinguir adecuadamente entre peligrosidad, vulnerabilidad y riesgo para gestionar adecuadamente cada situación.
  
      separador
      #t_4_1.titulo-segundo.mb-5
        h2 4.1 Seguridad y Salud en el Trabajo
  
      p La Seguridad y Salud en el Trabajo se refiere a la prevención de lesiones y enfermedades causadas por las condiciones laborales, así como a la protección y promoción de la salud de los trabajadores. Para los cajeros en el punto de pago, es crucial implementar medidas específicas para garantizar su bienestar y seguridad, por ejemplo, adecuación de sistemas de vigilancia, prácticas seguras del manejo de efectivo, ergonomía, pausas activas, y un área de trabajo saludable.
      p Garantizar un ambiente seguro para el cajero en el puesto de pago y óptimas condiciones para el cuidado de su salud, son factores que propician su productividad y satisfacción laboral.
      p.mb-4 Consulte el video que se presenta a continuación, relacionado con las generalidades de la Seguridad y Salud en el Trabajo, y el proceso integral que unifica las funciones de esta área en un sistema de gestión:
  
      .row.justify-content-center.align-items-center.mb-3
        .col-sm-12.col-md-12.col-lg-10
          figure
            .video
              iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/RRSIdOpBJs4?si=x4TZRdBlI2KsWLoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            figcaption Sistema de Gestión de la Seguridad y Salud en el Trabajo
  
      separador
      #t_4_2.titulo-segundo.mb-5
        h2 4.2 Leyes de protección de datos
  
      .row.justify-content-center.align-items-center.mb-2
        .col-6.col-md-2.col-lg-2
          .row.justify-content-center.align-items-center
            .col-12.col-md-11.col-lg-8
              img.mt-2.mb-2(src="@/assets/curso/temas/tema4/imagen1.png" alt="")
        .col-sm-12.col-md-12.col-lg-10
          p Cuando se habla de datos personales, se hace referencia a toda la información asociada a una persona que permite su identificación. Las leyes de protección de datos están diseñadas para salvaguardar esta información, asegurando que se maneje de manera segura y respetuosa, protegiendo la privacidad de los individuos.
  
  
    .container.tarjeta.tarjeta--blanca.bggris.p-4.p-md-5.borde-recto-abajo.borde-recto-arriba
  
      .row.justify-content-center.align-items-center
  
        .col-sm-12.col-md-12.col-lg-6
          p Los datos personales son toda la información asociada una persona y que permite su identificación:
          
          .row.align-items-center.justify-content-center
  
            .col-xl-4.col-lg-7.col-md-7.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left").borde-redondo.bgblanco
                .row.align-items-center.justify-content-center
                  .col-4.col-md-3.col-lg-5
                    img.mt-3(src="@/assets/curso/temas/tema4/icon1-1.png", alt="alt")
                .row.align-items-center.justify-content-center
                  .col-10
                    p.mt-2.mb-3.text-center #[b Documento de identidad]
  
            .col-xl-4.col-lg-7.col-md-7.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left").borde-redondo.bgblanco
                .row.align-items-center.justify-content-center
                  .col-4.col-md-3.col-lg-5
                    img.mt-3(src="@/assets/curso/temas/tema4/icon1-2.png", alt="alt")
                .row.align-items-center.justify-content-center
                  .col-10
                    p.mt-3.mb-3.text-center #[b Lugar de nacimiento]
  
            .col-xl-4.col-lg-7.col-md-7.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left").borde-redondo.bgblanco
                .row.align-items-center.justify-content-center
                  .col-4.col-md-3.col-lg-5
                    img.mt-2(src="@/assets/curso/temas/tema4/icon1-3.png", alt="alt")
                .row.align-items-center.justify-content-center
                  .col-10
                    p.mt-2.mb-3.text-center #[b Estado civil]
  
          .row.align-items-center.justify-content-center.mt-3
  
            .col-xl-4.col-lg-7.col-md-7.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left").borde-redondo.bgblanco
                .row.align-items-center.justify-content-center
                  .col-4.col-md-3.col-lg-5
                    img.mt-3(src="@/assets/curso/temas/tema4/icon1-4.png", alt="alt")
                .row.align-items-center.justify-content-center
                  .col-10
                    p.mt-3.mb-4.text-center #[b Edad]
  
            .col-xl-4.col-lg-7.col-md-7.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left").borde-redondo.bgblanco
                .row.align-items-center.justify-content-center
                  .col-4.col-md-3.col-lg-5
                    img.mt-3(src="@/assets/curso/temas/tema4/icon1-5.png", alt="alt")
                .row.align-items-center.justify-content-center
                  .col-10
                    p.mt-3.mb-4.text-center #[b Lugar de residencia]
  
            .col-xl-4.col-lg-7.col-md-7.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left").borde-redondo.bgblanco
                .row.align-items-center.justify-content-center
                  .col-4.col-md-3.col-lg-5
                    img.mt-3(src="@/assets/curso/temas/tema4/icon1-6.png", alt="alt")
                .row.align-items-center.justify-content-center
                  .col-12
                    p.mt-2.mb-3.text-center #[b Trayectoria académica, laboral, o profesional ]
  
        .col-11.col-md-10.col-lg-6
          img(src="@/assets/curso/temas/tema4/imagen2.png" alt="")
  
      p.mt-4 También existe información más sensible, como el estado de salud, características físicas, ideología política y vida sexual de una persona. En el #[em retail], es común solicitar esta información por razones de estrategia de mercadeo, con el objetivo de desarrollar estrategias basadas en las preferencias de los clientes en cuanto a marcas, productos, olores y empaques, entre otros aspectos. Esta recopilación de datos permite personalizar la experiencia del cliente y mejorar la efectividad de las campañas de #[em marketing].
  
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.borde-recto-arriba
  
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-10
          .cajon.naranja.p-4.mb-4
            p Para lograr un manejo adecuado de toda esta información, es esencial solicitar la autorización del cliente comprador. La protección de datos se centra en encontrar un equilibrio entre la información que las personas desean mantener privada y la que están dispuestas a compartir públicamente. Este consentimiento asegura que el manejo de datos personales sea transparente y respetuoso con la privacidad de los individuos, permitiendo a las empresas utilizar esta información de manera ética y conforme a las leyes de protección de datos.
  
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
