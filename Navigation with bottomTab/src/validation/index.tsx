export const checkNameValidation = (name: string): boolean => 
{
    return name.length >= 5
}

export const checkEmailValidation = (email: string): boolean => 
{
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

export const checkPasswordValidation = (password: string): boolean => 
{
    return password.length >= 8
}

export const checkIsEmpty = (value: string): boolean =>
{
    return value.length > 0
}