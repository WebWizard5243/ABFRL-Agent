const sessions = {};

export function getSessions(sessionId){
    if(!sessions[sessionId]){
        sessions[sessionId] = { 
            profile : {
                gender : "male",
                preferredFit : "slim",
                loyaltyTier : "Gold"
            },
            cart : [],
            lastIntent : null
        };
    }
    return sessions[sessionId];
}