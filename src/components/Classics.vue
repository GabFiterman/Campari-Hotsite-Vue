<template>
    <section class="Classics" v-if="this.propsSection && this.propsProducts">
        <div class="classics__text">
            <h1>{{propsSection.title}}</h1>
            <p>{{propsSection.description}}</p>
        </div>
        <!-- Call the container that will mount the product cards,
         passing which category (based on 'tag') product will be shown -->  
        <ProductShow 
            :propsProducts="propsProducts"
            :tags="this.propsSection.productTag"
        />
    </section>
</template>

<script>
import ProductShow from './ProductShow.vue';

export default {
    name: "Classics",
    props:{
        propsProducts: Array,
        propsSection: Array
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
