<template>
    <div v-if="product" class="productPage">
    <img :src="product.image" alt="" />
    <h1>{{product.name}}</h1>
    </div>
</template>

<script>
import dataBase from '../../db/db.json';
export default {
    name: "ProductPage",
    props:{
        id: {type: Number, required: true}
    },
    computed:{
        product(){
            return dataBase.products.find(
                (product) => product.id === this.id
            );
        },
        mounted(){
            console.log(this.product())
            
        }
    }
}
</script>

<style scoped>
.productPage {
    text-align: center;
    min-height: 100vh;
    margin-top: 6rem;
}
</style>