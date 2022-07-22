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
        // The idea is simple:
             // pass the props to data() (I had some problems using the props directly)
        getAssets() {
            this.images = this.carouselImgs;
            this.imageActualRendered = this.images[this.imageId];
            this.imageTotalQuantity = this.images.length;
        },
        // So first I need to know the movement, (backward or forward) then I capture it in the method invocation
             // So with a simple counter considering the ID of the image, with the ID of the "space in the carousel"
             // The minimum of the counter is at 0 even, with the maximum based on the number of images
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
    // Before the component is even loaded, it is already necessary to preload the assets
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