<template>
    <GoBack />
    <div v-if="product" class="ProductPage">
        <div class="ProductPage__Info">
            <img :src="product.image" alt="" />
            <h1>{{ product.name }}</h1>
            <p>{{product.description}}</p>
        </div>
        <ProductPageStores />
    </div>
</template>

<script>
import dataBase from '../../db/db.json';
import GoBack from '../components/GoBack.vue';
import ProductPageStores from '../components/ProductPageStores.vue';


export default {
    name: "ProductPage",
    props: {
        id: { type: Number, required: true }
    },
    computed: {
        product() {
            return dataBase.products.find((product) => product.id === this.id);
        },
        mounted() {
            console.log(this.product());
        }
    },
    components: {
        GoBack,
        ProductPageStores
    }
}
</script>

<style scoped>
.ProductPage {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10vw;
}

.ProductPage__Info{
    padding: 2rem;
    border: var(--border-main);
}

.ProductPage__Info img{
    width: 20rem;
}

.ProductPage__Info h1{
    font-size: 1.6rem;
    margin-top: 2rem;
}

.ProductPage__Info p{
    margin-top: 2rem;
    width: 20vw;
    text-align: justify;
}
</style>