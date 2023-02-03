<script lang="ts">
    import Title from "./Title.vue"
    export default {}
</script>

<template>
    <div class="Card mx-5">
        <div class="Card flex justify-between px-5 py-5 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-500 w-96 h-52 max-h-60 rounded-lg text-white"> <!-- hover:from-emerald-700 hover:via-emerald-500 hover:to-emerald-300 -->
            <div class="card-right flex flex-col justify-between w-full">
                <slot name="card-header">sss</slot>
                <slot name="card-body">sss</slot>
                <slot name="card-footer">sss</slot>
            </div>
        </div>
    </div>
</template>

<style>

</style>