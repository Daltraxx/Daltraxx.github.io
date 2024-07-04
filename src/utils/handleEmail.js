//click event for adding email to href to activate mailto then obfuscate the email
import getEmail from "./getEmail";
import obfuscateEmail from "./obfuscateEmail";

const handleEmail = ({ target }) => {
    const email = getEmail().join('');
    console.log(target.id);
    target.href = 'mailto:' + email;
    setTimeout(obfuscateEmail, 5, target.id);
}

export default handleEmail;