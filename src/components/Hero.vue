<template>
    <img :src="propsSection.assets[0]" alt="Hero banner" class="heroBanner" />
</template>

<script>
export default{
    name: 'Hero',
    props: {
        propsSection: String
    }
}
</script>

<style scoped>
.heroBanner {
    width: 100%;
    margin: 0;
}
</style>