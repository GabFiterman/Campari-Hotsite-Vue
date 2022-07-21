<template>
    <section class="ProductPageSellers">
        <h2>Mostrando lojas com entregas em: </h2>
        <p>Aparecida de Goiânia - Goiás</p>
        <br />
        <!-- <div v-for="product in products" :key="product.id"> -->
        <!-- <h1>Você pode comprar em: </h1> -->
            <div v-for="seller in product.sellers" :key="seller.id">
                <SellerCard 
                    :seller-logo="seller.image" 
                    :seller-name="seller.name" 
                    :seller-price="seller.price"
                    :seller-url="seller.url"
                    class="SellerCard" 
                />
            </div>
        <!-- </div> -->
    </section>
</template>

<script>
import SellerCard from './SellerCard.vue';

export default {
    name: "ProductPageSeller",
    props: {
        product: Object
    },
    components: { SellerCard }
}
</script>

<style scoped>
.ProductPageSellers {
    min-height: 100vh;
    min-width: 60%;
    text-align: center;
}

.ProductPageSellers h2 {
    color: var(--color-brand-main);
    font-weight: bold;
    font-size: 1.25rem;
}

.ProductPageSellers p {
    margin-top: 0.75rem;
    font-weight: bold;
}

.SellerCard {
    margin: 2rem 0;
}
</style>