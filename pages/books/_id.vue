<template>
    <div class="container mt-10 ">
        <div class="grid grid-cols-6 gap-5">
            <div class="col-span-6 lg:col-start-1 lg:col-span-4 p-7 lg:p-10 bg-white  w-full h-full">
                    <carousel class="carousel" :per-page="1" :navigate-to="someLocalProperty" :navigationEnabled="true" :paginationActiveColor='"#4c1d95"' :navigationClickTargetSize="12">
                        <slide v-for="(image, imageIndex) in items"
                            :key="imageIndex"
                        >
                            <img :src="image" alt="" @click="index = imageIndex" class="object-none h-200 w-full cursor-pointer">
                        </slide>
                    </carousel>
                    <CoolLightBox 
                        :items="items" 
                        :index="index"
                        :closeOnClickOutsideMobile="true"
                        :slideshow="false"
                        @close="index = null">
                    </CoolLightBox>

            </div>
            
            <div class="col-span-6 lg:col-start-5 lg:col-span-2 bg-white">
                5-6
            </div>
        </div>
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
    data () {
        return {
            items: [
                 'https://source.unsplash.com/random/600x800',
                'https://source.unsplash.com/random/800x600'
            ],
            index: null,
        }
    },
    methods: {
    }

}
</script>

<style>


</style>