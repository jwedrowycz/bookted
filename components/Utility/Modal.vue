<template>
    <div>
        <div class="fixed overflow-y-auto h-full w-full inset-0 justify-center items-center z-50 flex">
            <div class="relative mx-auto w-1/4 flex flex-col">
                <div class="bg-white text-gray-900 w-full p-5">
                    <div class="absolute top-0 right-0 -m-5">
                        <button class="bg-gray-300 hover:bg-red-200 transition-all text-white rounded-full p-2" @click="$emit('closeModal')">
                            <img class="w-4 h-4" src="~/assets/images/close.svg" alt="Closing modal icon">
                        </button>
                    </div>
                    <div class="flex flex-col">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute z-40 inset-0 opacity-50 bg-black">
            
        </div>
    </div>
</template>
