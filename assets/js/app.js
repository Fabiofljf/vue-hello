// 1. Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// 2. Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const root = new Vue({
    el: '#root',

    data: {
        text: 'Hello VueJs!',
        img: "",
    },
    methods: {
        generaImg() {
            this.img = "https://picsum.photos/200/300"
        }
    }
})