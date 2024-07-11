const data = require('./mockData')

function getUserInforById(users, userId, callback) {
    setTimeout(() => {
        const user = users.find((item, index) => {
            if (item.id === userId) {
                return item;
            }
        })
        if (user) {
            callback(null, user);
        } else {
            console.warn("User not found");
            new Error("User not found")
        }
    }, 2000)
}

function userCapitalize(users, callback) {
    setTimeout(() => {
        const userCapitalize = {...users , name:users.name.toUpperCase()}
        callback(null,userCapitalize)
    }, 1500)

}
getUserInforById(data,1,(err,result)=>{
    if(err){
        console.error("Error!" + err)
        return;
    }else{
        userCapitalize(result , (err,result)=>{
            if(err){
                console.error(err)
                return;
            }else{
                console.log("Procesed data users", 
                    result
                );
            }
        })
    }
})