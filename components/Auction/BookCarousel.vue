<template>
<div>
    <carousel class="carousel" :per-page="1" :navigate-to="someLocalProperty" :navigationEnabled="true" :paginationActiveColor='"#4c1d95"' :navigationClickTargetSize="12">
        <slide v-for="(image, imageIndex) in images"
            :key="imageIndex"
        >
            <img :src="image" alt="" @click="index = imageIndex" class="object-none h-200 w-full cursor-pointer">
        </slide>
    </carousel>
    <CoolLightBox 
        :items="images" 
        :index="index"
        :closeOnClickOutsideMobile="true"
        :slideshow="false"
        @close="index = null">
    </CoolLightBox>
</div>

</template>


<script>
import { Carousel, Slide } from 'vue-carousel';
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    components: {
        Carousel,
        Slide,
        CoolLightBox
    },
    props: ['images'],
    data () {
        return {
           
            index: null,
        }
    },

    methods: {
    }

}
</script>

<style>


</style>