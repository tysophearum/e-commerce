<template>
    <form @submit="submitForm" enctype="multipart/form-data">
      <input type="text" v-model="name" placeholder="Name">
      <input type="text" v-model="price" placeholder="Price">
      <input type="file" ref="fileInput" @change="handleFileChange">
      <button type="submit" class=" bg-gray-200 p-4 rounded-lg">Submit</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        price: '',
        file: null
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Create the form data object
        const formData = new FormData();
        formData.append('name', this.name);
        formData.append('price', this.price);
        formData.append('image', this.file);
  
        // Send the data to the API
        console.log(this.file);
        axios.post('http://localhost:3000/product/', formData, {header: { "content-type": "multipart/form-data" }})
          .then(response => {
            // Handle the API response
            console.log(response.data);
            // Reset the form
            this.name = '';
            this.email = '';
            this.file = null;
            this.$refs.fileInput.value = ''; // Clear the file input value
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      },
      handleFileChange(event) {
        const file = event.target.files[0];
        
        this.file = file;
      }
    }
  };
  </script>
  