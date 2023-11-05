<template>
  <div>{{ animatedValue }}</div>
</template>

<script>
import * as TWEEN from '@tweenjs/tween.js';

export default {
  props: {
    value: Number, // Value to animate
    format: String, // Flag for formatting as currency
  },

  data() {
    return {
      animatedValue: 0,
    };
  },

  mounted() {
    const tween = new TWEEN.Tween({ value: 0 })
      .to({ value: this.value }, 2000)
      .onUpdate((object) => {
        switch(this.format) {
            case 'plain':
              this.animatedValue = object.value.toFixed(0);
              break;
            case 'currency':
              this.animatedValue = this.formatMoney(object.value);
              break;
            case 'percent':
              this.animatedValue = this.formatPercent(object.value);
              break;
            case 'decimal':
              this.animatedValue = object.value.toFixed(2);
              break;
          }
      })
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();

    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }

    animate(performance.now());
  },

  methods: {
    formatMoney(val) {
      return `$${val.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    },
    formatPercent(val) {
      return `${val.toFixed(2)}%`
    }
  },

  watch: {
    value(newVal) {
      const tween = new TWEEN.Tween({ value: this.animatedValue })
        .to({ value: newVal }, 2000)
        .onUpdate((object) => {
          switch(this.format) {
            case 'plain':
              this.animatedValue = object.value.toFixed(0);
              break;
            case 'currency':
              this.animatedValue = this.formatMoney(object.value);
              break;
            case 'percent':
              this.animatedValue = this.formatPercent(object.value);
              break;
          }
        })
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
    },
  },
};
</script>
