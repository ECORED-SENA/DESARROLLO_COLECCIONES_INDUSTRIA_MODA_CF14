<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Insumos de confección

    figure.mb-5
      img(src="@/assets/curso/tema2-imagen1.png")
    
    p.mb-5 Se presentan los principales insumos necesarios para la confección de prendas en cada una de las líneas, ropa exterior y ropa interior y deportiva. La clasificación de estos insumos en cada una de las líneas responde al uso mayoritario de las mismas, lo cual no será una camisa de fuerza que no permita la experimentación con diferentes insumos y universos del vestuario. 

    #t_2_1.titulo-segundo
      h2 Insumos de confección de ropa exterior

    p.mb-5 Como se expuso antes, los insumos son productos que se utilizan para dar terminación a otro producto y hacen parte de su funcionalidad y, a diferencia de los materiales, no se pueden transformar. En este orden de ideas, los insumos están también definidos por el tipo de prenda a producir. A continuación, se muestran <strong>algunas de las prendas básicas</strong> en vestuario exterior e interior, cuáles son sus <strong>insumos básicos</strong> y luego la explicación de cada uno de ellos.
    
    .row.justify-content-center.mb-5
      .col-lg-6.other-title.text-white.py-2.text-center
        p.mb-0.fw-bold Confección de ropa exterior

    h4.titulo-cuarto.mb-5 · Prendas básicas de exterior e interior

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Insumos para la camisa" :icono="require('@/assets/curso/tema2-imagen2.svg')")
        .row
          .col-lg-9.mb-5.mb-lg-0
            p.mb-4 La camisa es una prenda de uso exterior que cubre la parte superior del cuerpo. Esta puede presentar variación en el diseño para cuellos, puños, frentes y espalda; además, la manga puede ser corta o larga con lo que la prenda pasa de ser formal a informal.

            ul.lista-ul--color.mb-4
              li 
                i.fas.fa-angle-right
                | Camisa formal.
              li
                i.fas.fa-angle-right
                | Camisa informal.

            p.mb-5 Algunas de las telas más utilizadas para su confección son lino, seda, oxford, dacrón, chalis, popelinas y chambray. Comercialmente se puede encontrar variedad de referencias en telas con estampados, diseños textiles, texturas y gramajes, que se pueden utilizar para confección de camisas. Adicional a ello, las composiciones pueden ser realizadas con fibras naturales como el algodón, lino o seda, o sus combinaciones con fibras artificiales y sintéticas como el poliéster, viscosa, elastómero y acetato.
              br
              br
              | En la siguiente tabla se presentan los insumos más utilizados en estas prendas.

            .titulo-sexto.color-acento-contenido
              span.text-small Tabla 2. Insumos para la camisa.

            .tabla-a.color-acento-contenido.mb-5 
              table.especial
                thead
                  tr
                    th Insumos de confección
                    th(colspan="2") Insumos de empaque
                tbody
                  tr
                    td Hilos, botones y entretela.
                    td(colspan="2") Marquilla de talla, marquilla de marca, instrucciones de lavado y composición, empaque, etiqueta.
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen5.png")
      .py-4.py-md-5(titulo="Insumos para pantalón" :icono="require('@/assets/curso/tema2-imagen3.svg')")
        .row
          .col-lg-9.mb-5.mb-lg-0
            p.mb-4 El pantalón es una prenda que cubre la parte inferior del cuerpo. Uno de los principales materiales corresponde a la tela, entre las más conocidas se encuentran: lana, paño, driles, linos y corderoy que son algunas de las telas rígidas; para pantalones suaves pueden usarse chifón, poliéster, rayón y sedas.
              br
              br
              | A continuación, se presentan los insumos más utilizados en estas prendas.


            .titulo-sexto.color-acento-contenido
              span.text-small Tabla 3. Insumos para pantalón.

            .tabla-a.color-acento-contenido.mb-5 
              table.especial
                thead
                  tr
                    th Insumos de confección
                    th(colspan="2") Insumos de empaque
                tbody
                  tr
                    td Hilos, botones, entretela y cierres. 
                    td(colspan="2") Marquilla de talla, marquilla de marca, instrucciones de lavado y composición, empaque y etiqueta. 
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen6.png")
      .py-4.py-md-5(titulo="Insumos para jean y chaquetas en denim" :icono="require('@/assets/curso/tema2-imagen4.svg')")
        .row
          .col-lg-9.mb-5.mb-lg-0
            p.mb-4 El denim es un tejido de amplio uso en la fabricación de jean y algunas prendas como chaquetas, chalecos, faldas y vestidos. Su principal composición es el algodón, fibra natural que permite lograr los mejores acabados; sin embargo, este tejido se puede mezclar con  otras fibras para darle mayor flexibilidad usando elastómero o mejorando su resistencia y durabilidad con poliéster. Las empresas textileras ofrecen las mejores alternativas para realizar los diseños de pantalones informales y demás productos con esta importante materia prima. Se puede consultar la norma técnica colombiana. NTN 2260:2017 

            ul.lista-ul--color.mb-4
              li 
                i.fas.fa-angle-right
                | Camisa formal.

            p.mb-5 En la siguiente tabla se presentan los insumos de mayor uso dentro de este tipo de prendas, si bien hay elementos comunes, está a criterio del equipo de diseño qué insumos usar o combinar, según la temporada o tendencias de moda.

            .titulo-sexto.color-acento-contenido
              span.text-small Tabla 4. Insumos para jeans y chaquetas en denim.

            .tabla-a.color-acento-contenido.mb-5 
              table.especial
                thead
                  tr
                    th Insumos de confección
                    th(colspan="2") Insumos de empaque
                tbody
                  tr
                    td Hilos, botones de golpe, marquilla garra, remaches, cierres o cremalleras. 
                    td(colspan="2") Marquilla de talla, marquilla de marca, instrucciones de lavado y composición, empaque y etiqueta.
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen7.png")
    
    h4.titulo-cuarto.mb-5 · Insumos básicos de las prendas de exterior e interior.

    TabSpecial.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Hilos" :imagen="images[0]" :numero="numbers[0]")
        .row.justify-content-center.px-5
          .col-10
            p.mb-4 El hilo es una hilera continua de fibras entrelazadas entre sí por efectos de la torsión y se utiliza para coser las diferentes partes de la prenda de vestir, por lo general se utiliza tono a tono.
          .col-12
            SliderCajas(columns="col-lg-2")
              .row(titulo="Torsión").justify-content-center
                .col-lg-10
                  .row
                    .col-lg-9.mb-5.mb-lg-0
                      p.mb-0 Es el número de vueltas de longitud que se aplica a un hilo durante el proceso de fabricación para darle resistencia y flexibilidad. Los hilos de costura se tuercen con dos, tres o cuatro cabos, dependiendo del material.
                        br
                        br
                        | Los hilos de costura normalmente se hacen con torsión Z, conocida como torsión izquierda o en el sentido contrario a las manecillas del reloj. 
                        br
                        br
                        | La torsión derecha, en sentido horario, también es denominada como torsión S. La mayoría de los hilos de coser se fabrican con torsión Z para que resistan la fuerza de fricción que actúa sobre el hilo cuando este pasa a través de una máquina de coser.
                    .col-lg-3
                      .titulo-sexto.color-acento-contenido.mb-0
                        span.text-small Figura 1. Tipo de torsión.
                      figure
                        img(src="@/assets/curso/tema2-imagen13.jpg")
                        figcaption Nota. Tomada de Alvarado (2011).

              .row(titulo="Titulación de los hilos").justify-content-center
                .col-lg-10
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      p.mb-0 Es una forma de denominación y clasificación de los hilos según el grosor de estos. Esta denominación se hace de manera numérica en la etiqueta de información del hilo y se realiza en alguno de los dos sistemas de clasificación, tal y como se preseta en la tabla.
                  .row
                    .col-12
                      .titulo-sexto.color-acento-contenido
                        span.text-small Tabla 5. Insumos para pantalón.

                      .tabla-a.color-acento-contenido.mb-5 
                        table.especial
                          thead
                            tr
                              th Denier
                              th Tex
                          tbody
                            tr
                              td Es el sistema métrico inverso (a mayor número, más delgado).<br><br>Hilo 120 denier, hilo delgado y resistente para confección de camisas.
                              td Es el sistema métrico directo (a mayor número, más grueso). Suele ser el sistema más usado.<br><br>Hilo 105 tex, hilo grueso y resistente para confección de jean.

              .row(titulo="Calibres").justify-content-center
                .col-lg-10
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      p.mb-0 El calibre hace referencia al grosor del hilo y va a estar representado por dos números. El primer número indica las torsiones que ha recibido el hilo en el proceso de elaboración y el siguiente número señala los cabos que conforman el hilo.
                  .row.justify-content-center
                    .col-auto
                      .titulo-sexto.color-acento-contenido.mb-0
                        span.text-small Figura 2. Calibre del hilo.
                      figure
                        img(src="@/assets/curso/tema2-imagen14.jpg")
                        figcaption Nota. Tomada de Alvarado (2011).
                        
              .row(titulo="Cabos").justify-content-center
                .col-lg-10
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      p.mb-0 Es el número de fibras o hebras que se retuercen juntas para formar un hilo. A menor número de cabos, más delgado es el hilo.
                  .row.justify-content-center
                    .col-auto
                      .titulo-sexto.color-acento-contenido.mb-0
                        span.text-small Figura 3. Cabos de un hilo.
                      figure
                        img(src="@/assets/curso/tema2-imagen15.jpg")
                        figcaption Nota. Tomada de Angulo (2012).

              .row(titulo="Recomendaciones").justify-content-center
                .col-lg-8
                  .row
                    .col-lg-8.mb-5.mb-lg-0
                      p.mb-4 Se presentan algunas notas de recomendación:
                      ol.lista-ol--cuadro
                        li 
                          .lista-ol--cuadro__vineta
                            span 1
                          | Hilo 40/3 para costuras de máxima resistencia.
                        li 
                          .lista-ol--cuadro__vineta
                            span 2
                          | Hilo 60/2 para coser popelinas gruesas y driles.
                        li 
                          .lista-ol--cuadro__vineta
                            span 3
                          | Hilo 70/2 para coser popelinas.
                        li 
                          .lista-ol--cuadro__vineta
                            span 4
                          | Hilo 100/2 para ropa de niños.
                        li 
                          .lista-ol--cuadro__vineta
                            span 5
                          | Hilo 120/2 para bordar encajes y bordes de pañuelos o telas livianas.
                    .col-lg-4
                  p.mb-4 Para conocer más sobre la forma de elaboración, tipos de hilos más comunes y características, se puede revisar el video Clasificación de los hilos de la Red Producción de Contenidos, Grupo Gestión Curricular SENA disponible en el siguiente enlace
                  a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web.  Clasificación de los hilos.


      .py-3.py-md-4(titulo="Botones" :imagen="images[1]" :numero="numbers[1]")
      .py-3.py-md-4(titulo="Cremalleras" :imagen="images[2]" :numero="numbers[2]")
      .py-3.py-md-4(titulo="Marquilla garra" :imagen="images[3]" :numero="numbers[3]")
      .py-3.py-md-4(titulo="Velcro" :imagen="images[4]" :numero="numbers[4]")

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
import TabSpecial from '../components/TabSpecial'
import SliderCajas from '../components/SliderCajas'

const imagentab1 = require('@/assets/curso/tema2-imagen8.svg')
const imagentab2 = require('@/assets/curso/tema2-imagen9.svg')
const imagentab3 = require('@/assets/curso/tema2-imagen10.svg')
const imagentab4 = require('@/assets/curso/tema2-imagen11.svg')
const imagentab5 = require('@/assets/curso/tema2-imagen12.svg')
const numerotab1 = require('@/assets/curso/tema2-numero1.svg')
const numerotab2 = require('@/assets/curso/tema2-numero2.svg')
const numerotab3 = require('@/assets/curso/tema2-numero3.svg')
const numerotab4 = require('@/assets/curso/tema2-numero4.svg')
const numerotab5 = require('@/assets/curso/tema2-numero5.svg')

export default {
  name: 'Tema2',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
    TabSpecial,
    SliderCajas,
  },
  data: () => ({
    // variables de vue
    images: [imagentab1, imagentab2, imagentab3, imagentab4, imagentab5],
    numbers: [numerotab1, numerotab2, numerotab3, numerotab4, numerotab5],
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
