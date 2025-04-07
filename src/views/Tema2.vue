<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Recursos del puesto de pago
      
      .row.justify-content-center.align-items-center.mb-3
        .col-sm-12.col-md-12.col-lg-8
          p Es principal recurso es la terminal POS (punto de venta), es una máquina que se encuentra ubicada en cada puesto de pago. Su función es registrar los productos, brindar información al cliente y recopilar datos de ventas para el almacén.
          p La terminal POS se compone de las siguientes partes:
          ol.lista-ol--cuadro.fa-ol
            li 
              .lista-ol--cuadro__vineta.bgazuloscuro
                span.texto-negro #[b 1]
              span.mb-0 #[b CPU o unidad de memoria:] procesa y almacena la información.
            li 
              .lista-ol--cuadro__vineta.bgazuloscuro
                span.texto-negro #[b 2]
              span.mb-0 #[b Gaveta:] guarda el dinero, cheques y otros documentos de valor.
            li 
              .lista-ol--cuadro__vineta.bgazuloscuro
                span.texto-negro #[b 3]
              span.mb-0 #[b Impresora:] emite los tiquetes de compra que se entregan al cliente.
            li 
              .lista-ol--cuadro__vineta.bgazuloscuro
                span.texto-negro #[b 4]
              span.mb-0 #[b Visor:] proporciona información visual al cliente.
            li 
              .lista-ol--cuadro__vineta.bgazuloscuro
                span.texto-negro #[b 5]
              span.mb-0 #[b Teclado:] permite ingresar los datos necesarios para procesar las transacciones.
        .col-9.col-md-8.col-lg-4
          img(src='@/assets/curso/temas/tema2/imagen1.png', alt='')
  
      separador
      #t_2_1.titulo-segundo.mb-5
        h2 2.1 Administrar dinero y documentos
      p Al preparar la jornada laboral, de acuerdo con las instrucciones del #[em retail] y su política de apertura de caja, se debe cumplir con el siguiente procedimiento:
  
      TabsB.color-acento-contenido.mb-3
        .py-4.py-md-5(titulo="Entrega y orden" :icono="require('@/assets/curso/temas/tema2/tbimg1-1.png')")
          .row.align-items-center.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema2/tbotra1-1.png" alt="")
            .col-md-7.mb-4.mb-md-0
              p El dinero es entregado, ordenado y guardado de acuerdo con los procedimientos operacionales.
        .py-4.py-md-5(titulo="Higiene y aseo" :icono="require('@/assets/curso/temas/tema2/tbimg1-2.png')")
          .row.align-items-center.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema2/tbotra1-2.png" alt="")
            .col-md-7.mb-4.mb-md-0
              p El puesto de trabajo debe permanecer limpio y ordenado, cumpliendo con las normativas de higiene y aseo del área.
        .py-4.py-md-5(titulo="Apertura de caja" :icono="require('@/assets/curso/temas/tema2/tbimg1-3.png')")
          .row.align-items-center.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema2/tbotra1-3.png" alt="")
            .col-md-7.mb-4.mb-md-0
              p La caja registradora se abre de acuerdo con los controles administrativos y de seguridad establecidos.
        .py-4.py-md-5(titulo="Almacenamiento de comprobantes" :icono="require('@/assets/curso/temas/tema2/tbimg1-3.png')")
          .row.align-items-center.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema2/tbotra1-4.png" alt="")
            .col-md-7.mb-4.mb-md-0
              p Los comprobantes impresos de apertura de caja se almacenan según los controles administrativos y de seguridad establecidos.
        .py-4.py-md-5(titulo="Apertura de caja" :icono="require('@/assets/curso/temas/tema2/tbimg1-5.png')")
          .row.align-items-center.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.p-3(src="@/assets/curso/temas/tema2/tbotra1-5.png" alt="")
            .col-md-7.mb-4.mb-md-0
              p La apertura y cierre de la caja se registran conforme a los controles administrativos y de seguridad establecidos.
  
      separador
      #t_2_2.titulo-segundo.mb-5
        h2 2.2 Equipos tecnológicos
      p.mb-4 La tecnología es esencial para el trabajo del cajero. A continuación, se presentan algunos de los equipos disponibles para su función:
  
      .row.fondo2.align-items-center.p-3.mb-5(data-aos="fade-down")
        .col-lg-12.col-md-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4
  
          .tarjetaf.p-3.mb-4
            SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-6.col-md-12.col-sm-12
                  h4.mb-4 El #[em scanner] balanza
                  p.mb-4 Este equipo combina un lector de códigos de barras y una balanza para pesar frutas y verduras, conectándose a la terminal POS. Su función es proporcionar información de ventas con agilidad y exactitud.
                  p #[b El uso del #[em scanner] balanza permite:]
                  ul.lista-ul.mb-0.ps-3.texto-azulclaro
                    li.d-flex.mb-0
                      i.fas.fa-check-circle
                      p.mb-0 Brindar al cliente mayor seguridad, rapidez y exactitud en el registro.
                    li.d-flex.mb-0
                      i.fas.fa-check-circle
                      p.mb-0 Aumentar la productividad en el puesto de pago.
                    li.d-flex.mb-0
                      i.fas.fa-check-circle
                      p.mb-0 Mejorar la confiabilidad en la información de ventas.
                .col-lg-5.col-md-6.col-12
                  img.mt-2(alt="" src="@/assets/curso/temas/tema2/sly1-1.png")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-6.col-md-12.col-sm-12
                  h4.mb-4 El datáfono
                  p.mb-4 El datáfono es el equipo que permite procesar los pagos cuando los clientes utilizan tarjetas de débito o crédito. Su función principal es comunicarse con los bancos y las entidades financieras para autorizar y completar las transacciones. Algunos datáfonos incluyen un teclado o PIN PAD separado para que los clientes ingresen su clave personal de manera segura.
                .col-lg-5.col-md-6.col-12
                  img.mt-2(alt="" src="@/assets/curso/temas/tema2/sly1-2.png")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-6.col-md-12.col-sm-12
                  h4.mb-4 El desactivador de #[em tags]
                  p El desactivador de #[em tags] es el equipo utilizado para desactivar los dispositivos de seguridad colocados en los productos del almacén, evitando que salgan sin ser registrados. Estos #[em tags] se encuentran principalmente en textiles, variedades y licores.
                  p Los puestos de pago también incorporan desactivadores para los #[em tags] que se encuentran internamente en el empaque de algunos cosméticos y medicamentos. Estos dispositivos son colocados por el fabricante y no son reutilizables.
                  p Es importante retirar el #[em tag] del producto para evitar que las alarmas se activen en las salidas del almacén, incomodando al cliente.
                .col-lg-5.col-md-6.col-12
                  img.mt-2(alt="" src="@/assets/curso/temas/tema2/sly1-3.png")
              .row.justify-content-center.align-items-center.p-4
                .col-lg-6.col-md-12.col-sm-12
                  h4.mb-4 Sistema neumático #[em (shut)]
                  p.mb-4 El sistema neumático, conocido como #[em shut], consiste en una serie de conductos que conectan el puesto de pago con la caja general o tesorería. Su función es transportar una cápsula que contiene el dinero de las ventas realizadas. En los #[em retailers] que no disponen de este sistema, el dinero se envía con un directivo encargado de la recogida.
                .col-lg-5.col-md-6.col-12
                  img.mt-2(alt="" src="@/assets/curso/temas/tema2/sly1-4.png")
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-9
          .mb-4.d-flex.ps-lg-0
            .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
              h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Teclados
              img.icon(src='@/assets/curso/temas/icon.svg') 
          p La distribución del teclado y su correcto uso permiten operar fácilmente la terminal, brindar un mejor servicio a los clientes y diferenciar los medios de pago para cumplir con lo establecido por la Dirección de Impuestos y Aduanas Nacionales (DIAN).
          .cajon.color-primario.p-4.mb-4
            p En el siguiente video, se presenta el proceso de registro de productos, como uno de los ejemplos de teclados utilizados en #[em retail].
            p #[b Nota:] se debe considerar que no hay un estándar único para este tipo de operaciones.
        .col-6.col-md-6.col-lg-3
         img(src='@/assets/curso/temas/tema2/imagen2.png', alt='')
  
      .row.justify-content-center.align-items-center.mb-5.mt-5
        .col-sm-12.col-md-12.col-lg-10
              .tarjeta.color-acento-contenido.p-3
                .row.justify-content-around.align-items-center
                  .col-auto
                    img(src="@/assets/curso/temas/tema1/imgcajavideo.png").img65
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h4.mb-1 Registro de productos
                        p.mb-0 Registro y escaneo de productos para el cálculo del total de la compra y continuar con el proceso de venta. ¡Ingrese!
                      .col-sm-auto
                        a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nYWj9Tru7mc" target="_blank")
                          span Ir al enlace
                          i.fas.fa-video
  
      .mb-4.d-flex.ps-lg-0
        .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
          h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Sistema transaccional
          img.icon(src='@/assets/curso/temas/icon.svg') 
             
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-sm-12.col-lg-10
          .bloque-texto-e.bgazulclaro.p-4
            .bloque-texto-e__texto
              i.fas.fa-quote-left
              p Según Angulo y Maldonado (2016),
              p  se entiende por sistema de información transaccional aquel diseñado para recolectar, modificar, almacenar y recuperar información generada por las transacciones en una organización.
              i.fas.fa-quote-right
          
      p.mb-4 En el #[em retail], un sistema transaccional se refiere al conjunto organizado de personas, procedimientos, software, bases de datos y dispositivos para registrar transacciones comerciales consumadas.
  
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-12.col-lg-9.mt-4
          .cajon.naranja.p-4.mb-4
            p.ps-4 No se trata solo de comprar y vender; el verdadero éxito radica en dejar a los clientes satisfechos. Para lograrlo, es esencial aprender a brindar la mejor experiencia posible. En el contexto actual, la relación entre las tiendas físicas de #[em retail] y sus clientes es principalmente transaccional. Estas tiendas existen para satisfacer la oferta y la demanda, abrir nuevos canales, implementar segmentaciones a medida e integrar procesos tecnológicos avanzados. 
        .col-6.col-md-6.col-lg-3.corrermargen
          img(src='@/assets/curso/temas/tema2/imagen3.png', alt='')
  
      separador
      #t_2_3.titulo-segundo.mb-5
        h2 2.3 Elementos en el puesto de trabajo
      p El cargo de cajero se desempeña en un sitio cerrado y/o abierto, normalmente en cubículos. Este puesto de trabajo conlleva ciertos riesgos, como la pérdida de dinero por errores al dar cambio, cobrar incorrectamente un producto o realizar un registro de transacción de forma incorrecta, es por esto, considerando que el cajero maneja valores de la organización, que se requiere de su parte 	de una gran atención y precisión en sus tareas.
      p El cajero pasa la mayor parte de su jornada laboral de pie y no puede abandonar la caja sin previo aviso a su superior y dejando constancia del hecho. Es fundamental que el cajero mantenga un alto nivel de concentración para evitar errores y garantizar un servicio eficiente y seguro. Por ello, también se debe prestar atención a su comodidad y bienestar, proporcionando un entorno de trabajo ergonómico y pausas regulares para prevenir la fatiga.
      p A continuación, se describen algunos elementos del puesto de trabajo que se deben considerar para lograr un mejor desempeño:
  
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-4
          img(src='@/assets/curso/temas/tema2/imagen4.png', alt='')
        .col-sm-12.col-md-12.col-lg-8
          .row.mb-5             
          .tarjeta.tarjeta--naranja.p-4
            SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-1.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Escritorio
                  p Escritorio pequeño donde se ubica la caja registradora y se pueden ordenar adecuadamente los utensilios de trabajo.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-2.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Comunicación
                  p Equipo de comunicación para establecer contacto con los supervisores en caso de que estén ubicados lejos del punto de pago.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-3.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Cajonera
                  p Cajonera ubicada en la caja registradora, aquí se introduce y organiza el dinero, cuenta con divisiones para billetes y monedas de diferentes denominaciones.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-4.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 #[em Stock]
                  p #[em Stock] adecuado de los útiles y provisiones necesarios para el desempeño de las funciones del cargo: plumas, grapas, engrapadora, clips, facturas, notas de venta, bolsas de diferentes tamaños, etc. Este #[em stock] debe ser manejado por el propio cajero.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-5.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Silla
                  p Silla cómoda, alta y con ruedas, ergonómica respecto a la posición de la caja registradora.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-6.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Precios
                  p Listado de precios de los artículos en caso de no contar con códigos de barras. Aunque se cuente con ellos, es preciso que los cajeros estén preparados para cualquier contingencia.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-7.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Ventanilla
                  p Si existe una ventanilla, el canal de comunicación no debe obligar al cajero y al cliente a agacharse para poder comunicarse. Deben evitarse los micrófonos. Los demás clientes no deben enterarse de la transacción.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-8.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Efectivo
                  p Suficiente cantidad de efectivo y monedas, tanto en cantidad como en denominaciones.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-9.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 Visibilidad
                  p Deben evitarse las ventanillas en las que el cliente no pueda ver al cajero ni observar el manejo de su dinero.
              .row.align-items-center.justify-content-center.p-4
                .col-md-3.col-6
                  img(src='@/assets/curso/temas/tema2/slya1-10.png', alt='Texto que describa la imagen')
                .col-md-8.mb-4.mb-md-0
                  h4.mt-3 No se recomienda
                  p En el punto de pago, no se recomienda el manejo de teléfonos convencionales, celulares, faxes y escáneres.
  
      separador
      #t_2_4.titulo-segundo.mb-5
        h2 2.4 Manejo de valores
  
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-md-12.col-lg-8
          p La pandemia de 2020 aceleró el movimiento hacia una economía más digital, y los minoristas necesitan continuar adaptándose para avanzar en estos tiempos de profundos cambios. Una de las principales tendencias en el mundo post-pandémico es la consolidación de los procesos de pago tanto #[em online] como #[em offline]. Durante la pandemia, muchos minoristas se diversificaron e incrementaron su enfoque en los canales en línea.
          p La aparición de una experiencia de compra #[em offline] más “conectada” implica la necesidad de armonizar las soluciones de pago para mejorar la experiencia del cliente. El manejo de valores en el #[em retail] se refiere al conjunto de operaciones y registros en el punto de pago, así como a la administración de efectivo y otros medios de pago, por esto, es importante que sea un proceso gestionado por personas que mantengan relaciones éticas y profesionales con los clientes compradores, garantizando transparencia, confianza en cada transacción y una experiencia de compra segura, en los diversos canales que se ejecute.
        .col-10.col-md-8.col-lg-4
          img(src='@/assets/curso/temas/tema2/imagen5.png', alt='Texto que describa la imagen')


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
