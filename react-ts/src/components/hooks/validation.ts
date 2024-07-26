export const isEmailValidation = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
export const isValidationPassword = (password: string) => {
    if(password.length >= 8){
        return 'Strong password'
    }else{
        return 'Weak password'
    }
};


