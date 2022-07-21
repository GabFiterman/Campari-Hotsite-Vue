<template>
    <!-- Irá ser criado apenas se a variável 'products' já estiver preenchida -->
    <section v-if="products" class="ProductShow">

    <!-- Inicia um loop de renderização baseado no array de products 
    - escolhidos por quem chamou este componente -->
        <div v-for="(product, index) in products" :key="index">

            <!-- Então inicia um ProductCard passando individualmente as informações
            do produto -->
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
        productsList: Array,
        tags: String
    },
    methods: {
        // Requisita à API a listagem de produtos e associa a variável products
        // os produtos já filtrados com base na tag que o invocador solicitou
        async getProducts() {
            const req = await fetch("http://localhost:3000/products");
            const dataProducts = await req.json();
            this.products = this.filterProductByTag(this.tags, dataProducts);
        },
        // O filtro dos produtos
        filterProductByTag(tag, products) {
            let filteredProducts = [];

            // Decidi usar a estrutura switch por sua simplicidade de manutenção,
            // e por ter sido a forma que encontrei de solução, acredito que seria ideal automatizar um pouco mais esta parte
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
                    console.log('Não identificamos uma tag válida');
            }
            return filteredProducts;
        }
    },
    // Assim que a página for carregada, já capturar os produtos
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