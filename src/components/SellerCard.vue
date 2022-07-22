<template>
  <div class="sellerCard">
    <img :src="sellerLogo" :alt="`Logo ${sellerName}`">
    <div class="sellerCard__info">
      <h1>{{ sellerName }}</h1>
      <h2>{{ sellerPrice }}</h2>
    </div>
    <button><a :href="sellerUrl">Comprar</a></button>
  </div>
</template>

<script>

export default {
  name: 'SellerCard',
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
  transition: all 0.5s;
}

.sellerCard:hover{
  box-shadow: var(--shadow-box-main);
}

.sellerCard img {
  max-height: 2rem;
  max-width: 3rem;
  margin-right: 2rem;
}

.sellerCard__info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.sellerCard__info h1 {
  font-size: 1rem;
  font-weight: normal;
}

.sellerCard__info h2 {
  font-size: 0.85rem;
  color: var(--color-font-main);
  font-weight: bold;
  margin-top: 0.5rem;
}

.sellerCard button {
  font-size: 1rem;
  margin-left: 1rem;
}
</style>