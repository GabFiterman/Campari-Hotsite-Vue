<template>
    <section class="KnowUs" v-if="this.propsSection">
        <h1>{{propsSection.title}}</h1>
        <p class="descriptionText">{{propsSection.description}}</p>
        <img :src="propsSection.assets[0]" alt="Drink com Campari" />
    </section>
</template>

<script>
export default{
    name: 'KnowUs',
    props: {
        propsSection: Array
    }
}
</script>

<style scoped>
.KnowUs img{
    width: 100%;
}
</style>