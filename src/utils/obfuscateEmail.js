//create function to obfuscate email after contact-link is clicked

const obfuscateEmail = () => {
    const link = document.getElementById('contact-link');
    const email = link.href.replace('mailto:', '');
    let obfuscated = '';

    for (let i = 0; i < email.length; i++) {
        obfuscated += '&#' + email.charCodeAt(i)+ ';';
    }

    link.href = 'mailto:' + obfuscated;
}

export default obfuscateEmail;