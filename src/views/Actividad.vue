<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar el conocimiento adquirido sobre la promoción en el piunto de venta y sus técnicas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué función desempeña el promotor de ventas en el punto de venta?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar las tareas de inventario de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Impulsar y cerrar ventas destacando las bondades del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Realizar actividades administrativas en el punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supervisar el desempeño de los empleados en ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El promotor impulsa las ventas al destacar las bondades del producto.',
          mensaje_incorrecto:
            'Incorrecto. La función principal del promotor es impulsar y cerrar ventas destacando los beneficios del producto.',
        },
        {
          id: 2,
          texto:
            '¿Qué porcentaje de decisiones de compra se estima que se toman en el punto de venta?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '50%', esCorrecta: false },
            { id: 'b', texto: '60%', esCorrecta: false },
            { id: 'c', texto: '75%', esCorrecta: true },
            { id: 'd', texto: '90%', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! El 75% de decisiones de compra se toman en el punto de venta.',
          mensaje_incorrecto:
            'No es correcto. Aproximadamente el 75% de las decisiones de compra ocurren en el punto de venta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la importancia de conocer el portafolio de productos en la labor del promotor?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite organizar la exhibición de manera estratégica para el cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facilita el proceso de inventario en el punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determina las políticas de precios en el punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ayuda a gestionar los recursos materiales y humanos en campañas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Conocer el portafolio facilita la organización estratégica de la exhibición.',
          mensaje_incorrecto:
            'No es correcto. Conocer el portafolio permite organizar estratégicamente la exhibición para el cliente.',
        },
        {
          id: 4,
          texto: '¿Qué se considera una zona “caliente” en el punto de venta?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Áreas de alto flujo de clientes y visibilidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sectores menos transitados y menos visibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Espacios donde los clientes se detienen poco tiempo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lugares alejados del área de cajas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! Las zonas “calientes” son de alto flujo y visibilidad.',
          mensaje_incorrecto:
            'Incorrecto. Las zonas “calientes” son áreas de alto tránsito y buena visibilidad.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes estrategias NO es un método físico de merchandising?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño de acceso al punto de venta',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Merchandising sensorial', esCorrecta: true },
            {
              id: 'c',
              texto: 'Identificación de secciones',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ubicación de productos', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El merchandising sensorial es un método psicológico.',
          mensaje_incorrecto:
            'Incorrecto. El merchandising sensorial es un método psicológico, no físico.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica promocional permite al cliente obtener una recompensa tangible al realizar la compra?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cupones', esCorrecta: false },
            { id: 'b', texto: 'Muestras gratis', esCorrecta: false },
            { id: 'c', texto: 'Oferta de premios', esCorrecta: true },
            { id: 'd', texto: 'Descuentos', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! Las ofertas de premios dan una recompensa tangible.',
          mensaje_incorrecto:
            'No es correcto. La oferta de premios da una recompensa tangible al comprador.',
        },
        {
          id: 7,
          texto:
            'En qué consiste la fase de crecimiento en el ciclo de vida de un producto?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La competencia se reduce debido a la saturación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La comercialización aumenta y surgen nuevos competidores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Las ventas comienzan a estancarse y se ajustan los precios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El producto se lanza al mercado con publicidad intensiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En esta fase, la comercialización aumenta y aparecen competidores.',
          mensaje_incorrecto:
            'Incorrecto. La fase de crecimiento implica un aumento en la comercialización y competencia.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de cliente en el punto de venta se caracteriza por hablar mucho y ocupar mucho tiempo del promotor?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cliente acelerado', esCorrecta: false },
            { id: 'b', texto: 'Cliente agresivo', esCorrecta: false },
            { id: 'c', texto: 'Cliente hablador', esCorrecta: true },
            { id: 'd', texto: 'Cliente experto', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El cliente hablador tiende a ocupar mucho tiempo conversando.',
          mensaje_incorrecto:
            'No es correcto. El cliente hablador ocupa tiempo hablando de varios temas.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la principal diferencia entre una degustación y un muestreo?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En la degustación, el consumo es inmediato; en el muestreo, es posterior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'En el muestreo, el producto es gratuito; en la degustación, no.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La degustación es solo para nuevos productos, el muestreo no.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El muestreo requiere más recursos publicitarios que la degustación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien hecho! La degustación implica consumo inmediato, el muestreo es posterior.',
          mensaje_incorrecto:
            'Incorrecto. La degustación se consume inmediatamente, mientras que el muestreo puede consumirse después.',
        },
        {
          id: 10,
          texto:
            '¿Qué es un planograma y cuál es su propósito principal en el punto de venta?',
          imagen: require('@/assets/actividad/imagen.jpg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un esquema de inventario para organizar el stock',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una representación gráfica de la disposición de productos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un método para analizar el flujo de clientes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema para calcular los precios de venta',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! El planograma es una representación gráfica para organizar productos.',
          mensaje_incorrecto:
            'No es correcto. Un planograma organiza visualmente la disposición de productos en el punto de venta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
