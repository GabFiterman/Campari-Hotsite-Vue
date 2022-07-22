<template>
    <section class="Tips">
        <h1>Para acompanhar seu drink</h1>
        <!-- I found the idea of building the carousel "with your own hands" interesting -->
        <Carousel :carouselImgs="carouselImgs" />
    </section>
</template>

<script>
import Carousel from './Carousel.vue';

export default {
    name: "Tips",
    props: {
        carouselImgs: Array
    },
    components: { Carousel }
}
</script>

<style scoped>
.Tips h1 {
    margin: var(--margin-H-main);
}
</style>