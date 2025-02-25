<template>
    <div class="hc">
        <div class="loader-box">
            <div class="loader"></div>
        </div>
    </div>
</template>
  
<script setup>
</script>
  
<style scoped>
    .loader-box {
        background-color: var(--secundary-bg-medium);
        border-radius: 1000px;
        width: 55px;
        height: 55px;
        padding: 10px;
    }
    .loader {
        width: 35px;
        height: 35px;
        border: 5px solid;
        border-color: var(--primary-font-medium) transparent;
        border-radius: 50%;
        display: inline-block;
        animation: rotation 0.7s linear infinite;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>