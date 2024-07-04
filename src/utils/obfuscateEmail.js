//create function to obfuscate email after contact-link is clicked

const obfuscateEmail = (targetID) => {
    const link = document.getElementById(targetID);
    const email = link.href.replace('mailto:', '');
    let obfuscated = '';

    for (let i = 0; i < email.length; i++) {
        obfuscated += '&#' + email.charCodeAt(i)+ ';';
    }

    link.href = 'mailto:' + obfuscated;
}

export default obfuscateEmail;