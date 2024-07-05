const password = "12345678";
const checkStrongPassword = (password) =>{
    return password.length >= 8 ? `Strong password` : `Weak password`
}

console.log(checkStrongPassword(password));