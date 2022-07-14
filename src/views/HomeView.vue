<template>
    <div>
        <Hero :heroBanner="heroBanner" />

        <main>
            <Intro class="section" :introVideo="introVideo" />
            <Tips class="section" :carouselImgs="carouselImgs"/>
            <Classics class="section" />
            <Offers class="section" />
            <KnowUs class="section" :image="knowUsImage" />
        </main>

    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Intro from '../components/Intro.vue';
import Classics from '../components/Classics.vue';
import Tips from '../components/Tips.vue'
import Offers from '../components/Offers.vue';
import KnowUs from '../components/KnowUs.vue';

export default {
    name: "HomeView",
    data() {
        return {
            productsList: null,
            heroBanner: null,
            introVideo: null,
            knowUsImage: null,
            carouselImgs: null
        };
    },
    methods: {
        async getAssets() {
            const req = await fetch("http://localhost:3000/assets");
            const dataAssets = await req.json();
            this.heroBanner = this.findAssetByName("Hero Banner", dataAssets);
            this.introVideo = this.findAssetByName("Content Video", dataAssets);
            this.knowUsImage = this.findAssetByName("Know Us", dataAssets);
            this.carouselImgs = this.findAssetByName("Carousel", dataAssets);
        },
        findAssetByName(assetName, dataAssets) {
            let asset = dataAssets.filter((e) => {
                return e.name == assetName;
            });
            console.log(`---------------------- Asset ${assetName} ----------------------`);
            console.log(asset[0].url)
            return asset[0].url;
        }
    },
    beforeMount() {
        this.getAssets();
    },
    components: {
    Hero,
    Intro,
    Classics,
    Tips,
    Offers,
    KnowUs
}
}
</script>


<style>
.section {
    padding: var(--padding-section);
}


.descriptionText{
    width: 50%;
    margin: var(--margin-H-main);
    font-size: 1.1rem;
    font-weight: 200;
    color: var(--color-font-grey);
    line-height: 1.8rem;
}
</style>
