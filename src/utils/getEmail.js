//create function to retrieve email for mailto link

const getEmail = () => {
    let prepend = 'daltpettusinquiries';
    let symbol = '@';
    let provider = 'gmail';
    let dot = '.';
    let append = 'com';
    return [prepend, symbol, provider, dot, append];
}

export default getEmail;