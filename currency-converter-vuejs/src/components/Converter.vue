<template>
  <div class="conversor">
    <h2>{{ currencyA }} para {{ currencyB }}</h2>
    <input
      type="number"
      min="0.01"
      step="0.01"
      v-model="currencyA_value"
      v-bind:placeholder="currencyA"
    />
    <input type="button" value="Conversor" v-on:click="converter" />
    <h2>{{ currencyB_value }}</h2>
  </div>
</template>

<script>
export default {
  name: "Converter",
  props: {
    currencyA: String,
    currencyB: String,
  },
  data() {
    return {
      currencyA_value: "",
      currencyB_value: 0,
    };
  },
  methods: {
    converter() {
      const from_to = `${this.currencyA}_${this.currencyB}`;
      const url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=2e2282f1c1fd83c440ff`;

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const cotacao = json[from_to];

          this.currencyB_value = (
            cotacao * parseFloat(this.currencyA_value)
          ).toFixed(2);
        });
    },
  },
};
</script>

<style scoped>
</style>
