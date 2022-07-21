<template>
    <!-- TODO: add animation to slider -->
    <div v-if="images" class="Carousel">
        <p @click="changeImage('previous')" class="Carousel__Controler Carousel__Controler-previous">&lt;</p>
        <img :src="imageActualRendered" />
        <p @click="changeImage('next')" class="Carousel__Controler Carousel__Controler-next">></p>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            images: [],
            imageActualRendered: null,
            imageTotalQuantity: null,
            imageId: 0
        };
    },
    props: {
        carouselImgs: Array
    },
    methods: {
        // A ideia é simples:
            // passar as props para data() (tive alguns problemas ao usar diretamente as props)
        getAssets() {
            this.images = this.carouselImgs;
            this.imageActualRendered = this.images[this.imageId];
            this.imageTotalQuantity = this.images.length;
        },
        // Então primeiro preciso saber qual o movimento, (trás ou frente) então já capturo na invocação do método
            // Então, com um simples contador considerando a ID da imagem, com a ID do "espaço no carousel"
            // O mínimo do contador é em 0 mesmo, com o máximo baseando-se na quantidade de imagens 
        changeImage(direction) {
            if (direction == 'next') {
                this.imageId++;
                if (this.imageId <= (this.images.length - 1)) {
                    this.imageActualRendered = this.images[this.imageId]
                } else {
                    this.imageId = 0
                    this.imageActualRendered = this.images[this.imageId]
                }
            } else {
                if (this.imageId >= 1) {
                    this.imageId--;
                    this.imageActualRendered = this.images[this.imageId]
                } else {
                    this.imageId = this.images.length - 1;
                    this.imageActualRendered = this.images[this.imageId]
                }
            }
        }
    },
    // Antes mesmo do componente ser carregado, já é necessário pré-carregar os assets
    beforeMount() {
        this.getAssets();
    }
}
</script>

<style scoped>
.Carousel {
    display: flex;
    align-items: center;
}

.Carousel img {
    width: 100%;
    border-radius: 1rem;

}

.Carousel__Controler {
    z-index: 1;
    font-size: 4rem;
    text-shadow: 0px 0px 6px #000;
    color: white;
    transition: all 0.5s;
}

.Carousel__Controler:hover {
    transform: scale(1.25);
    cursor: pointer;
}

.Carousel__Controler-previous {
    margin-right: -4rem;
}

.Carousel__Controler-next {
    margin-left: -4rem;
}
</style>