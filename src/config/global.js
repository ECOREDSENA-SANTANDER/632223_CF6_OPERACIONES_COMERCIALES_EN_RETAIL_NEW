export default {
  global: {
    Name: 'Recursos del cajero',
    Description:
      'Este componente formativo tiene como objetivo desarrollar competencias técnicas, humanas y personales en el puesto de pago, una posición representativa en el <i>retail</i>, debido al contacto directo que se tiene con el cliente. Se profundizará en las funciones esenciales del cajero, recursos del puesto de pago, administración de dinero, equipos tecnológicos, medios de pago y normativa relacionada con el recaudo de caja.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El cajero',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos del puesto de pago',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Administrar dinero y documentos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Equipos tecnológicos  ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Elementos en el puesto de trabajo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Manejo de valores',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medios de pago',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa del recaudo de caja',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Leyes de protección de datos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF6_632223_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El servicio centrado en el cliente',
      referencia:
        'Cottle, D. W. (1991). El servicio centrado en el cliente. El Salvador: Díaz de Santos.',
      tipo: 'Libro',
      link:
        'https://www.google.com.co/books/edition/El_Servicio_centrado_en_el_cliente/o37JeJi0-qoC?hl=es&gbpv=1&dq=cajero+y+satisfacci%C3%B3n+del+cliente&pg=PA22&printsec=frontcover',
    },
    {
      tema: 'Híper satisfacción del cliente',
      referencia:
        'Hiper satisfaccion del cliente. (n.d.). (n.p.): Panorama Editorial S.A. De C.V.',
      tipo: 'Libro',
      link:
        'https://www.google.com.co/books/edition/hiper_satisfaccion_del_cliente/f0th8fk8lgsC?hl=es&gbpv=1&dq=cajero+y+satisfacci%C3%B3n+del+cliente&pg=PA14&printsec=frontcover', // ojo tambien se puede colocar parámetro de "descarga: '/downloads/prueba.pdf'"
    },
  ],
  glosario: [
    {
      termino: 'Caja registradora',
      significado:
        'Máquina sumadora para uso de comerciantes, que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Cajero automático',
      significado:
        'Máquina sumadora para uso de comerciantes, que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Crédito',
      significado:
        'Cuando una transacción se acredita en su cuenta, aparece como una transacción positiva (+) y se agrega a su saldo (a diferencia de un débito, que aparece como una transacción negativa (-) y se resta de su saldo). Un ejemplo de crédito sería el dinero en efectivo que usted depositó.',
    },
    {
      termino: 'Débito',
      significado:
        'Cuando una transacción se debita en su cuenta, aparece como una transacción negativa (-) y se resta del saldo de su cuenta corriente vinculada, a diferencia de un crédito, que aparece como una transacción positiva (+) y se agrega a su saldo. Un ejemplo de débito en su cuenta corriente es una compra con tarjeta de débito en un comercio.',
    },
    {
      termino: 'Legalización',
      significado:
        'Documento mediante el cual se formaliza los gastos realizados con cargo al anticipo concedido y se reintegran los recursos no gastados.',
    },
    {
      termino: 'Pagos por aplicación móvil',
      significado:
        'Esta es una aplicación (app) que te permite pagar desde tu celular sin llevar las tarjetas contigo, de forma más fácil y segura, en comercios con datáfonos habilitados. Para hacer uso de esta tecnología debes descargar la aplicación en tu <em>Smartphone</em>, crear una cuenta e inscribir las tarjetas.',
    },
    {
      termino: 'Reembolso de caja menor',
      significado:
        'Es el soporte del pago de los gastos que se han efectuado en pequeñas cantidades por conceptos tales como: comidas, pasajes, papelería, fotocopias, etc., estos pagos deben contar con las facturas o documentos equivalentes para su verificación.',
    },
    {
      termino: 'Saldo disponible',
      significado:
        'Su saldo disponible es el dinero en su cuenta de ahorros o cuenta corriente que está actualmente a su disposición para hacer compras, extracciones, etc. Este saldo se actualiza durante el día con las transacciones que haga.',
    },
    {
      termino: 'Tarjeta de crédito',
      significado:
        'Instrumento que permite realizar pagos sin tener dinero en efectivo. El cargo en la cuenta se produce, por lo general, al final del mes. También se puede trasladar el pago más allá de ese momento, pero esta operación conlleva el pago de intereses. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque hay que pagar comisiones.',
    },
    {
      termino: 'Tarjeta de débito',
      significado:
        'Al igual que la tarjeta de crédito, es un medio que permite realizar pagos sin tener dinero en efectivo. La diferencia es que con la tarjeta de débito el cargo en la cuenta se produce inmediatamente, con lo que si no existe disponible el pago no se podrá realizar. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque normalmente con comisiones si no se utiliza la red propia de la tarjeta.',
    },
    {
      termino: 'Transacción efectiva',
      significado:
        'Una transacción se hace efectiva una vez que se ha acreditado o debitado de una cuenta con éxito.',
    },
    {
      termino: 'Transacción rechazada',
      significado:
        'Usted deposita un cheque emitido para usted, pero la persona que lo libró no tiene fondos suficientes para cubrirlo. En este caso, si ya se le acreditó el depósito, se lo debitaremos de su cuenta, ya que no había fondos suficientes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blanco, L. A. (2013). Ética integral. Bogotá, Colombia: Ecoe Ediciones.',
      link:
        'https://www.google.com.co/books/edition/%C3%89tica_integral/uXIAAgAAQBAJ?hl=es&gbpv=1&dq=%C3%89tica+integral&pg=PA25&printsec=frontcover',
    },
    {
      referencia:
        'Block, S. (2013). Fundamentos de administración financiera. McGraw Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Calleja, F. (2014). Contabilidad Administrativa. México: Editorial Pearson.',
      link: '',
    },
    {
      referencia:
        'Krugman, O. (2008). Fundamentos de Economía. Barcelona. Editorial Reverté.',
      link: '',
    },
    {
      referencia:
        'Protección de Datos y Seguridad de la Información. (n.d.). (n.p.): Grupo Editorial RA-MA.',
      link:
        'https://www.google.com.co/books/edition/Protecci%C3%B3n_de_Datos_y_Seguridad_de_la_I/To6fDwAAQBAJ?hl=es&gbpv=1&dq=La+protecci%C3%B3n+de+datos.&printsec=frontcover',
    },
    {
      referencia:
        'Pérez, L. (2007). Negociación Asertiva, una visión diferente de la cobranza. México. ICM División editorial.',
      link: '',
    },
    {
      referencia:
        'Raju, J. (2010). Fijando Precios para Ganar Competitividad. Barcelona. Profit Editorial.',
      link: '',
    },
    {
      referencia:
        'Angulo Novoa, J. C., & Maldonado Piracon, W. A. (2016). SISTEMAS DE INFORMACIÓN GERENCIAL TIPO TRANSACCIONAL PARA PYMES. Ágora, 3(3), 60–75.',
      link: 'https://ojs.tdea.edu.co/index.php/agora/article/view/242',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor',
          centro: 'Centro de Comercio - Regional Antioquia',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja  - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
