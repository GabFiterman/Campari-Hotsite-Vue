<template>
    <section class="Offers">
        <h1>Ofertas</h1>
         <!-- Call the container that will mount the product cards,
         passing which category (based on 'tag') product will be shown -->
        <ProductShow :tags="tag" />
    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';

export default {
    name: "Offers",
    data() {
        return {
            tag: 'offer'
        }
    },
    components: { ProductShow }
}
</script>

<style scoped>
.Offers h1{
    margin: var(--margin-H-main);
}
</style>