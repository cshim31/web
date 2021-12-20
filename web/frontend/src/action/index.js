export const getMetaData = () => {
    const metadata = require('../meta/metadata.json');
    
    return ({ type:'metadata', payload: { ...metadata }});
};