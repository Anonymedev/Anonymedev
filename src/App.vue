<template>
    <div id="render">
        <div>
            <CookiesComponent v-if="!areCookiesAccepted" @accepted="areCookiesAccepted=true" />

            <NavbarComponent />

            <div class="router-view">
                <!-- <div v-if="isLoading" class="loader-box vc">
                    <LoadingComponent />
                </div> -->

                <!-- <div v-else> -->
                    <RouterView />
                <!-- </div> -->
            </div>
        </div>

        <FooterComponent />
    </div>
</template>

<script setup>
    // import store            from './store/store.js';
    import { ref }          from 'vue';
    import Cookies          from 'js-cookie';

    import LoadingComponent from './components/utils/Loading.vue';
    import CookiesComponent from './components/utils/Cookies.vue';

    import NavbarComponent  from './components/general/Navbar.vue';
    import FooterComponent  from './components/general/Footer.vue';


/* Declarations initiales */

    const areCookiesAccepted = ref(!!Cookies.get().clientId);
    // let isLoading = computed(() => store.state.isLoading);
</script>

<style scoped>
/* Main boxes */


    #render {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }

    .loader-box {
        width: 100vw;
        height: 100vh;
    }

    .router-view {
        margin: 0px 5vw;
    }
</style>