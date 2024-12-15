export default {
  global: {
    componenteFormativo: 'Promoción en punto de venta',
    descripcionCurso:
      'El presente componente hace la presentación de las necesidades básicas que se requieren para la promoción de los productos, en el punto de venta y para eso se inicia desde el portafolio de los productos entendiendo el ciclo de vida de estos. Luego se trabaja con los almacenes y sus zonas de ventas en las que se requiere <em>merchandising</em> y exposición estratégica de los productos para conseguir los objetivos comerciales establecidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        titulo: 'Portafolio, tipos y categoría de productos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Las ventas y la promoción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ciclo de vida un producto',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Acuerdos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Zonas  en el almacén o punto de ventas (PV)',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Campaña promocional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recursos para el plan promocional',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Material P.O.P',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de exhibiciones',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Zonas en el anaquel o góndola',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Gestión en el punto de venta ',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'El <em>marketing</em> en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'El <em>merchandising</em> como técnica de marketing',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Promoción y publicidad lugar de venta (PLV)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Análisis del <em>shopper</em> o cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Tipos de cliente en el punto de venta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Métodos físicos y psicológicos para incentivar la venta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Las técnicas promocionales y el impulso de ventas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Técnicas promocionales',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'La labor de impulso',
            hash: 't_10_2',
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
        download: 'downloads/CFA_01_63220163_DU.pdf',
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
      tema: '4.3	Tipos de exhibiciones',
      referencia:
        'Bryan Campos. (2015). VISUAL MERCHANDISING PLAN DE ACCION PARA MEJORAR LA EFECTIVIDAD DEL METRO LINEAL.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=IUfgkaQp_SM',
    },
    {
      tema: '4.	Formulación estratégica para el plan de mercadeo',
      referencia:
        'TEDx Talks (2020). La evolución del marketing | Paul Soto | TEDxUANL. ',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=QyrL-K8AUuU',
    },
  ],
  glosario: [
    {
      termino: 'Bienes de consumo',
      significado:
        'productos elaborados expresamente para que los utilice el consumidor final, en contraposición a aquellos que se fabrican para revenderlos o utilizarlos en la fabricación de otros artículos. Productos, como cigarrillos, cerveza y goma de mascar que se compran con frecuencia, inmediatamente y con poco esfuerzo.',
    },
    {
      termino: 'Bienes industriales',
      significado:
        'artículos utilizados para producir otros bienes para su reventa.',
    },
    {
      termino: '<em>Brand</em>',
      significado: 'marca de producto o de un servicio.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'la práctica de crear prestigio y gran valor a un producto  con apoyo de <em>marketing</em>; dicha marca puede estar asociado o no a nombre de la empresa.',
    },
    {
      termino: 'Comportamiento de compra del consumido',
      significado:
        'la conducta de compra delos consumidores finales, es decir individuos y familias que adquieren bienes y servicios para consumo personal.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'forma que un individuo llega a las decisiones relativas a la selección, compra y uso de bienes y servicios.',
    },
    {
      termino: 'Concepto de producto',
      significado:
        'noción que establece que los consumidores preferirán productos que ofrezcan mejor calidad, rendimiento o características y de que la organización debe dedicar su energía para mejorarlos continuamente; versión detallada de la idea del nuevo producto expresada en términos comprensibles para los consumidores.',
    },
    {
      termino: 'Concepto de venta',
      significado:
        'idea de que el consumidor no comprará suficientes productos de la organización a menos que ésta haga un gran esfuerzo de promoción y ventas.',
    },
    {
      termino: 'Demandas',
      significado: 'deseos humanos apoyados por el poder de compra.',
    },
    {
      termino: 'Estrategia',
      significado:
        'arte de dirigir operaciones. Arte, traza para dirigir un asunto.',
    },
    {
      termino: 'Inventario',
      significado:
        'cantidad de unidades registradas de cada uno de los productos  que se encuentran dentro de un punto de ventas, bodega o almacén.',
    },
    {
      termino: 'Mercado',
      significado:
        'grupo identificable de consumidores con cierto poder adquisitivo, que están dispuestos y disponibles para pagar por un producto o un servicio. La totalidad de los compradores potenciales y actuales de algún producto o servicio.',
    },
    {
      termino: 'PV',
      significado: 'punto de ventas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bailey, S., & Baker, J. (2014). Moda y visual merchandising. Barcelona: Gustavo Gilli. Gilli. Fernández Valinas , R. (2003). Fundamentos de mercadotecnia. México: S.A. Ediciones Paraninfo',
      link: '',
    },
    {
      referencia:
        'García Casermeiro, M. J. (2015). Publicidad en el punto de venta. Bogotá: Ediciones de la U.Hernández Garnica, C., & Maubert Viveros, C. A. (2009). Fundamentos de marketing. México: Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. (2000). Dirección de Mercadotecnia. México: MacGraw Hill.',
    },
    {
      referencia:
        'Roger, K. (2009). <em>Marketing</em>. S.A. Mcgraw-Hill / Interamericana de España.',
    },
    {
      referencia:
        'Salén, H. (1994). Los secretos del <em>merchandising</em> activo. Madrid: Diaz de Santos, S.A. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Maritza Ramos Ruiz',
          cargo: 'Experta temática',
          centro:
            'Distrito Capital. Centro de Gestión de Mercados, Logística y Tic’s. Regional Distrito Capital.',
        },
        {
          nombre: 'Rosa Elvia Quintero Guasca',
          cargo: 'Asesora pedagógica',
          centro:
            'Regional Santander. Centro Industrial de Mantenimiento Integral- CIMI.',
        },
        {
          nombre: 'Luis Orlando Beltrán Vargas',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander. Centro Industrial de Mantenimiento Integral- CIMI.',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
