<script setup lang="ts">
</script>

<template>
    <div class="form-group flex justify-between w-full border border-zinc-400 px-3 py-3 rounded-lg space-x-4">
        <div class="icon text-zinc-500">
            <slot name="icon"></slot>
        </div>
        <div class="input w-full">
            <slot name="form-input"></slot>
        </div>
    </div>
</template>

<style scoped>
</style>