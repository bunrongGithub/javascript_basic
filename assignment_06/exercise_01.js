const { error } = require('console');
const data = require('./mockData')

function getUserId(users, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(item => item.id === id);
            return user ? resolve(user) : reject("Null");
        }, 2000)
    })
}
function capitalize(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user) {
                const userCapitalize = { ...user, name: user.name.toUpperCase() }
                resolve(userCapitalize)
            } else {
                reject("canot get user!")
            }
        }, 1500);
    });
}

const updateUserById = (id , {name,age}) => {
    return new Promise((resolve, rejects) => {
        try {
            const userId = data.findIndex(find => find.id === id);
            if (userId !== -1){
                data[userId].name = name;
                data[userId].age = age
                resolve(data[userId])
            }
                //resolve(data.filter(item => (item.id === userId)));
        } catch (error) {
            rejects("cannt find user wiht id: " + id)
        }
    })
}
updateUserById(1,{name:"sook",age:20}).then( r => console.log(r))
/** 
getUserId(data, 1).then(async res => {
    await capitalize(res).then(res => console.log(res))
}).catch(err => error(err))
*/



//getUserId(data,0).then(res=>console.log(res)).catch(err=>console.error("User not found" ,err))

// function getUserInforById(users, userId, callback) {
//     setTimeout(() => {
//         const user = users.find(item => item.id === userId)
//         if (user) {
//             callback(user);
//         } else {
//             console.warn("User not found");
//             new Error("User not found")
//         }
//     }, 2000)
// }
// getUserInforById(data, 1, r => console.log(r))

// function userCapitalize(users, callback) {
//     setTimeout(() => {
//         const userCapitalize = { ...users, name: users.name.toUpperCase() }
//         callback(userCapitalize)
//     }, 1500)

// }
// getUserInforById(data, 1, (result) => {
//     userCapitalize(result, (result) => {
//         console.log("Procesed data users\n\n",
//             result
//         );
//     })
// })
