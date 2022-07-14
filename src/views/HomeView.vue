<template>
    <div class="home">
        <img :src="heroBanner" alt="Hero banner" class="heroBanner" />
        <main class="homeMain">
            <section class="introArea">
                <Intro v-if="productsList" :productsList="productsList" :introVideo="introVideo"/>
            </section>
            <section class="classicArea">
                <Classics v-if="productsList" :productsList="productsList" />
            </section>
        </main>
        
    </div>
</template>

<script>
import Classics from '../components/Classics.vue';
import Intro from '../components/Intro.vue';
export default {
    name: "HomeView",
    data() {
        return {
            productsList: null,
            heroBanner: null,
            introVideo: null
        };
    },
    methods: {
        async getAssets() {
            const req = await fetch("http://localhost:3000/assets");
            const dataAssets = await req.json();
            this.heroBanner = this.findAssetByName("Hero Banner", dataAssets);
            this.introVideo = this.findAssetByName("Content Video", dataAssets)
        },
        findAssetByName(assetName, dataAssets) {
            let asset = dataAssets.filter((e) => {
                return e.name == assetName;
            });
            // console.log('Consegui este asset: ');
            // console.log(asset[0].url)
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
      Classics,
      Intro
    }
}
</script>


<style>

.heroBanner {
    width: 100%;
}

.homeMain{
}

.introArea{
    margin: 0;
}
.classicArea{
    margin: 0;
    background-color: var(--color-highlight-grey);
    border: 1px solid #041e4230;
    border-radius: 1rem;
    padding-bottom: 2rem;
}
</style>
