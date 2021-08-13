<template lang="pug">
  div
    .row.justify-content-center.mb-4
      .col-12.mb-3(v-for="(elm,index) of elements" :key="'tabs-c-menu-'+elm.id" :class="columns")
        .button-sv.gris.color-acento-botones.p-2(:class="elm.id === selected ? 'active' : ''" @click="selected = elm.id" role="button")
          span {{ elm.titulo }}
    .row.justify-content-center
      .col-12
    
    div(
      v-for="elm of elements"
      :key="'slider-content-'+elm.id"
      v-show="selected === elm.id"
      v-child="elm.elm"
    )

    .hidden-slot
      slot

</template>

<script>
import componentSlotMixins from 'ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'SliderCajas',
  mixins: [componentSlotMixins],
  props: {
    columns: {
      type: String,
      default: 'col-lg-6',
    },
  },
  data: () => ({
    mostrarIndicador: true,
    images: [],
  }),
}
</script>
