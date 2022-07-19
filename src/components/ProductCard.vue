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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--color-background);
    padding: 1vh 1.5vw;
    height: 52vh;
    width: 16vw;
    border: var(--border-main);
    transition: all 1s;
    margin: 2vh 0;
}

.productCard:hover {
    cursor: pointer;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
}

.productCard img {
    height: 32vh;
    width: auto;
    margin-bottom: 1.6vh;
    transition: all 1s;
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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.productCard__info-price span {
    font-size: 0.75rem;
}

.productCard__info-price p {
    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 1vw;
    color: var(--color-brand-main)
}

.productCard__info-button {
    margin-left: 1vw;
}
</style>
