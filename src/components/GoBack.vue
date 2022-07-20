<template>
    <router-link class="GoBack" to="/">
            <img :src="image" :alt="description" />
            <a>Produtos</a>
    </router-link>
</template>

<script>
export default {
    name: 'GoBack',
    data() {
        return {
            image: '/BackArrow.png',
            description: 'Go Back Icon'
        }
    },
    methods() {

    }
}
</script>

<style scoped>
.GoBack {
    display: flex;
    align-items: center;
    margin: 4rem 6rem;
    padding: 1rem 2rem;
    max-width: 8vw;
    border-radius: 0.5rem;
    transition: all 0.5s;
}

.GoBack:hover{
    box-shadow: var(--shadow-box-main);
}

.GoBack img {
    height: 1.5rem;
    margin-right: 2rem;
    opacity: 0.5;
}

a{
    color: var(--color-font-grey);
    text-decoration: none;
}


</style>