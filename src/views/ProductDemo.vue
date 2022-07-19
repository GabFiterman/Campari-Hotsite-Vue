<template>
    <div v-if="products" class="productDemo">
        <h1>All Products</h1>
        <div class="products">
            <router-link 
                v-for="product in products" 
                :key="product.id"
                :to="{
                    name: 'ProductPage',
                    params: {
                        id: product.id,
                        slug: product.slug
                    }
                }">

                <h2>Nome: {{ product.name }}</h2>
                <p>id: {{product.id}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import dataBase from '../../db/db.json'
export default {
    name: "product-demo",
    data(){
        return{
            products: dataBase.products
        }
    }
}
</script>

<style scoped>
.productDemo {
    text-align: center;
    min-height: 100vh;
    margin-top: 6rem;
}

a{
    margin: 2rem;
}

</style>