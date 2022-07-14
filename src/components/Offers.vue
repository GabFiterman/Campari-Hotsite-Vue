<template>
    <section class="Offers">
        <h1>Ofertas</h1>
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
    props: {
        productsList: Array
    },
    components: { ProductShow }
}
</script>

<style scoped>
.Offers h1{
    margin: var(--margin-H-main);
}
</style>