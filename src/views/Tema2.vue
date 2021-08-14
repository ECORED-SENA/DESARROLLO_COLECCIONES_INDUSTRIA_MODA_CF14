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
      h2 2.1  Insumos de confección de ropa exterior

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
                    .col-lg-8.mb-5.mb-lg-0
                      p.mb-0 Es el número de vueltas de longitud que se aplica a un hilo durante el proceso de fabricación para darle resistencia y flexibilidad. Los hilos de costura se tuercen con dos, tres o cuatro cabos, dependiendo del material.
                        br
                        br
                        | Los hilos de costura normalmente se hacen con torsión Z, conocida como torsión izquierda o en el sentido contrario a las manecillas del reloj. 
                        br
                        br
                        | La torsión derecha, en sentido horario, también es denominada como torsión S. La mayoría de los hilos de coser se fabrican con torsión Z para que resistan la fuerza de fricción que actúa sobre el hilo cuando este pasa a través de una máquina de coser.
                    .col-lg-4
                      .titulo-sexto.color-acento-contenido.mb-0
                        span.text-small Figura 1. Tipo de torsión.
                      figure
                        img(src="@/assets/curso/tema2-imagen13.svg")
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
                      .titulo-sexto.color-acento-contenido.mb-3
                        span.text-small Figura 2. Calibre del hilo.
                      figure
                        img(src="@/assets/curso/tema2-imagen14.svg")
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
                      figure.py-5
                        img(src="@/assets/curso/tema2-imagen15.svg").mb-5
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
                      figure
                        img(src="@/assets/curso/tema2-imagen19.svg")
                  p.mb-4 Para conocer más sobre la forma de elaboración, tipos de hilos más comunes y características, se puede revisar el video Clasificación de los hilos de la Red Producción de Contenidos, Grupo Gestión Curricular SENA disponible en el siguiente enlace
                  a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web.  Clasificación de los hilos.


      .py-3.py-md-4(titulo="Botones" :imagen="images[1]" :numero="numbers[1]")
        .row.justify-content-center.px-5
          .col-12
            p.mb-5 Este elemento permite unir o cerrar prendas vestir y está elaborado en diferentes materiales como acrílico, plástico, madera o aleaciones metálicas. Tienen dos o cuatro ojos para permitir cosido a la prenda. Se encuentran en diferentes tamaños en diámetro llamados líneas medida usada para definir el tamaño correcto del botón, según tipo de prenda, ya que cambia el tamaño para una blusa, pantalón o abrigo.
            SliderCajas(columns="col-lg-3")
              .row(titulo="¿Cómo medir un botón?").justify-content-center
                .col-lg-10
                  p.mb-5 La línea (L) corresponde a la medida del diámetro máximo del botón. Una (1) línea equivale a <strong>1 línea/40 pulgadas</strong>, es decir, <strong>0,635 pulgadas o 0,025 milímetros</strong>. Y se toma como referencia el lado de mayor diámetro.
                  .row.justify-content-center
                    .col-lg-10
                      .titulo-sexto.color-acento-contenido.mb-3
                        span.text-small Figura 4. Tipo de torsión.
                      figure.mb-5
                        img(src="@/assets/curso/tema2-imagen16.svg")
                        figcaption Nota. Tomada de Alvarado (2011).
                      p.mb-5 La siguiente tabla presenta la equivalencia entre líneas y milímetros, según el diseño y material se puede seleccionar botones para camisa entre 12 y 18 líneas.
                      .titulo-sexto.color-acento-contenido.mb-3
                        span.text-small Figura 6. Medición de botones.
                      .tabla-a.special.color-acento-botones.mb-5 
                        table
                          thead
                            tr
                              th Lineas
                              th milímetro (+-0,3)
                              th Lineas
                              th milímetro (+-0,3)
                          tbody
                            tr
                              td.text-center 10
                              td.text-center 6,4
                              td.text-center 24
                              td.text-center 15,2
                            tr
                              td.text-center 11
                              td.text-center 7,0
                              td.text-center 26
                              td.text-center 16,5
                            tr
                              td.text-center 12
                              td.text-center 7,6
                              td.text-center 28
                              td.text-center 17,8
                            tr
                              td.text-center 13
                              td.text-center 8,3
                              td.text-center 30
                              td.text-center 19,1
                            tr
                              td.text-center 14
                              td.text-center 8,9
                              td.text-center 32
                              td.text-center 20,3
                            tr
                              td.text-center 15
                              td.text-center 9,5
                              td.text-center 34
                              td.text-center 21,6
                            tr
                              td.text-center 16
                              td.text-center 10,2
                              td.text-center 36
                              td.text-center 22,9
                            tr
                              td.text-center 17
                              td.text-center 10,8
                              td.text-center 40
                              td.text-center 25,4
                            tr
                              td.text-center 18
                              td.text-center 11,4
                              td.text-center 40
                              td.text-center 25,4
                            tr
                              td.text-center 19
                              td.text-center 12,1
                              td.text-center 44
                              td.text-center 27,9
                            tr
                              td.text-center 20
                              td.text-center 12,7
                              td.text-center 54
                              td.text-center 34,3
                            tr
                              td.text-center 22
                              td.text-center 14,0
                              td.text-center 70
                              td.text-center 44,5

                      p.mb-5 Para ampliar la información puede consultar la norma técnica colombiana, botones de poliester NTC 2510: 2001.

              .row(titulo="Recomendaciones").justify-content-center
                .col-lg-10
                  ul.lista-ul--color.mb-4
                    li 
                      i.fas.fa-angle-right
                      | En camisa de hombre 14/15/18 líneas.
                    li
                      i.fas.fa-angle-right
                      | En blusas de dama, 20 líneas.
                    li
                      i.fas.fa-angle-right
                      | En pantalones 24/27/28 líneas.
                    li
                      i.fas.fa-angle-right
                      | En chaquetas femeninas, botones de 36 líneas con botón de 24 líneas.
                    li
                      i.fas.fa-angle-right
                      | En traje formal masculino y para abrigos, botones de 40 y 44 líneas.
                  .titulo-sexto.color-acento-contenido.mb-3
                    span.text-small Figura 5. Tipos de botones.
                  figure.mb-5
                    img(src="@/assets/curso/tema2-imagen18.svg")
                    figcaption  Nota. Tomada de Ananas (2015).

              .row(titulo="Tipos de botones").justify-content-center
                .col-lg-10
                  ol.lista-ol--cuadro.lista-ol--separador.py-3
                    li.py-4 
                      .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
                        span 1
                      p.mb-0
                        strong Los botones planos  
                        | cuentan con unas perforaciones para coserlos, que los atraviesan del derecho al revés, mientras que los botones con cuello llevan un saliente perforado o una anilla de metal por el revés (Anana, s. f.). Están los botones planos que pueden contar con dos o cuatro agujeros y cosen a la prenda con hilo, luego los botones con tallo, que son aquellos quedan a nivel de la tela.
                    li.py-4
                      .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
                        span 2
                      p.mb-0
                        strong Botón de golpe:    
                        | elemento metálico usado para  
                        strong cerrar prendas de denim  
                        | , pueden ser lisos o adquirir diseños de la marca y, como su nombre lo indica, se incorporan a la prenda mediante el golpe de una remachadora.
                    li.py-4
                      .lista-ol--cuadro__vineta.color-primario.px-4.py-4.mx-5.rounded-circle.fs-4.fw-bold
                        span 3
                      p.mb-0
                        strong Remaches:  
                        | este elemento metálico se usa para dar fijación, resistencia y presentación a <strong>prendas en denim</strong>, especialmente jeans, estos remaches pueden ser lisos o contener diseños personalizados según la marca.

      .py-3.py-md-4(titulo="Cremalleras" :imagen="images[2]" :numero="numbers[2]")
        .cajon.color-primario.p-4.mb-4
          p Una cremallera es un sistema de cierre formado por dientes metálicos o espirales sintéticas que cierran completamente una prenda al trabarse entre sí. Las cremalleras están especialmente indicadas para abrir y cerrar una prenda, y se presentan en modelos y longitudes variados, que se cosen a las prendas siguiendo diversos métodos. El tipo de cremallera seleccionada dependerá de su ubicación en la prenda, del tipo de tejido y del diseño de esta. 
        p.mb-5 En la actualidad, las cremalleras se presentan en diferentes modelos indicados para todo tipo de tejidos y gramajes. Aquí se muestran una cremallera invisible con una cinta especial para tejidos finos, una cremallera con brillantes de imitación, cremalleras especiales para artículos de marroquinería y una cremallera con cinta de blonda, especial para prendas de encaje (Amaden, 2016). 
        SliderCajas(columns="col-lg-3")
          .row(titulo="Cremallera convencional").justify-content-center
            .col-lg-8.mb-5.mb-lg-0
              p.mb-4 Se abre por su extremo superior y presenta un tope inferior. Este tipo de cremallera está disponible en varias longitudes y se utiliza para modelos de prendas que requieran una apertura superior, manteniendo su parte inferior cerrada. 
                br
                br
                | Esta cremallera de acuerdo con Ameaden (2016) se utiliza en: 
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right
                  | Aberturas de faldas y escotes.
                li
                  i.fas.fa-angle-right
                  | Pantalones largos y cortos.
                li
                  i.fas.fa-angle-right
                  | Bocamangas ajustadas.
                li
                  i.fas.fa-angle-right
                  | Costuras centrales de capuchas; la cremallera, al abrirse, permite convertirlas en un cuello.
                li
                  i.fas.fa-angle-right
                  | Bocamangas de mangas largas.
                li
                  i.fas.fa-angle-right
                  | Colocada horizontalmente, en detalles de diseño como los bolsillos.
                li
                  i.fas.fa-angle-right
                  | Colocada horizontalmente, en detalles de diseño como los bolsillos.
            .col-lg-4
              .titulo-sexto.color-acento-contenido.mb-3
                span.text-small Figura 6. Cremallera convencional.
              figure.mb-5
                img(src="@/assets/curso/tema2-imagen20.svg")
                figcaption  Nota. Tomada de Amaden (2016). 

          .row(titulo="Cremallera invisible").justify-content-center
            .col-lg-8.mb-5.mb-lg-0
              p.mb-4 De acuerdo con Ameaden (2016), se parece a la convencional, pero los dientes se sustituyen por espirales de nailon que permiten ocultarla en la costura. Se cose utilizando un pie especial y se usa: 
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right
                  | Cuando la aplicación de cualquier otra cremallera estropearía el acabado idóneo de la prenda, como en el caso del género de punto mate, el terciopelo o el encaje.
                li
                  i.fas.fa-angle-right
                  | Para crear una línea de costura pulcra y continua. 
                li
                  i.fas.fa-angle-right
                  | En las bocamangas ajustadas.
            .col-lg-4
              .titulo-sexto.color-acento-contenido.mb-3
                span.text-small Figura 7. Cremallera invisible.
              figure.mb-5
                img(src="@/assets/curso/tema2-imagen21.svg")
                figcaption  Nota. Tomada de Amaden (2016).

          .row(titulo="Cremallera con separador").justify-content-center
            .col-lg-8.mb-5.mb-lg-0
              p.mb-4 De acuerdo con Amaden (2016), puede abrirse por ambos extremos y encontrarse con espirales ligeras o con dientes de alta resistencia. Se cose a la prenda como un elemento decorativo, dejando a la vista la cinta y los dientes, o bien se oculta bajo los pliegues de la costura. La cremallera con separador se presenta en varias longitudes y se utiliza:
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right
                  | Cuando dos secciones de una prenda deben separarse por completo, como en el caso de una chaqueta, un abrigo o una parka.
                li
                  i.fas.fa-angle-right
                  | En capuchas de quita y pon.
                li
                  i.fas.fa-angle-right
                  | Para separar el forro de abrigos y chaquetas con forro de quita y pon.
                li
                  i.fas.fa-angle-right
                  | En monos y leggings para esquiar.
                li
                  i.fas.fa-angle-right
                  | Como detalle de diseño.
            .col-lg-4
              .titulo-sexto.color-acento-contenido.mb-3
                span.text-small Figura 8. Cremallera con separador.
              figure.mb-5
                img(src="@/assets/curso/tema2-imagen22.svg")
                figcaption  Nota. Tomada de Amaden (2016).

      .py-3.py-md-4(titulo="Marquilla garra" :imagen="images[3]" :numero="numbers[3]")
        figure.mb-5
          img(src="@/assets/curso/tema2-imagen23.jpg")
        p.mb-0 Esta marquilla se coloca en la pretina de pantalones informales; también se le puede encontrar tejida, en cuero sintético o bordada. Es usada por lo general en jeans.

      .py-3.py-md-4(titulo="Velcro" :imagen="images[4]" :numero="numbers[4]")
        figure.mb-5
          img(src="@/assets/curso/tema2-imagen24.jpg")
        p.mb-0 También es conocida como cinta de gancho y bucle o, comercialmente, como velcro. Es un tipo de cierre por contacto debido a que una de las bandas está compuesta de una cinta de pequeños ganchos que al entrar en contacto con la cinta opuesta genera el cierre, ya que la segunda cara tiene unos bucles a los que los ganchos se adhieren. Por eso su nombre de cierre de contacto; para separarlas, basta con tirar de ellas.

    .row.justify-content-center
      .col-10
        hr.especial
        .row.justify-content-center
          .col-lg-auto
            .ribbon
              .text.fw-bold CONCLUSIÓN
              .px-5.py-4(style="background-color: #D6EBFB; margin-top: -30px") 
                p.mb-0.mt-3 Se presentaron los insumos más utilizados en confección de la clasificación «ropa exterior», donde sus prendas básicas son la camisa y el pantalón, chaqueta y jeans. Entre esos insumos se encuentran los hilos, botones, cierres y cremalleras, marquilla garra y el velcro. 
    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Insumos para ropa interior y deportiva


    p.mb-5 La ropa interior y deportiva ofrece al usuario variedad de diseños y, por lo tanto, los insumos pueden cambiar, a través de sus diferentes texturas, acabados, medidas y accesorios.

    .row.justify-content-center.mb-5
      .col-lg-6.other-title.text-white.py-2.text-center
        p.mb-0.fw-bold Confección de ropa interior y deportiva

    h4.titulo-cuarto.mb-5 · Insumos para panti
    p.mb-5 El material principal para confeccionar panties son: tejidos de punto en algodón, nylon, poliéster, con fibras elastómeras encajes, blondas lycras, mallas, tul, puede encontrar o realizar variados diseños donde cambian los insumos.

    .row.mb-5 
      .col-lg-3.mb-5.mb-lg-0
        div
          figure
            img(src="@/assets/curso/tema2-imagen25.jpg")
          p.mb-0
            strong Blondas licradas
            br
            br
            | Es un textil realizado con hilo de  seda mezclado con licra para caída y elasticidad.
      .col-lg-3.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema2-imagen26.jpg")
        p.mb-0
          strong Malla
          br
          br
          | Es un textil con entramado de hilos  elaborados  en lycras  de ajuste al cuerpo.
      .col-lg-3.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/tema2-imagen27.jpg")
        p.mb-0
          strong Tela tull
          br
          br
          | Es un textil con entramando poco denso y de alta transparencia, con elasticidad y estructura abierta, que la hace flexible.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema2-imagen28.jpg")
        p.mb-0
          strong Encaje
          br
          br
          | Tejido ornamental, con bordados y mezclado con fibras elásticas  cuando se va a usar con ropa interior.

    h4.titulo-cuarto.mb-5 · Insumos para brasier
    .row.justify-content-center.mb-5
      .col-lg-12
        SliderCajas(columns="col-lg-2")
          .row(titulo="Corchetes de ajuste").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen29.jpg")
            .col-lg-6
              p.mb-0 Los corchetes se presentan en una amplia variedad de tamaños y modelos. El tipo de corchete que a usar vendrá determinado por el tipo de cierre y su posición en la prenda, como el extremo superior del cierre de cremallera de una cinturilla o de un escote. El corchete universal (de presilla plana o curva) es el más utilizado, aunque también existe un corchete especial para cinturillas. 
          .row(titulo="Abrochadura").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen30.jpg")
            .col-lg-6
              p.mb-0 Insumo utilizado en la confección de ropa interior femenina y/o masculina con la finalidad de sujetar la prenda alrededor de la espalda o en el tórax en el caso de las fajas. Se fabrican abrochaduras de 1, 2, 3 y 4 posiciones con ganchos y hembras en acero o recubiertos, en diversidad de colores y estampados siguiendo las tendencias o el uso.
          .row(titulo="Hebillas").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen31.jpg")
            .col-lg-6
              p.mb-0 Una hebilla (del latín vulgar «fibella», diminutivo de «fibŭla») es una pieza de poliéster, metal o plástico, otros materiales que funciona como cierre o sujeción. Son muy utilizadas en ropa interior y exterior para las cargaderas con el propósito de dar o quitar medida y son complemento habitual en cinturones, correas y herrajes.
          .row(titulo="Elástico").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen32.jpg")
            .col-lg-6
              p.mb-0 Son tiras  elásticas reforzadas para sujetar, sostener y/o levantar, utilizados especialmente en las cargaderas de brasier, corpiños, bodies, etc. 
          .row(titulo="Elásticos encarterados ").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen33.jpg")
            .col-lg-6
              p.mb-0 Estos son utilizados en ropa interior femenina para pierna y cintura de panti; base, sisa-espalda y espalda de brasier. Se pegan en máquina resortadora y se asientan en sesgadora o se pegan en zz3. Se caracterizan por tener mora en uno de sus lados.
          .row(titulo="Aplique").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen34.jpg")
            .col-lg-6
              p.mb-0 Pieza bordada o tejida con diseño previamente definido que se pega mediante calor o con hilo para decorar la prenda de vestir. 
          .row(titulo="Moño").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen35.jpg")
            .col-lg-6
              p.mb-0 Elemento elaborado en cinta en diferentes diseños, y tamaños que complementan la decoración de prendas de ropa interior. 
          .row(titulo="Encajes").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen36.jpg")
            .col-lg-6
              p.mb-0 Son cintas elásticas de diferentes anchos y variedad de diseños que se usan para decorar o ser parte de los extremos de prendas de uso interior. 
          .row(titulo="Copas").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen37.jpg")
            .col-lg-6
              p.mb-0 Este insumo es construido a partir de materiales sintéticos, el cual recibe una profundidad según la talla. También pueden variar según la necesidad del diseño. 
          .row(titulo="Varillas").justify-content-center
            .col-lg-4.mb-5.mb-lg-0
              figure
                img(src="@/assets/curso/tema2-imagen38.jpg")
            .col-lg-6
              p.mb-0 Este elemento es utilizado para ofrecer mayor soporte, realza la figura y permite mejorar la silueta. Se puede encontrar en diferentes materiales: plástico, metálico, de silicona, y pueden cambiar según el tipo de copa a utilizar. 

    h4.titulo-cuarto.mb-5 · Insumos para bóxer y ropa deportiva

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="Elásticos expuestos").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Son cintas elásticas para utilizadas para la confección de bóxer masculino y cachetero femenino. Son suaves al tacto con acabado esmerilado. Su ancho está entre 2 y 5 cm, dependiendo de si es para adulto, juvenil, junior o infantil. Se pueden encontrar bordados o estampados.
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen39.jpg")
        .row(titulo="Elásticos en crochet").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Estos elásticos son de tejido rústico y utilizados para encarterar (esconder). Se colocan en la cintura y pierna de  pantaloncillos, pantalonetas y sudaderas masculinas y femeninas de todas las edades,  por lo cual presentan diferentes anchos según las necesidades del producto. Se pegan  en máquina fileteadora/ sobrehiladora con guía ceromax y se asientan en recubridora o resortadora. 
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen40.jpg")
        .row(titulo="Cordones y terminales").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Este tipo de insumo se usa para ajustar y sujetar. Tienen diferentes diseños y densidades, se pueden agregar terminales de diferentes tipos que dan toque personalizado a las prendas. 
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen41.jpg")
        .row(titulo="Reata").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Cuerda, tira o faja tejida que sirve para sujetar y complementar algunos diseños en el área de la confección. 
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen42.jpg")
        .row(titulo="Sesgo").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Tira de tela que cortada al hilo, al ancho, al sesgo o a través de la tela sirve para terminar cuellos, puños, sisas, hacer barras en prendas deportivas e interiores. Se utiliza como amarre de prendas, planos y prehormados con alma son algunas de las opciones que se tiene como diseñador para elegir este insumo. Definir la forma correcta de cortarlo depende del diseño de la prenda y el lugar donde se va a colocar, además debe tener presente el tipo de tela.
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen43.jpg")
        .row(titulo="Cuello tejido").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Juego de juegos y puños, tejidos tradicional para la camiseta tipo polo, realizado en poliéster o algodón; puede tener aplicaciones de diseño con líneas o diseños básicos. 
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen44.jpg")
        .row(titulo="Hiladilla").justify-content-center.py-5
          .col-lg-7
            p.mb-0 Insumo generalmente elaborado en algodón 100%, generalmente crudo, teñido, estampado o bordado que se utiliza como adorno en las prendas para cubrir costuras de cuello y terminar aberturas de teloví (abertura de los bajos de las prendas).
          .col-lg-3
            figure
              img(src="@/assets/curso/tema2-imagen45.jpg")

    .row.justify-content-center
      .col-10
        hr.especial
        .row.justify-content-center
          .col-lg-auto
            .ribbon
              .text.fw-bold CONCLUSIÓN
              .px-5.py-4(style="background-color: #D6EBFB; margin-top: -30px") 
                p.mb-0.mt-3 Se presentaron los insumos más utilizados en la confección de la clasificación «ropa interior y deportiva», donde se evidenciaron los distintos elementos más usados para pantis, brasier, bóxer y ropa deportiva en general.

    Separador
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
