<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Acabados y terminaciones
    
    .row.justify-content-center.mb-5(data-aos="fade-in")
      .col-lg-auto
        p.mb-0 Son procesos que se desarrollan para evaluar, realizar seguimiento al proceso de confección y dar por terminado la producción de una prenda de vestir.
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="fade-in")
      .row(titulo="Control de calidad").px-5
        .col-12
          p.mb-5 La calidad es un área transversal que no debe perder visión de ella en ningún momento para elaborar un producto que cumpla las exigencias del cliente: en materiales, insumos, procesos de ensamble o confección, operaciones manuales y empaque. En cada una de las empresas habrá puntos de revisión que canalizan el cumplimiento de los requisitos realizados al proveedor.
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-primario
                h5.mb-4 Inspección de insumos
                p.mb-0 En las empresas de confección, este proceso corresponde a la revisión de la calidad de los insumos y suministros que se usarán en la confección de las prendas. Para realizar dicha inspección se desarrolla un formato en el que se registran las especificaciones de los diferentes insumos, según la prenda a desarrollar y la línea de producción, y se revisa si se cumplen con los mínimos de calidad exigidos para garantizar la calidad de la prenda a confeccionar. El siguiente video muestra cómo es este proceso.
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/HoLZv-WxqyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      .row(titulo="Manualidades y aplicaciones")
        .col-12
          p.mb-5 Son operaciones manuales que se realizan como complementos y dan valor a las prendas. Estas operaciones no son realizadas por máquinas industriales y requieren la habilidad y destreza de una persona en cada producto; por ejemplo: pegar canutillos, pedrería, estampados, apliques con diseño, pegar broches, entre otros.
          .row.justify-content-center
            .col-10
              figure
                img(src="@/assets/curso/tema4-imagen1.png")
      .row(titulo="Pulido")
        .col-12
          p.mb-5 En el proceso de confección y bordado quedan excesos de hilo y tiquetes que se usan para marcar las diferentes prendas, estos sobrantes se deben de retirar para garantizar la excelente presentación de la prenda tanto interna como externamente.
          .row.justify-content-center
            .col-10
              figure
                img(src="@/assets/curso/tema4-imagen2.png")
      .row(titulo="Planchado")
        .col-12
          p.mb-5 Este proceso se puede realizar de manera temporal o permanente con vapor o seco en las diferentes prendas. Es importante seleccionar la temperatura adecuada según el material, y la mejor máquina que dé rendimiento si se trabaja en una empresa de mediano o gran tamaño. Dentro de los tipos de plancha se encuentran:
          .row.justify-content-center
            .col-lg-10
              .row
                .col-lg-6.mb-5.mb-lg-0
                  figure.mb-4
                    img(src="@/assets/curso/tema4-imagen3.png")
                  p.mb-0
                    strong Prensa:  
                    | este tipo de equipo realiza el planchado de prenses y solapas de tal manera que se formen de manera permanente o temporal.
                .col-lg-6
                  figure.mb-4
                    img(src="@/assets/curso/tema4-imagen4.png")
                  p.mb-0
                    strong Mesa de planchado industrial a vapor:  
                    | este tipo de mesa polifuncional permite realizar planchado en diferentes puntos de la prenda, incluso en puntos circulares como mangas de camisa y botas de pantalones.
    
    .row.align-items-center.box-center-color
      .col-lg-2.mb-4.mb-lg-0
        figure.mb-4
          img(src="@/assets/curso/tema4-imagen5.svg")
      .col-lg-10
        p.mb-0 La comprensión y segmentación de las partes de las prendas, tipologías, la elaboración de dibujos planos, consolidación y diligenciamiento de información técnica, diferenciación de textiles, comprensión de fibras, la titulación de los hilos y demás, hacen parte de los conocimientos y destrezas que son necesarias para el proceso de construcción de las prendas de vestir.

</template>

<script>
export default {
  name: 'Tema4',
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
