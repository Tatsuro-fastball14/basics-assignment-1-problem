const app = Vue.createApp({
  data() {
    return {
      name: 'Taturo',
      age: 32,
      imageurl:'https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=559b00bc9c&attid=0.1&permmsgid=msg-f:1712463901104320482&th=17c3e4d85400afe2&view=att&disp=safe&saddbat=ANGjdJ9G7LexWukUMNxg3tr74HhdxKjsuR4HnhhZ6WssQGkZggQrwsKBm_dwwkd3nayJHuHUMk7cbtaOgq1dDRVVffUipsBbnikbtbzKpsiteHBUp6CEzEIn5_7eYGYKMGTMB8tt3iZ2c8TlWYrHcgtBv5yDddkDNBuvoC6h8-ylCuL1C5dD-0fbVPK3TIWbNGyffTodZsZGjgyarG27Fa9mxUxtHV45ZOQiGqdVO4Ggbbctv7gGjMrCoYBFpXhV0bOsyOHKVYnn3kSYHG59x7hq3AosONzYvgSAcVBJYrFBBWhLoRneg6wVlAETWcXvgMzSh6ZFzdIL1SQRzcvQUXtvXC6kbICsKg6g_C9dAMvXMctN8MI59AHoZbUjBNBRQ6ETfAqrNrnXoDBBYpLsgoSjC41C7p2xZ6bz8prGgA-Y1XAlutU9Cgopp4SVAl0YJQR3l3hrlmkhshGWdxoIhEQAX654_QUJYKU4Vm4906B7GtAvfEmTmfagNYl2XR3a1NJugXvhbjmd1XAyVdsFse2_nBojWsBIjJrX6CxHkf89pFyXA1GW-ApcwNI8oKEBd8R9-'
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