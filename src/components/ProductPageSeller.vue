<template>
    <section class="ProductPageSellers">
        <h2>Mostrando lojas com entregas em: </h2>
        <p>Aparecida de Goiânia - Goiás</p>
        <br />
        <SellerCard :seller-logo="sellerLogo" :seller-name="sellerName" :seller-price="sellerPrice"
            :seller-url="sellerUrl" class="SellerCard" />
    </section>
</template>

<script>
import SellerCard from './SellerCard.vue';

export default {
    name: "ProductPageSeller",
    data() {
        return {
            sellers: [],
            sellerLogo: null,
            sellerName: null,
            sellerPrice: null,
            sellerUrl: null
        }
    },
    methods: {
        async getSellers() {
            const requ = await fetch("http://localhost:3000/sellers");
            const dataSellers = await requ.json();

            // console.log(dataSellers);
            this.sellers = this.filterSellers(dataSellers, 2)
            // return dataProdutcs.find((product) => product.id === id);
        },
        filterSellers(dataSellers, id) {
            // deve retornar os sellers que atendem tal produto (dataSellers[todos].products{todos}.(name, id, ean) )
            let sellers = [];
            let test = null;
            sellers = dataSellers.filter((seller) => {
                console.log(seller.name);
                console.log(seller.products);
                console.log('\n ---------------------------- \n');
                test = seller.products.filter((product) => {
                    product.id == 1
                });
                console.log('TEST')
                console.log(test)
            })
            // console.log(dataSellers.products);
        }
    },
    mounted() {
        this.getSellers();
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