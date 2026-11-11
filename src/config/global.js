export default {
  global: {
    Name: 'Tecnología y transacciones en <em>e-commerce</em>',
    Description:
      'El componente formativo desarrolla competencias relacionadas con la gestión del servicio, soporte tecnológico y administración de transacciones digitales en operaciones de comercio electrónico. Asimismo, fortalece la capacidad para seleccionar medios de comunicación, gestionar pasarelas de pago, proteger los datos y transacciones financieras, aplicar pruebas de servicio y garantizar el cumplimiento normativo. Lo anterior contribuye al mejoramiento de la experiencia del usuario, la seguridad de la información y la eficiencia de los procesos digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo: 'Gestión del servicio y soporte tecnológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión del servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Soporte tecnológico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Infraestructura',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Requerimientos de administración y usuario',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias de medios y comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estrategias de medios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Selección de canales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Prestadores de servicios de comunicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Costos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'KPI',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Protección de datos y seguridad digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Protección de datos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativa',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Delitos informáticos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Requerimientos de soporte y administración',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pasarelas de pago y soporte transaccional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pasarelas de pago',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Operación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Soporte tecnológico',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Facturación electrónica',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Pruebas y control de calidad de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Pruebas de servicio',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Pruebas de interfaz',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Pruebas de usuario',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Pruebas de sistema',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Protección de transacciones financieras y cumplimiento normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Riesgos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Sistemas de protección',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Soporte',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Normativa aplicable a transacciones electrónicas',
            hash: 't_6_4',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/08130001_CF02_CFA.pdf',
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
  glosario: [
    {
      termino: 'Aplicación digital',
      significado:
        '<em>software</em> utilizado para ejecutar funciones específicas en entornos electrónicos.',
    },
    {
      termino: 'Canal digital',
      significado:
        'Medio utilizado para interactuar y comunicarse con usuarios en entornos virtuales.',
    },
    {
      termino: 'Comercio electrónico',
      significado:
        'Actividad comercial que comprende la compra y venta de bienes o servicios mediante medios o plataformas electrónicas.',
    },
    {
      termino: 'Delito informático',
      significado:
        'Conducta ilícita realizada mediante sistemas informáticos o redes digitales.',
    },
    {
      termino: 'Facturación electrónica',
      significado:
        'Documento tributario emitido y almacenado en formato digital.',
    },
    {
      termino: 'Gestión del servicio',
      significado:
        'Conjunto de actividades orientadas a garantizar la calidad y continuidad del servicio.',
    },
    {
      termino: 'Indicador KPI',
      significado:
        'Métrica utilizada para medir el desempeño de procesos y objetivos.',
    },
    {
      termino: 'Infraestructura tecnológica',
      significado:
        'Recursos físicos y tecnológicos que soportan sistemas y servicios digitales.',
    },
    {
      termino: 'Integración contable',
      significado:
        'Vinculación de las transacciones electrónicas con los procesos financieros de la organización.',
    },
    {
      termino: 'Interfaz de usuario',
      significado:
        'Medio mediante el cual una persona interactúa con una aplicación o sistema.',
    },
    {
      termino: 'Medio digital',
      significado:
        'Plataforma utilizada para difundir información y facilitar la comunicación electrónica.',
    },
    {
      termino: 'Normativa digital',
      significado:
        'Conjunto de leyes y regulaciones aplicables a operaciones tecnológicas y electrónicas.',
    },
    {
      termino: 'Pasarela de pago',
      significado:
        'Plataforma que procesa y autoriza transacciones electrónicas de pago.',
    },
    {
      termino: 'Prestador de servicios',
      significado:
        'Empresa que suministra soluciones tecnológicas o de comunicación digital.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'Medidas destinadas a garantizar la privacidad y seguridad de la información personal.',
    },
    {
      termino: 'Prueba de interfaz',
      significado:
        'Evaluación realizada sobre la interacción visual y funcional de un sistema.',
    },
    {
      termino: 'Prueba de usuario',
      significado:
        'Verificación del funcionamiento de una aplicación desde la perspectiva del usuario final.',
    },
    {
      termino: 'Prueba del sistema',
      significado:
        'Evaluación integral del desempeño y funcionamiento de un sistema tecnológico.',
    },
    {
      termino: 'Seguridad digital',
      significado:
        'Conjunto de medidas para proteger información, sistemas y redes informáticas.',
    },
    {
      termino: 'Soporte tecnológico',
      significado:
        'Servicio destinado a mantener el funcionamiento adecuado de herramientas tecnológicas.',
    },
    {
      termino: 'Transacción electrónica',
      significado:
        'Operación comercial realizada mediante plataformas digitales.',
    },
    {
      termino: 'Trazabilidad digital',
      significado:
        'Capacidad de rastrear y controlar procesos e información dentro de sistemas electrónicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Mexicana de Venta Online. (2022). Libro blanco de marketing para eCommerce (2.ª ed.). ',
      link: 'https://8982035.fs1.hubspotusercontent-na1.net/hubfs/8982035/Publicaciones/documentos/publico/Libro-Blanco-de-Marketing-para-eCommerce.pdf',
    },
    {
      referencia: 'Banco de la República. (2021). Pasarelas de pago.',
      link: 'https://www.banrep.gov.co/es/node/40991',
    },
    {
      referencia:
        'Betancur, C. (2021). Comparación de pasarelas de pago en Colombia. BTODigital.',
      link: 'https://btodigital.com/comparacion-de-pasarelas-de-pago-en-colombia/',
    },
    {
      referencia:
        'Campuzano, J. C., Castro, H. H., & Figueroa, A. (2021). Libro blanco del comercio electrónico Colombia: Una guía adaptada a las necesidades de las MiPymes colombianas. Universidad EAN; Ministerio de Tecnologías de la Información y las Comunicaciones. ',
      link: 'https://colombiatic.mintic.gov.co/679/articles-197363_recurso_1.pdf',
    },
    {
      referencia:
        'Comunidad Woocommerce Bogotá. (2020). Pasarelas de pago en el e-commerce [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=XfAEts0DCdI',
    },
    {
      referencia:
        'De la Cruz López, A., & Martínez de Escobar Fernández, A. (2024). La satisfacción del cliente en el comercio electrónico. Gestión, 2(2).',
      link: 'https://revistap.ejeutap.edu.co/index.php/Gestion/article/view/148',
    },
    {
      referencia:
        'Escuela Judicial Rodrigo Lara Bonilla. (2020, 11 de diciembre). Ley de comercio electrónico [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=TPyJIfK1NT4',
    },
    {
      referencia:
        'Herradón, A. (2009). Marketing electrónico para pymes. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Ley 1480 de 2011. Estatuto del Consumidor. República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales. República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Resolución 202 de 2010. ',
      link: 'https://normograma.mintic.gov.co/mintic/compilacion/docs/resolucion_mintic_0202_2010.htm',
    },
    {
      referencia:
        'Montilla Buitrago, H. Y. (2024). Infraestructura tecnológica y logística, aspectos legales del e-commerce. Corporación Universitaria de Asturias. ',
      link: 'https://www.centro-virtual.com/recursos/biblioteca/pdf/e-commerce/unidad2_pdf1.pdf',
    },
    {
      referencia:
        'Montoya Correa, E. (2023). ¿Cómo mejorar los procesos logísticos del e-commerce mediante click and collect? Institución Universitaria de Envigado. ',
      link: 'https://bibliotecadigital.iue.edu.co/handle/20.500.12717/3032',
    },
    {
      referencia:
        'Observatorio e-commerce. (2018). Manual de buenas prácticas de las pasarelas de pago en Colombia.',
      link: '',
    },
    {
      referencia: 'Ortega, L. (2015). E-commerce y pago seguro. ',
      link: 'https://e-archivo.uc3m.es/rest/api/core/bitstreams/b74e2f04-813d-4caf-a4bc-8557b3873066/content',
    },
    {
      referencia:
        'Pinilla, González & Prieto Abogados. (2020, 23 de junio). Comercio electrónico: Protección de datos y seguridad de la información [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=_sjIHKMeeeg',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2025). Estrategia Nacional de Seguridad Digital de Colombia 2025-2027.  ',
      link: 'https://www.mintic.gov.co/portal/715/articles-403023_recurso_2.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Quintero Guzmán ',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz  ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
