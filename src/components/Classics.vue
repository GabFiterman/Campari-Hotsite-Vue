<template>
    <section v-if="products">
        <h1 @click="teste">Classics</h1>
        <ProductShow :products-list="products" :tags="tag"/>
    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';
export default {
    name: "Classics",
    data() {
        return {
            products: null,
            tag: 'classic'
        };
    },
    props: {
        productsList: Array
    },
    methods: {
        getProducts() {
            this.products = this.productsList;
        }
    },
    mounted() {
        this.getProducts();
    },
    beforeUpdate() {
        console.log('Classics')
        console.log(this.products);
        this.getProducts();
    },
    components: { ProductShow }
}
</script>

<style scoped>
</style>