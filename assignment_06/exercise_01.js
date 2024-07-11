const data = require('./mockData')

function getUserInforById(users, userId, callback) {
    setTimeout(() => {
        const user = users.find(item=>item.id === userId)
        if (user) {
            callback(user);
        } else {
            console.warn("User not found");
            new Error("User not found")
        }
    }, 2000)
}
getUserInforById(data, 1, r => console.log(r))

function userCapitalize(users, callback) {
    setTimeout(() => {
        const userCapitalize = { ...users, name: users.name.toUpperCase() }
        callback(userCapitalize)
    }, 1500)

}
getUserInforById(data, 1, (result) => {
    userCapitalize(result, (result) => {

        console.log("Procesed data users",
            result
        );

    })
})