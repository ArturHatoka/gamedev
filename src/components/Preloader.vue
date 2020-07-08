<template>
    <div class="preloader"/>
</template>

<script>
export default {
    name: "Preloader"
}
</script>

<style scoped lang="sass">
.preloader
    position: relative
    display: flex
    width: 100%
    height: 100%
    align-items: center
    justify-content: center
    &:before
        content: ''
        display: flex
        width: 10vw
        height: 10vw
        border-left: 5px solid red
        border-top: 10px solid red
        border-right: 5px solid red
        border-radius: 50%
        animation: rotate360 2s linear infinite
    &:after
        position: absolute
        content: ''
        display: flex
        width: 10vw
        height: 10vw
        border-left: 5px solid blue
        border-top: 10px solid blue
        border-right: 5px solid blue
        border-radius: 50%
        animation: rotate720 5s linear infinite
@keyframes rotate360
    from
        transform: rotate(0deg)
    to
        transform: rotate(360deg)
@keyframes rotate720
    from
        transform: rotate(0deg)
    to
        transform: rotate(-360deg)
</style>
