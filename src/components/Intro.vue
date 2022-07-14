<template>
    <section class="Intro">
        <h1>Duas metades se completam</h1>
        <p>Para curtir com os amigos e com a família, Aperol Spritz é perfeito para momentos leves e descomplicados.</p>
        
        <div class="introContent">
            <iframe 
                class="introVideo"
                src="https://www.youtube.com/embed/Kz6WnrHOuv0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <ProductShow :products-list="productsList" :tags="tag" />
        </div>

    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';
export default{
    name: 'Intro',
    data(){
        return{
            videoURL: 'https://www.youtube.com/embed/Kz6WnrHOuv0',
            tag: 'highlight'
        }
    },
    components:{
        ProductShow
    },
    props: {
        productsList: Array,
        introVideo: String
    },
    methods: {
        processaUrl(){
            this.videoURL = this.introVideo;
        }
    },
    mounted(){
        this.processaUrl();
    },
    beforeUpdate(){
        this.processaUrl();
    }
}
</script>

<style scoped>
.Intro{
    margin: 4% 8%;
}
.Intro p{
    width: 50%;
    margin-top: 1.2rem;
    font-size: 1.1rem;
    font-weight: 100;
    color: var(--color-font-grey);
    line-height: 1.8rem;
}

.introContent{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
}

.introVideo{
    width: 60%;
    height: 60vh;
}
</style>