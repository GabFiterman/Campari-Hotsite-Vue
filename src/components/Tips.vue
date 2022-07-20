<template>
    <section class="Tips">
        <h1>Para acompanhar seu drink</h1>
        <!-- Achei interessante a ideia de construir o carousel "na unha" -->
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