import { createLogAction } from './actions/logsActions.js';
import { createStore }     from 'vuex';

const store = createStore({

/* State */

    state() {
        return {
            testData: { },
        };
    },

/* Mutations */

    mutations: {

        /* Test */
        getTests(state, data) { 
            state.bumpsData.bumps.push(data);
        }
    },

/* Actions */

    actions: {

        /* Logs */
        async createLog({ commit }, { logType, url, cookiesAccepted }) {
            await createLogAction(logType, url, cookiesAccepted);
        }
    }
});

export default store;