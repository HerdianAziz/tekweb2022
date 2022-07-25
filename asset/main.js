let apiUrl = "http://api.iangalery.my.id/"
let app = Vue.createApp({
    data() {
      return {
        articles: {},
        markdown: null
      }
    },
    methods: {
      getArticleData() {
        axios
          .get(apiUrl+"article")
          .then((res) => {
            this.articles = res.data;
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticleData()
    }
  })
  app.mount('#app');