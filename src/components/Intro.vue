<template>
    <section class="Intro">
        <h1>Duas metades se completam</h1>
        <p class="descriptionText">Para curtir com os amigos e com a família, Aperol Spritz é perfeito para momentos leves e descomplicados.</p>
        
        <div class="intro__content">
            <iframe 
                class="intro__video"
                :src="videoURL" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <ProductShow :tags="tag" />
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
    props: {
        introVideo: String
    },
    components:{
        ProductShow
    }
}
</script>

<style scoped>

.intro__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--margin-H-main);
}

.intro__video{
    width: 60%;
    height: 60vh;
}
</style>
