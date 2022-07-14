<template>
    <div class="home">
        <img :src="heroBanner" alt="Hero banner" class="heroBanner" />
        <Classics v-if="productsList" :productsList="productsList"/>
    </div>
</template>

<script>
import Classics from '../components/Classics.vue'
export default {
    name: "HomeView",
    data() {
        return {
            heroBanner: null,
            productsList: null
        };
    },
    methods: {
        async getAssets() {
            const req = await fetch("http://localhost:3000/assets");
            const dataAssets = await req.json();
            this.heroBanner = this.findAssetByName("Hero Banner", dataAssets);
        },
        findAssetByName(assetName, dataAssets) {
            let asset = dataAssets.filter((e) => {
                return e.name == assetName;
            });
            return asset[0].url;
        },
        async getProducts() {
            const req = await fetch("http://localhost:3000/products");
            const dataProducts = await req.json();
            this.productsList = dataProducts;
        }
    },
    mounted() {
        this.getAssets();
        this.getProducts();
    },
    components:{
      Classics
    }
}
</script>


<style>
.heroBanner {
    width: 100%;
}
</style>
