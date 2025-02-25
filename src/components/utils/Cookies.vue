<template>
    <div class="main">
        <div class="screen vc">
            <div class="hc">
                <div :class="!isShowMore?'interface-light':'interface-large'" class="interface">
                    <div class="txt-section">
                        <p><span class="name-app-span">Zouzoual Projects</span> utiliise des cookies nécessaires à son fonctionnement !</p>

                        <p v-if="isShowMore" class="desc">Les cookies nous permettent d’établir des statistiques sur vos habitudes de navigation sur <span class="name-app-span">Zouzoual Projects</span> (<a href="https://zouzoual.fr">zouzoual.fr</a>) et ainsi d'optimiser les futures mises à jour, ou bien d’enregistrer vos préférences afin que vous puissiez les retrouver lors de votre prochain passage. Gardez à l’esprit qu’en aucun cas <a href="https://zouzoual.fr">zouzoual.fr</a> utilisera ces données à des fins commerciales. Bonne visite sur notre site !</p>
                        
                        <button @click="!isShowMore?isShowMore=true:isShowMore=false" class="show-more">{{ !isShowMore?`En savoir plus`:`Repiler les explications` }}</button> 
                    </div>

                    <div class="btn-row">
                        <div class="hc">
                            <button @click="cookiesAccepted()" id="accept-cookies-btn" type="button">Compris 🍪</button>
                        </div>

                        <div class="hc">
                            <button @click="goBack()" id="reject-cookies-btn" class="hc" type="button">Ou sortir du site</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { ref }      from 'vue';


/* Definitions initiales */


    const store      = useStore();
    const emit       = defineEmits(['accepted']);
    let   isShowMore = ref(false);


/* METHODES : buttons */


    const cookiesAccepted = async () => {
        await store.dispatch('createLog', { logType: 'navigation', cookiesAccepted: true });
        emit('accepted');
    };

    const goBack = () => {
        if(window.history.length>1) window.history.back();
        else window.location.href = "https://google.com";
    };
</script>

<style scoped>
/* Sub containers */


    .main {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 5;
    }
    .screen {
        height: 100vh;
        width: 100vw;
        position: fixed;
    }
    
    .interface {
        background-color: #7ab4e3;
        border-radius: 10px;
        padding: 35px 30px;
    }
    .interface-light {
        width: clamp(280px, 40%, 400px);
    }
    .interface-large {
        width: clamp(330px, 40%, 600px);
    }


/* Generals */


    * {
        color: rgb(26, 26, 26);
        transition: transform 0.1s, background-color 0.1s;
    }

    p {
        font-size: 15px;
    }

    button {
        cursor: pointer;
    }

    .name-app-span {
        font-family: 'Paytone One';
    }


/* Top / text section */


    .txt-section {
        text-align: center;
        margin-bottom: 15px;
    }

    .desc {
        margin: 12px 0px 10px 0px;
    }

    .show-more {
        font-size: 14px;
        background-color: transparent;
        border: none;
        text-decoration: underline;
    }


/* Btn row */


    .btn-row {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    #accept-cookies-btn {
        border-radius: 10px;
        border: none;
        background-color: #28378f;
        color: #e0e8ff;
        padding: 10px 60px 12px 60px;
        font-size: 15px;
        margin: 5px;
    }
    #accept-cookies-btn:hover {
        transform: scale(1.05);
        background-color: #273274;
    }

    #reject-cookies-btn {
        background-color: transparent;
        border: none;
        color: #28378f;
        font-weight: bold;
    }
    #reject-cookies-btn:hover {
        text-decoration: underline;
    }
</style>
