<template>
    <div>
        <header>
            <!-- The main banner receives your image -->
            <Hero :heroBanner="heroBanner" />
        </header>

        <!-- Here I start all sections at once -->
        <main>
            <!-- Intro -> Section intended for the introduction of content, receives a video -->
            <Intro class="section" :introVideo="introVideo" />

            <!-- Tips -> Section that receives a curiosity and invokes a carousel, which should already receive the images -->
            <Tips class="section" :carouselImgs="carouselImgs" />

            <!-- Classics -> Section that displays products tagged 'classics' -->
            <Classics class="section" />

            <!-- Offers -> Section that displays products tagged 'Offers' -->
            <Offers class="section" />

            <!-- Section that displays a small content about the company, must receive the image -->
            <KnowUs class="section" :image="knowUsImage" />
        </main>
        <!-- Footer -> Because it is global, in App.vue -->
    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Intro from '../components/Intro.vue';
import Tips from '../components/Tips.vue'
import Classics from '../components/Classics.vue';
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
            carouselImgs: null,
        };
    },
    methods: {
        // Fetching server assets and assigning them to variables in data().
        async getAssets() {
            const req = await fetch("http://localhost:3000/assets");
            const dataAssets = await req.json();

            this.heroBanner = this.findAssetByName("Hero Banner", dataAssets);
            this.introVideo = this.findAssetByName("Content Video", dataAssets);
            this.knowUsImage = this.findAssetByName("Know Us", dataAssets);
            this.carouselImgs = this.findAssetByName("Carousel", dataAssets);
        },
        // Filter for the assets, receive the database, (from the api) and the name of the asset
        // necessary, returning access to this asset.
        findAssetByName(assetName, dataAssets) {
            let asset = dataAssets.filter((e) => {
                return e.name == assetName;
            });
            // This is because the method returns an array, and as unique names are used, 
            // I return the first position [0]
            return asset[0].url;
        },
    },
    // Even before the page is loaded, it is already necessary to preload the assets
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

.descriptionText {
    width: 50%;
    margin: var(--margin-H-main);
    font-size: 1.1rem;
    font-weight: 200;
    color: var(--color-font-grey);
    line-height: 1.8rem;
}
</style>
