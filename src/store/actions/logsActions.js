import axiosConfig from '../../utils/config/axiosConfig.js';


/* Create Log */

const createLogAction = async (logType, url, cookiesAccepted) => {
    try {
        await axiosConfig.post(`/logs`, { logType, url }, { 
            headers: { 
                cookiesAccepted: cookiesAccepted.toString()
            }
        });

    } catch(err) {
        console.error(err);
        return { success: false, error: err }
    }
};


/* Export */

export {
    createLogAction
};