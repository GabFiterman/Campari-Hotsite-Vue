<template>
    <section class="Intro" v-if="this.propsProducts && this.propsSection">
        <h1>{{this.propsSection.title}}</h1>
        <p class="descriptionText">{{this.propsSection.description}}</p>
        
        <div class="intro__content">
            <iframe 
                class="intro__video"
                :src="this.propsSection.assets[0]" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            
            <ProductShow 
                :tags="propsSection.productTag" 
                :propsProducts="propsProducts" 
            />
            
        </div>
    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';

export default{
    name: 'Intro',
    props: {
        propsProducts: Array,
        propsSection: Array,
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
