<template>
<section class="ProductPageStores">
    <h2>Mostrando lojas com entregas em: </h2>
    <p>Aparecida de Goiânia - Goiás</p>
    <br />
    <StoreCard class="StoreCard" />
    <StoreCard class="StoreCard" />
    <StoreCard class="StoreCard" />
</section>
</template>

<script>
import StoreCard from './StoreCard.vue';
export default{
    name: "ProductPageStore",
    components: { StoreCard }
}
</script>

<style scoped>
.ProductPageStores{
    min-height: 100vh;
    min-width: 60%;
    text-align: center;
}

.ProductPageStores h2{
    color: var(--color-brand-main);
    font-weight: bold;
    font-size: 1.25rem;
}
.ProductPageStores p{
    margin-top: 0.75rem;
    font-weight: bold;
}

.StoreCard{
    margin: 2rem 0;
}
</style>