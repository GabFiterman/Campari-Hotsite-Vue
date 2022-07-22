<template>
    <section class="productCard">
        <img :src="productImage" />
        <div class="productCard__name">
            <h2 v-if="productSize">{{ productName }} {{ productSize }}mL {{ productLastName }}</h2>
            <h2 v-else>{{ productName }} {{ productLastName }}</h2>
        </div>
        <div class="horizontal-divider"></div>
        <div class="productCard__info">
            <div class="productCard__info-price">
                <span>A partir de</span>
                <p>R$ {{ productPrice }}</p>
            </div>
            <div class="vertical-divider"></div>
            <button class="productCard__info-button">
                <!-- Here is called the routing structure, assembling a product page, based on its id -->
            <router-link
                :to="{
                    name: 'ProductPage',
                    params: {
                        id: productId,
                        slug: productSlug,
                        productName: productName
                    }
                }"
            >
            Ver ofertas
            </router-link>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        categoryTag: String,
        productName: String,
        productImage: String,
        productSize: String,
        productLastName: String,
        productPrice: String,
        productId: String,
        productSlug: String
    }
}
</script>

<style scoped>
.productCard {
    align-items: center;
    background-color: var(--color-background);
    border: var(--border-main);
    display: flex;
    flex-direction: column;
    height: 52vh;
    justify-content: flex-start;
    margin: 2vh 0;
    padding-top: 5vh;
    padding: 1vh 1.5vw;
    transition: all 1s;
    width: 16vw;
}

.productCard:hover {
    box-shadow: var(--shadow-box-main);
    cursor: pointer;
}

.productCard img {
    height: 32vh;
    margin-bottom: 1.6vh;
    transition: all 1s;
    width: auto;
}

.productCard img:hover {
    transform: scale(1.05);
}

.productCard__name {
    height: 3rem;
}

.productCard h2 {
    font-size: 1rem;
    font-weight: 350;
    margin-bottom: 1.8vh;
}

.productCard__info {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
}

.productCard__info-price span {
    font-size: 0.75rem;
}

.productCard__info-price p {
    color: var(--color-brand-main);
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 1vw;
}

.productCard__info-button {
    margin-left: 1vw;
}

</style>
