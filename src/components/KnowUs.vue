<template>
    <section class="KnowUs">
        <h1>Descubra a Campari</h1>
        <p class="descriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi tortor, luctus eu consectetur at, molestie vitae nulla. </p>
        <img :src="image" alt="Drink com Campari" />
    </section>
</template>

<script>
export default{
    name: 'KnowUs',
    props: {
        image: String
    }
}
</script>

<style scoped>
.KnowUs img{
    width: 100%;
}
</style>