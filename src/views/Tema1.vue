<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Clasificación de insumos
    
    .row.mb-5.justify-content-center(data-aos="slide-right")
      .col-lg-10
        .row.mb-5
          .col-lg-8.mb-5.mb-lg-0
            p.mb-0 Teniendo claro qué son insumos y accesorios, se presenta a continuación su división en dos grandes grupos: <strong>insumos de confección e insumos de empaque</strong>. Los primeros son aquellos elementos que se utilizan para la producción de las prendas de vestir e incluye productos como hilos, elásticos, cintas, sesgos y ribetes, broches, botones, cremalleras, sistemas de cierre, entre otros. Estos a su vez se dividen según la línea de producción, sea para ropa exterior o ropa interior, pues cada una de estas líneas se convierte en un universo en sí misma, en el que los insumos deben estar ligados a la funcionalidad y factibilidad de uso con la materia prima que se utiliza.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema1-imagen1.jpg')
        
        .cajon.color-primario.p-4.mb-4
          p Por otro lado, se tienen los <strong>insumos de empaques</strong> que son todos los elementos que aportan a la entrega clara y oportuna del producto al usuario o cliente final. Allí se encuentra el tema de etiquetas informativas (tallas, materiales, instrucciones de cuidado), empaques, ganchos; es decir, son todos los insumos necesarios para la comercialización de las prendas.

    .row.mb-5.justify-content-center(data-aos="slide-left")
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          span Figura 1. Clasificación de insumos.
        figure
          img(src='@/assets/curso/tema1-imagen2.svg')
  
</template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass" scoped></style>
