const app = Vue.createApp({
    data() {
        return {
            name: "",
            input_name: ""
        };
    },
    methods: {
        submitForm() {
            this.name = this.input_name;
        }
    }
});

app.mount("#app");
