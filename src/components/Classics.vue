<template>
    <section v-if="products">
        <div class="classicsTitle">
            <h1 @click="teste">Para aproveitar um clássico: Negroni</h1>
            <p>30ml de Campari | 30ml de Gin | 30ml de Vermute Doce | Coloque todos os ingredientes diretamente em copo
                baixo cheio de gelo. </p>
        </div>
        <div class="classicsProducts">
            <ProductShow :products-list="products" :tags="tag" />
        </div>
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
.classicsTitle {
    margin: 0 8%;
    padding: 2rem 0;
}

.classicsTitle h1{
    margin-bottom: 4vh;
}

.classicsProducts{
    margin: 4vh 6vw 0 6vw;
}

section {}
</style>