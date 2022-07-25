let apiUrl = "http://api.iangalery.my.id/"
let app = Vue.createApp({
    data() {
      return {
        articles: {},
        biodata: {},
        home: {},
        project: {},
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
        },
        getProject() {
          axios
            .get(apiUrl+"project")
            .then((res) => {
              this.project = res.data;
            })
      }
    },
    beforeMount() {
      this.getArticleData(),
      this.getBiodata(),
      this.getHome(),
      this.getProject()
    }
  })
  app.mount('#app');