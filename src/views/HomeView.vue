<template>
    <div>
        <header>
            <!-- The main banner receives your image -->
            <Hero 
                :propsSection="dataHero" 
            />
        </header>

        <!-- Here I start all sections at once -->
        <main v-if="dataProducts && dataOffers">

            <!-- Intro -> Section intended for the introduction of content, receives a video -->
            <Intro class="section" 
                :propsProducts="dataProducts"
                :propsSection="dataIntro"
            />

            <!-- Tips -> Section that receives a curiosity and invokes a carousel, which should already receive the images -->
            <Tips class="section" 
                :carouselImgs="carouselImgs" 
                :propsSection="dataTips"
            />

            <!-- Classics -> Section that displays products tagged 'classics' -->
            <Classics class="section" 
                :propsProducts="dataProducts"
                :propsSection="dataClassics"
            />

            <!-- Offers -> Section that displays products tagged 'Offers' -->
            <Offers class="section" 
                :propsProducts="dataProducts"
                :propsSection="dataOffers"
            />

            <!-- Section that displays a small content about the company, must receive the image -->
            <KnowUs class="section" 
                :propsSection="dataKnowUs"
            />
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
            dataHero: null,
            dataProducts: null,
            dataIntro: null,
            dataTips: null,
            dataClassics: null,
            dataOffers: null,
            dataKnowUs: null,
        };
    },
    methods: {

        // Fetching server assets and assigning them to variables in data().
        async getProducts() {
            const req = await fetch("http://localhost:3000/products");
            const data = await req.json();

            this.dataProducts = data;
        },

        
        // Fetching server assets and assigning them to variables in data().
        async getSections() {
            const req = await fetch("http://localhost:3000/sections");
            const data = await req.json();

            this.dataHero = findSectionByName("Hero", data);
            this.dataIntro = findSectionByName("Intro", data);
            this.dataTips = findSectionByName("Tips", data);
            this.dataClassics = findSectionByName("Classics", data);
            this.dataOffers = findSectionByName("Offers", data);
            this.dataKnowUs = findSectionByName("KnowUs", data);

            // Filter for the assets, receive the database, (from the api) and the name of the
            // section is necessary, returning access to this asset.
            function findSectionByName(sectionName, dataSection) {
                let section = dataSection.filter((e) => {
                    return e.sectionName == sectionName;
                })
                // This is because the method returns an array, and as unique names are used, 
                // I return the first position [0]
                return section[0];
            }

        },
        
        // Just call all types of requests
        apiRequests() {
            this.getSections();
            this.getProducts();
        }
    },
    // Even before the page is loaded, it is already necessary to preload the assets
    beforeMount() {
        this.apiRequests();
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
