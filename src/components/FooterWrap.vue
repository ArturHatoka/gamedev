<template>
    <v-container class="d-flex align-center justify-center">
        <a href="https://github.com/ArturHatoka" class="prof">
            <img class="prof__img" src="https://avatars2.githubusercontent.com/u/46828428?s=460&u=9ff97d4c95a1fd088e9eb0f9f71c598dea5b4d48&v=4" alt="prof">
            Artur Hatoka
        </a>

    </v-container>
</template>

<script>
    export default {
        name: "FooterWrap"
    }
</script>

<style lang="scss" scoped>
    .prof{
        display: flex;
        align-items: center;
        justify-content: center;
        &__img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
</style>
