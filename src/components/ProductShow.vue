<template>
    <!-- It will only be created if the 'products' variable is already filled -->
    <section v-if="products" class="ProductShow">

        <!-- Starts a rendering loop based on the products array
     - chosen by anyone called this component -->
        <div v-for="(product, index) in products" :key="index">

            <!-- Then start a ProductCard passing the information individually
             of product -->
            <ProductCard 
                :product-image="product.image" 
                :product-name="product.name" 
                :product-size="product.size"
                :product-last-name="product.lastName" 
                :product-price="product.price" 
                :product-id="product.id"
                :product-slug="product.slug" 
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
        tags: String
    },
    methods: {

        // Request the API to list the products and associate the products variable
        // the products already filtered based on the tag the invoker requested
        async getProducts() {
            const req = await fetch("http://localhost:3000/products");
            const dataProducts = await req.json();
            this.products = this.filterProductByTag(this.tags, dataProducts);
        },

        // The product filter
        filterProductByTag(tag, products) {
            let filteredProducts = [];

            // I decided to use the switch framework for its maintenance simplicity,
            // and because it was the solution I found, I believe it would be ideal to automate this part a little more
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
                    
            }
            return filteredProducts;
        }
    },

    // As soon as the page is loaded, already capture the products
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