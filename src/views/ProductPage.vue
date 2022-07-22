<template>
    <!-- Page that should be called by the product card link -->

    <!-- Fixed link to redirect to Home -->
    <GoBack />

    <!-- Ensuring that it will load correctly after capturing the data -->
    <div v-if="products" class="ProductPage">

        <div class="ProductPage__Info">
            <img :src="products.image" alt="" />
            <h1>{{ products.name }}</h1>
            <p>{{ products.description }}</p>
        </div>

        <div v-if="products">
            <ProductPageSeller :product="products" />
        </div>

    </div>
</template>

<script>
import GoBack from '../components/GoBack.vue';
import ProductPageSeller from '../components/ProductPageSeller.vue';


export default {
    name: "ProductPage",
    data() {
        return {
            products: null
        }
    },
    props: {
        // mandatory property to receive the id of the product in question
        id: { type: Number, required: true }
    },
    methods: {
        async getProducts() {
            const req = await fetch("http://localhost:3000/products");
            const dataProducts = await req.json();

            this.products = this.filterProductById(this.id, dataProducts);
        },
        filterProductById(id, dataProdutcs) {
            return dataProdutcs.find((product) => product.id === id);
        }
    },
    components: {
        GoBack,
        ProductPageSeller
    },
    beforeMount() {
        this.getProducts();
    }
}
</script>

<style scoped>
.ProductPage {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 16vw;
    padding-bottom: 12vh;
}

.ProductPage__Info {
    padding: 2rem;
    margin-right: 4rem;
    border: var(--border-main);
}

.ProductPage__Info img {
    width: 15rem;
    transition: all 1s;
}

.ProductPage__Info img:hover{
    cursor: pointer;
    transform: scale(1.25);
}

.ProductPage__Info h1 {
    font-size: 1.6rem;
    margin-top: 2rem;
}

.ProductPage__Info p {
    margin-top: 2rem;
    width: 20vw;
    text-align: center;
    line-height: 1.5rem;
}
</style>