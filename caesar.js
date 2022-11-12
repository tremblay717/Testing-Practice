const caesar = function (message, key) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let cryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        if (message[i].toUpperCase() != message[i].toLowerCase()) {
            const index = alphabet.indexOf(message[i]);
            let newIndex = index + key;
            if (newIndex > 25) {
                newIndex = newIndex - alphabet.length;
            }
            cryptedMessage += alphabet[newIndex];
        } else {
            cryptedMessage += message[i];
        }
    }
    return cryptedMessage;
}

// Do not edit below this line
module.exports = caesar;