<template>
    <div>
        <header>
            <!-- O banner principal recebe sua imagem -->
            <Hero :heroBanner="heroBanner" />
        </header>

        <!-- <button @click="oTeste.alerta">{{oTeste.teste}}</button> -->

        <!-- Aqui já inicio todas sections de uma vez -->
        <main>
            <!-- Intro -> Seção destinada à introdução do conteúdo, recebe um vídeo -->
            <Intro class="section" :introVideo="introVideo" />
            
            <!-- Tips -> Seção que recebe uma couriosidade e invoca um carousel, que já deve receber as imagens -->
            <Tips class="section" :carouselImgs="carouselImgs" />
            
            <!-- Classics -> Seção que exibe os produtos com a tag 'classics' -->
            <Classics class="section" />
            
            <!-- Offers -> Seção que exibe os produtos com a tag 'Offers' -->
            <Offers class="section" />
            
            <!-- Seção que exibe um pequeno conteúdo sobre a empresa, deve receber a imagem -->
            <KnowUs class="section" :image="knowUsImage" />
        </main>
        <!-- Footer -> Por ser global, em App.vue -->
    </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Intro from '../components/Intro.vue';
import Tips from '../components/Tips.vue'
import Classics from '../components/Classics.vue';
import Offers from '../components/Offers.vue';
import KnowUs from '../components/KnowUs.vue';
// import Test from '../assets/test.js';
// import ApiConsume from '../components/ApiConsume.js';

export default {
    name: "HomeView",
    data() {
        return {
            productsList: null,
            heroBanner: null,
            introVideo: null,
            knowUsImage: null,
            carouselImgs: null,
            // oTeste: Test
        };
    },
    methods: {
        // Buscando os assets do servidor e atribuindo-os às variáveis em data().
        async getAssets() {
            const req = await fetch("http://localhost:3000/assets");
            const dataAssets = await req.json();

            this.heroBanner = this.findAssetByName("Hero Banner", dataAssets);
            this.introVideo = this.findAssetByName("Content Video", dataAssets);
            this.knowUsImage = this.findAssetByName("Know Us", dataAssets);
            this.carouselImgs = this.findAssetByName("Carousel", dataAssets);
        },
        // Filtro para os assets, recebe a base de dados, (vinda da api) e o name do asset
        // necessário, tendo como retorno o acesso à este asset.
        findAssetByName(assetName, dataAssets) {
            let asset = dataAssets.filter((e) => {
                return e.name == assetName;
            });
            // console.log(`---------------------- Asset ${assetName} ----------------------`);
            // console.log(asset[0].url)
            return asset[0].url;
        },
        // oTeste(){
        //     return this.Teste;
        // }
    },
    // Antes mesmo da página ser carregada, já é necessário pré-carregar os assets
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
