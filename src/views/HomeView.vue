<template>
    <div class="home">
        <img :src="heroBanner" alt="Hero banner" class="heroBanner" />

        <main class="homeMain">
            <Intro class="introArea" :introVideo="introVideo" />
            <Tips class="tipsArea" />
            <Classics class="classicArea" />
            <Offers class="offersArea" />
        </main>

    </div>
</template>

<script>
import Classics from '../components/Classics.vue';
import Intro from '../components/Intro.vue';
import Tips from '../components/Tips.vue'
import Offers from '../components/Offers.vue';

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
        }
    },
    mounted() {
        this.getAssets();
    },
    beforeUpdate() {
        this.getAssets();
    },
    components: {
        Intro,
        Classics,
        Tips,
        Offers
    }
}
</script>


<style>
.heroBanner {
    width: 100%;
}

.introArea {
    margin: 0;
}

.tipsArea {
    text-align: center;
    background-color: black;
    color: white;
    padding: 6rem;
    margin: 4rem;
}

.classicArea {
    margin: 0;
    background-color: var(--color-highlight-grey);
    border: 1px solid #041e4230;
    border-radius: 1rem;
    padding-bottom: 2rem;
}

.offersArea {
    /* margin: 2rem  */
}
</style>
