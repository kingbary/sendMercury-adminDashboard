const { FORGOT_PASSWORD } = require("../endpoints")
const { instance } = require("../instance")

export const forgotPassword = (payload) => {
    return instance.post(FORGOT_PASSWORD, payload)
}