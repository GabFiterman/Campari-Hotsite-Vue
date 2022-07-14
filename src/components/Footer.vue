<template>
<section class="Footer"> 
    <img :src="footerImage" alt="Logo 2Buy" />
    <div class="vertical-divider"></div>
    <p>Powered by Lett</p>
</section>
</template>

<script>
export default{
    name: 'Footer',
    data(){
        return{
            footerImage: 'https://assets.website-files.com/5ef5fd1a1b020fa0d6e4f1d1/60e6fb212856b149e32e688c_2buy_final_Prancheta_1.png'
        }
    }
}
</script>

<style scoped>
.Footer{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-brand-main);
    padding: 1rem;
    color: white;
    font-size: 0.75rem;
}
.Footer img{
    height: 1.5rem;
    filter: brightness(10);
}

.vertical-divider{
    margin: 0 1rem;
}
</style>