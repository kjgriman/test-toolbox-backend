/**
 * Services Home
 * @public
 *
 * @returns {String} Services Home message
 */
exports.servicesHome = async () => {
    try {
        let message = {
            data: 'Welcome to API test choice. please go to de api/v1/docs',
        }
        return message
    } catch (err) {
        throw new Error(err)
    }
}
