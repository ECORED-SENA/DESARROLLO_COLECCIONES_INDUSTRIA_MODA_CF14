<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5.figure-introduccion
      img(src="@/assets/curso/intro-imagen1.png")
    
    .mb-5.p-5.figure-introduccion-2
      p.mb-0 Los insumos de moda son parte esencial en la confección y desarrollo de las prendas de vestir. En sus orígenes estaban ligados a la funcionalidad, pero hoy en día se pueden vincular incluso con el estilo; un ejemplo de esto es la transformación del botón; en sus orígenes era una pieza para garantizar el cierre y ajuste de las prendas, pasando en la Edad Media a convertirse en una joya con incrustaciones de piedras preciosas como símbolo de poder, hasta los desarrollos hoy en día de botones impresos en 3D. 
        br
        br
        | Seleccionar de manera adecuada los elementos que conforman un diseño de vestuario puede garantizar la armonía y el estilo de la prenda, avalando la durabilidad, calidad y un claro ADN de marca; pues en el mercado actual, los insumos pueden hablar de qué son las marcas.

    p.mb-5 
      | Para comprender mejor este asunto es necesario hacer unas aclaraciones con respecto a lo que se considera como materia prima, insumo y accesorios, pues este módulo se centrará en los principales insumos y accesorios utilizados en la confección de prendas de vestir y, en ocasiones, puede traer confusiones el no tener claridad sobre las definiciones de cada uno, por lo que se invita a observar el siguiente recurso:

    .row.mb-5
      .col-lg-4.mb-5.mb-lg-0
        #flipper1.flip-container
          .flipper.text-center(@click='(e) => flip("#flipper1")')
            .front.image1
            .back.generic.py-4.px-5
              p.mb-0 Es todo elemento que puede transformarse y agruparse para la consecución de un producto. 
                br
                br
                | Según la Real Academia Española, un material es “elemento que entra como ingrediente en algunos compuestos”. En el caso del diseño y producción de prendas de vestir estaríamos hablando de las telas que son la materia prima principal para la elaboración de prendas.
                br
                br
                | Los materiales en cualquier proceso productivo son la esencia; y al igual que el concepto y la construcción de la marca, deben ser únicos y transmitir la personalidad de la misma.
      .col-lg-4.mb-5.mb-lg-0
        #flipper2.flip-container
          .flipper.text-center(@click='(e) => flip("#flipper2")')
            .front.image2
            .back.generic.py-4.px-5
              p.mb-0 Son objetos materiales y recursos usados para producir un producto o servicio final (Significados, 2017). 
                br
                br
                | En este caso en particular, son todos aquellos productos como botones, hilos, elásticos, herrajes, hebillas, entre otros elementos que tienen un factor importante en la funcionalidad de la prenda además de su valor estético. 

      .col-lg-4
        #flipper3.flip-container
          .flipper.text-center(@click='(e) => flip("#flipper3")')
            .front.image3
            .back.generic.py-4.px-5
              p.mb-0 En este mismo orden de ideas, los accesorios son elementos terminados cuya finalidad es la de complementar la prenda desarrollada. 
                br
                br
                | Según el portal definición ABC (s.f.): “el término accesorio hace referencia a todo aquel elemento u objeto que se utiliza para complementar otra cosa y que es opcional tener en cuenta”.

    .row.justify-content-center.mb-5
      .col-lg-auto
        p.mb-0 A continuación, se presenta un ejemplo al desear confeccionar una camisa en lino y que para su presentación final lleva un broche.

    .row
      .col-lg-8.mb-5.mb-lg-0
        .titulo-sexto.color-acento-contenido
          span Tabla 1. Ejemplo de los elementos para la confección de una camisa. 
        .tabla-a.color-acento-contenido.mb-5 
          table.especial
            tbody
              tr
                th Material
                td(colspan="2") Tela de lino, elemento principal de la prenda.
              tr
                th Insumos
                td(colspan="2") Hilos, entretela, botones. Elementos que hacen posible construir o fabricar la camisa. 
              tr
                th Accesorios
                td(colspan="2") Broche, elemento que complementa, decora y adorna la camisa; no es necesario para obtener la camisa, solo le complementa.

      .col-lg-4
        figure
          img(src='@/assets/curso/intro-imagen5.svg')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  methods: {
    flip: id => {
      console.log(document.querySelector(id))
      document.querySelector(id).classList.toggle('flip')
    },
  },
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
