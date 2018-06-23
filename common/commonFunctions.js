let responseObj = (status, message, payload) => {
    return {
        status: status,
        message: message,
        data: payload
    }
}

module.exports = responseObj;