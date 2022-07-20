<template>
  <div class="StoreCard">
    <img :src="logo" alt="Logo Empresa">
    <div class="StoreCard__info">
      <h1>Mercado Livre - Loja Campari</h1>
      <h2>R$ 134,90</h2>
    </div>
    <button>Comprar</button>
  </div>
</template>

<script>
import dataBase from '../../db/db.json';

export default {
  name: 'StoreCard',
  data() {
    return {
      logo: dataBase.sellers[1].image 
    }
  },
  props: {
    storeLogo: String,
    storeName: String,
    storePrice: String,
    storeUrl: String
  }
}
</script>

<style scoped>
.StoreCard {
  border: var(--border-main);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.StoreCard img {
  max-height: 3.5rem;
  max-width: 6rem;
}
.StoreCard__info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}
.StoreCard__info h1{
  font-size: 1.6rem;
}

.StoreCard__info h2{
  font-size: 1.2rem;
  color: var(--color-font-main);
  font-weight: bold;
  margin-top: 1rem;
}

.StoreCard button{
  font-size: 1.2rem;
}
</style>