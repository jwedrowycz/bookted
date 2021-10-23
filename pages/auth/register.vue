<template>
   <AuthRegisterForm />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {

  middleware: 'auth',
}
  
  
</script>