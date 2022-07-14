<template>
    <img :src="heroBanner" alt="Hero banner" class="heroBanner" />
</template>

<script>
export default{
    name: 'Hero',
    props: {
        heroBanner: String
    }
}
</script>

<style scoped>
.heroBanner {
    width: 100%;
    margin: 0;
}
</style>