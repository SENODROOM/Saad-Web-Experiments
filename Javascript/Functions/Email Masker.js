function maskEmail(email) {
    let atIndex = email.indexOf('@');
    let username = email.slice(0, atIndex);
    let domain = email.slice(atIndex);
    if (username.length <= 2) {
        return username[0] + '*'.repeat(username.length - 2) + username[username.length - 1] + domain;
    } else {
        return username[0] + '*'.repeat(username.length - 2) + username[username.length - 1] + domain;
    }
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));
