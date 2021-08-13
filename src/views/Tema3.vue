<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Insumos de empaque
      
    .cajon.color-acento-contenido.p-4.mb-4
      p En este segmento se exponen aquellos insumos que cumplen una función informativa (marquillas de talla, marca de instrucciones de lavado y composición) y de protección (empaque y etiquetas) de las prendas ya terminadas para continuar con su proceso de distribución y entrega al cliente o consumidor final. Las opciones que se mencionan a continuación son las más usuales, pero pueden variar según las especificaciones del diseño, el tipo de producto y segmento del mercado, pues estos elementos también deben transmitir el ADN de la marca.
    
    SlyderB.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Marquillas talla',
        texto:
          'Diseñada en diferentes materiales, fija o removible. Ofrece al cliente la composición del tejido y los cuidados que debe tener la prenda durante su uso.',
        imagen: require('@/assets/curso/tema3-imagen1.png'),
      },
      {
        titulo: 'Marquilla de marca',
        texto:
          'Realizada en tejido suave con diferentes diseños para sobreponer, en bandera, permite identificar y recordar la marca de la empresa ayudando a la identificación del producto.',
        imagen: require('@/assets/curso/tema3-imagen2.png'),
      },
      {
        titulo: 'Instrucción lavado y composición',
        texto:
          'Diseñada en diferentes materiales, fija o removible. Ofrece al cliente la composición del tejido y los cuidados que debe tener la prenda durante su uso.',
        imagen: require('@/assets/curso/tema3-imagen3.png'),
      },
      {
        titulo: 'Empaque primario',
        texto:
          'El proceso de diseño y de confección no termina si no se ha empacado el producto; es necesario determinar cómo, ya que estos costos también se deben de tener en cuenta para el costo, bolsa y/o gancho.',
        imagen: require('@/assets/curso/tema3-imagen4.png'),
      },
      {
        titulo: 'Etiquetas',
        texto:
          'Elemento de papel, cartulina o textil que se sujeta a la prenda, donde se puede identificar la marca con su logotipo, tallas, código de barra y demás información relevante del producto.',
        imagen: require('@/assets/curso/tema3-imagen5.png'),
      },
      {
        titulo: 'Empaque secundario',
        texto:
          'Transcurrida toda la cadena de transformación de un producto, es importante definir cómo va a llegar al cliente de tal manera que se conserve y tenga buena presentación.<br><br>Según lo defina políticas de la empresa de confección, con su equipo de diseño, puede ser doblado, colgado, en bolsa, etc.; este tipo de insumo también se debe pensar desde la concepción del producto, pues hace parte del costo de producto.',
        imagen: require('@/assets/curso/tema3-imagen1.png'),
      },
    ],
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

<style lang="sass" scoped></style>
