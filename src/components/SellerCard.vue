<template>
  <div class="sellerCard">
    <img :src="sellerLogo" :alt="`Logo ${sellerName}`">
    <div class="sellerCard__info">
      <h1>{{sellerName}}</h1>
      <h2>{{sellerPrice}}</h2>
    </div>
    <button><a :href="sellerUrl">Comprar</a></button>
  </div>
</template>

<script>
import dataBase from '../../db/db.json';

export default {
  name: 'SellerCard',
  data() {
    return {
      logo: dataBase.sellers[1].image 
    }
  },
  props: {
    sellerLogo: String,
    sellerName: String,
    sellerPrice: String,
    sellerUrl: String,
    sellerLogo: String
  }
}
</script>

<style scoped>
.sellerCard {
  border: var(--border-main);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sellerCard img {
  max-height: 3rem;
  max-width: 4rem;
}
.sellerCard__info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
.sellerCard__info h1{
  font-size: 1.15rem;
  font-weight: normal;
}

.sellerCard__info h2{
  font-size: 0.95rem;
  color: var(--color-font-main);
  font-weight: bold;
  margin-top: 0.5rem;
}

.sellerCard button{
  font-size: 1rem;
}
</style>