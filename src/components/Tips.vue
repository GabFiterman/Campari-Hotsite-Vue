<template>
    <section class="Tips" v-if="this.propsSection">
        <h1>{{propsSection.title}}</h1>

        <!-- I found the idea of building the carousel "with your own hands" interesting -->
        <Carousel :carouselImgs="propsSection.assets" />
    </section>
</template>

<script>
import Carousel from './Carousel.vue';

export default {
    name: "Tips",
    props: {
        propsSection: Array
    },
    components: { Carousel }
}
</script>

<style scoped>
.Tips h1 {
    margin: var(--margin-H-main);
}
</style>