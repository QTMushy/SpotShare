// Desc: Configuration file for the firebase project

const conf = {
    fbApiKey: process.env.REACT_APP_APIKEY,
    fbAuthDomain: process.env.REACT_APP_AUTHDOMAIN,
    fbProjectId: process.env.REACT_APP_PROJECTID,
    fbStorageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    fbMessagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    fbAppId: process.env.REACT_APP_APPID
}

export default conf;