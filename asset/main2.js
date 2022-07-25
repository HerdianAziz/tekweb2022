let apiUrl = "http://api.iangalery.my.id/"
let app = Vue.createApp({
    data() {
      return {
        biodata: {},
        markdown: null
      }
    },
    methods: {
      getArticleData() {
        axios
          .get(apiUrl+"biodata/1")
          .then((res) => {
            this.biodata = res.data;
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error);s
          });
      }
    },
    beforeMount() {
      this.getArticleData()
    }
  })
  app.mount('#app');