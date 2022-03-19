const app = vue.createApp({
  date() {
    return {
      name: 'Taturo',
      age: 32,
      imageurl:'https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A7%E3%83%AB%E3%83%8A%E3%83%B3%E3%83%89%E3%83%BB%E3%82%BF%E3%83%86%E3%82%A3%E3%82%B9%E3%83%BB%E3%82%B8%E3%83%A5%E3%83%8B%E3%82%A2'
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  } 
});


app.mount('#assignment');