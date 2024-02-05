<template>
    <div>
        <Card>
            <template #content>
                <div class="form">
                    <div class="input-group">
                        <label for="productId">Id</label>
                        <InputText id="productId" v-model="productObj.id" type="text" placeholder="Product Id" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>
                    <div class="input-group">
                        <label for="title">Title</label>
                        <InputText id="title" v-model="productObj.title" type="text" placeholder="Tittle" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>
                    <div class="input-group">
                        <label for="price">Price</label>
                        <InputText id="price" v-model="productObj.price" type="text" placeholder="Price" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>
                    <div class="input-group">
                        <label for="category">Category</label>
                        <InputText id="category" v-model="productObj.category" type="text" placeholder="Category" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>
                    <div class="input-group">
                        <label for="description">Description</label>
                        <Editor v-model="productObj.description" editorStyle="height: 200px" id="description" />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>
                    <div class="input-group">
                        <label for="imageUrl">Image</label>
                        <InputText id="imageUrl" v-model="productObj.image" type="text" placeholder="Image" />
                        <img class="product-img" :src="productObj.image"  />
                        <!-- <small id="username-help">Enter your username to reset your password.</small> -->
                    </div>
                </div>
                
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute({});
const productId = route.params.productId;
const productObj = reactive({})
onBeforeMount(async() =>{
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const product = await response.json()
    Object.assign(productObj, product);
})

</script>

<style lang="css" >
.input-group{
    display: inherit;
    flex-direction: inherit;
    gap: 0.5rem;
}
.form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.product-img{
    display: inline-block;
    width: 200px;
    object-fit: cover;
    margin-top: 2rem;
}
</style>