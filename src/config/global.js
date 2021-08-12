export default {
  global: {
    componenteFormativo: 'Materiales e insumos para vestuario ',
    descripcionCurso:
      'El éxito de un diseño no va solo en su propuesta estética, sino también ligado a un excelente manejo y selección de las materias primas e insumos que garanticen las características de vestibilidad y usabilidad acordes al diseño.<br><br>Los insumos como piezas que tienen una función específica en la construcción de las prendas han evolucionado hasta ser un factor diferenciador, transformando su diseño para, incluso, ser piezas decorativas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clasificación de insumos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Insumos de confección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Insumos de confección de ropa exterior',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Insumos para ropa interior y deportiva',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Insumos de empaque',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Acabados y terminaciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Alvarado, M., O. L. (2011). Materiales e insumos para confecciones. [Web log post]',
      link:
        'http://cosiendocontalentoclasemundo.blogspot.com/2011/12/materiales-e-insumos-para-confecciones.html',
    },
    {
      referencia:
        'Amaden, C., C. (2016). Confección de moda: técnicas básicas. Editorial Gustavo Gili.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45594?page=154',
    },
    {
      referencia: 'AnAnAs. (2015). 1001 maneras de coser un botón.',
      link:
        'https://ananaslaboresymanualidades.wordpress.com/2015/07/15/1001-maneras-de-coser-un-boton/',
    },
    {
      referencia: 'Angulo, F., A. M. (2012). Modistería, hilos y telas. SENA.',
      link:
        'https://repositorio.sena.edu.co/sitios/modisteria_conocimientos_basicos/hilos_maquina/hilosytelas.html',
    },
    {
      referencia:
        'Jaramillo, J. J. (1990). Control de calidad en confección. SENA. ',
    },
    {
      referencia:
        'Matadero Madrid. Centre for Contemporary Creation. (2017). Los materiales.',
      link: 'https://www.mataderomadrid.org/en/schedule/los-materiales',
    },
    {
      referencia:
        'Real Academia Española. (2021). Diccionario de la lengua española.',
      link: 'https://dle.rae.es',
    },
    {
      referencia: 'Significados. (2017). Significado de insumos.',
      link: 'https://www.significados.com/insumos/',
    },
    {
      referencia: 'Léxico. (2021). Cinta.',
      link: 'https://www.lexico.com/es/definicion/cinta',
    },
    {
      referencia: 'Velásquez, E. (2021). Botones metálicos de golpe.',
      link:
        'https://www.estradavelasquez.com/index.php/es/que-hacemos/botones/botones-metalicos-de-golpe',
    },
  ],
  glosario: [
    {
      termino: 'Accesorio',
      significado: 'que depende de lo principal o se le une por accidente.',
    },
    {
      termino: 'Cintas',
      significado:
        'tira de tela larga y estrecha que sirve para atar, ajustar o adornar las prendas de vestir (Léxico, 2021).',
    },
    {
      termino: 'Franja',
      significado:
        'tira alargada que va de extremo a extremo de la superficie en que aparece, de la cual se distingue por el contraste de color (Léxico, 2021).',
    },
    {
      termino: 'Insumo',
      significado:
        'conjunto de elementos que toman parte en la producción de otros bienes (Significado, 2017).',
    },
    {
      termino: 'Material',
      significado:
        'elemento que entra como ingrediente en algunos compuestos. Conjunto de máquinas, herramientas u objetos de cualquier clase, necesario para el desempeño de un servicio o el ejercicio de una profesión (Los materiales, 2021).',
    },
    {
      termino: 'Vivo',
      significado:
        'cinta, cordoncillo, trencilla, con o sin alma, que se coloca entre dos piezas de la misma prenda generalmente como adorno. Muy utilizado en prendas deportivas.',
    },
  ],
  complementario: [
    {
      texto:
        'Divina costura. (2016, Mayo 9). ¡Atención! Cierran pero no muerden.',
      tipo: 'Artículo',
      link: 'http://www.divinacostura.com/2016/05/09/tipos-de-cremalleras/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
