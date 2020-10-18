<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      v-model="formData.name"
      class="q-mb-md"
      outlined
      label="Name"
    />
    <q-input
      v-model="formData.email"
      class="q-mb-md"
      outlined
      label="Email"
      type="email"
    />
    <q-input
      v-model="formData.password"
      class="q-mb-md"
      outlined
      label="Password"
      type="password"
    />
    <div class="row">
      <q-space />
      <q-btn color="primary" :label="tab" type="submit"/>
    </div>
  </q-form>
</template>
<script>
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
      submitForm(){
          if (this.tab == 'login') {
              console.log('login')
          } else {
              console.log('register')
          }
      }
  }
};
</script>
