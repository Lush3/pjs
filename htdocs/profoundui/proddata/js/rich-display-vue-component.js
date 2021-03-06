
Vue.component('rich-display', {
    props: ['path', 'screen', 'data', 'className'],
    template: '<div style="position: relative;"></div>',
    mounted() {
      this.renderRichDisplay();
    },
    updated() {
      this.renderRichDisplay();
    },
    methods: {
      renderRichDisplay() {
        var div = this.$el;
        var config = {
          "container": div,
          "method": "GET",
          "setDims": true
        };
        if (typeof this.path !== "string") return;
        config.path = this.path;
        config.screen = this.screen;
        config.data = this.data;
        if (typeof config.data !== "object") config.data = {};
        if (this.className) div.className = this.className;
        else div.className = "";
        pui.show(config);
      }
    }
  });