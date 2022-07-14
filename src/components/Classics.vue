<template>
    <section class="Classics">
        <div class="classics__text">
            <h1>Para aproveitar um clássico: Negroni</h1>
            <p>30ml de Campari | 30ml de Gin | 30ml de Vermute Doce | Coloque todos os ingredientes diretamente em copo
                baixo cheio de gelo. </p>
        </div>
        <ProductShow :tags="tag" />
    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';
export default {
    name: "Classics",
    data() {
        return {
            tag: 'classic'
        };
    },
    components: { ProductShow }
}
</script>

<style scoped>
.Classics {
    background-color: var(--color-highlight-grey);
    border: var(--border-main);
    border-radius: 1rem;
    margin: var(--margin-H2-main);
}

.classics__text h1 {
    margin: var(--margin-H-main);
}

.classics__text p {
    color: var(--color-font-grey);
    margin: var(--margin-H-main);
}
</style>
