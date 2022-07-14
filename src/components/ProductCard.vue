<template>
    <section>
        <div class="productCard">
            <img :src="productImage" />
            <div id="productInfo">
                <h2 v-if="productSize">{{ productName }} {{ productSize }}mL {{ productLastName }}</h2>
                <h2 v-else>{{ productName }} {{ productLastName }}</h2>
                <div class="horizontal-divider"></div>
                <div class="productContoller">
                    <div class="productPrice">
                        <span>A partir de</span>
                        <p>R$ {{ productPrice }}</p>
                    </div>
                    <div class="vertical-divider"></div>
                    <button class="btnCard">Ver ofertas</button>
                </div>
            </div>
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
        productPrice: String
    }
}
</script>

<style scoped>
.horizontal-divider {
    border-top: solid 1px var(--color-light-grey);
    width: 100%;
}

.vertical-divider {
    border-left: solid 1px var(--color-light-grey);
    min-height: 3rem;
}

/* TODO: Finalizar CSS do card de produto enquanto há apenas 1 produto */
.productCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 18vw;
    height: 60vh;
    padding: 1rem;
    border: solid 1px var(--color-light-grey);
    transition: all 1s;
}

.productCard:hover {
    cursor: pointer;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
}

.productCard img {
    /* width: 10rem; */
    height: 35vh;
    margin-bottom: 2rem;
    transition: all 1s;
}

.productCard img:hover {
    transform: scale(1.05);
}

.productCard h2 {
    font-size: 1.1rem;
    font-weight: 350;
    margin-bottom: 1.5rem;
}

.productContoller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
}

.productPrice span {
    font-size: 0.75rem;
}

.productPrice p {
    font-size: 1.3rem;
    font-weight: bold;
}
</style>
