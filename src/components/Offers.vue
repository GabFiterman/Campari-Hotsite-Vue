<template>
    <section class="Offers" v-if="this.propsProducts && this.propsSection">
        <h1>{{propsSection.title}}</h1>
         <!-- Call the container that will mount the product cards,
         passing which category (based on 'tag') product will be shown -->
        <ProductShow :tags="propsSection.productTag" :propsProducts="propsProducts"/>
    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';

export default {
    name: "Offers",
    props: {
        propsProducts: Array,
        propsSection: Array
    },
    components: { ProductShow }
}
</script>

<style scoped>
.Offers h1{
    margin: var(--margin-H-main);
}
</style>