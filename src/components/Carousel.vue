<template>
    <div v-show="images" class="Carousel">
        <p @click="changeImage('previous')" class="Carousel__Controler Carousel__Controler-previous" >&lt;</p>
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
        getAssets() {
            this.images = this.carouselImgs;
            this.imageActualRendered = this.images[this.imageId];
            this.imageTotalQuantity = this.images.length;
        },
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
    beforeMount() {
        this.getAssets();
    }
}
</script>

<style scoped>
.Carousel{
    display: flex;
    align-items: center;
}
.Carousel img {
    width: 110%;
}

.Carousel__Controler{
    z-index: 1;
    font-size: 4rem;    
    text-shadow: 0px 0px 6px #000;
    color: white;
    transition: all 0.5s;
}

.Carousel__Controler:hover{
    transform: scale(1.25);
    cursor: pointer;
}

.Carousel__Controler-previous{
    margin-right: -4rem;
}

.Carousel__Controler-next{
    margin-left: -4rem;
}
</style>