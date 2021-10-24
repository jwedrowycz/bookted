<template>
    <div class="grid grid-cols-6 mx-auto mt-28">
        <div class="col-span-6 lg:col-start-3 lg:col-span-2 w-full bg-white">
            <AuthLoginForm />
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'guest',


}
</script>