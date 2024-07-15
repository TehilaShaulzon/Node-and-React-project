export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPhoneNumber(phone: string): boolean {
    const phoneRegex = /^\d{9,10}$/; 
    return phoneRegex.test(phone);
}

export function hasMinimumLetters(name: string): boolean {
    const letterRegex = /[a-zA-Z].*[a-zA-Z]/;
    return letterRegex.test(name);
}
export function isValidPassword(password: string): boolean {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasLowerCase = /[a-z]/;
    const hasUpperCase = /[A-Z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < minLength) {
        return false;
    }
    if (!hasNumber.test(password) ||
        !hasLowerCase.test(password) ||
        !hasUpperCase.test(password) ||
        !hasSpecialChar.test(password)) {
        return false;
    }
    return true;
}
