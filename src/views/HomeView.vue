<template>
    <div>
        <Hero :heroBanner="heroBanner" />

        <main>
            <Intro class="section" :introVideo="introVideo" />
            <Tips class="section tipsArea" />
            <Classics class="section" />
            <Offers class="section" />
        </main>

    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Intro from '../components/Intro.vue';
import Classics from '../components/Classics.vue';
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
        Hero,
        Intro,
        Classics,
        Tips,
        Offers
    }
}
</script>


<style>
.section {
    padding: var(--padding-section);
}

.tipsArea {
    text-align: center;
    background-color: black;
    color: white;
}
</style>
