<template>
    <section v-if="products" class="ProductShow">
        <div v-for="(product, index) in products" :key="index">
            <ProductCard 
                :product-image="product.image" 
                :product-name="product.name" 
                :product-size="product.size"
                :product-last-name="product.lastName" 
                :product-price="product.price" 
            />
        </div>
    </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
    name: 'ProductShow',
    data() {
        return {
            productTag: null,
            products: null,
            classicProducts: [],
            highLightProducts: []
        }
    },
    props: {
        productsList: Array,
        tags: String
    },
    methods: {
        async getProducts() {
            const req = await fetch("http://localhost:3000/products");
            const dataProducts = await req.json();
            this.products = dataProducts;
            this.attachProducts();
        },
        attachProducts() {
            this.products = this.filterProductByTag(this.tags, this.products);
        },
        filterProductByTag(tag, products) {
            let filteredProducts = [];

            switch (tag) {
                case 'highlight':
                    filteredProducts = products.filter((e) => {
                        return e.tags.highlight == true
                    });
                    break;
                case 'classic':
                    filteredProducts = products.filter((e) => {
                        return e.tags.classic == true
                    });
                    break;
                case 'offer':
                    filteredProducts = products.filter((e) => {
                        return e.tags.offer == true
                    });
                default:
                    console.log('Não identificamos uma tag válida')
            }

            console.log(`----------------- Filtered ${tag} products -----------------`);
            console.log(filteredProducts)
            return filteredProducts;
        }
    },
    mounted() {
        this.getProducts();
    },
    components: {
        ProductCard
    }
}
</script>

<style scoped>
.ProductShow {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>