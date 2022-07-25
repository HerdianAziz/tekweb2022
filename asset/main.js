let apiUrl = "http://api.iangalery.my.id/"
let app = Vue.createApp({
    data() {
      return {
        articles: {},
        biodata: {},
        home: {},
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
        },
        getBiodata() {
          axios
            .get(apiUrl+"biodata/1")
            .then((res) => {
              this.biodata = res.data;
            })
        },
        getHome() {
          axios
            .get(apiUrl+"home/1")
            .then((res) => {
              this.home = res.data;
            })
      }
    },
    beforeMount() {
      this.getArticleData(),
      this.getBiodata(),
      this.getHome()
    }
  })
  app.mount('#app');