
module.exports = {
    
    randomString(length) {

        const chars = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
        var result = '';
        for (var i = 0; i < length; i++)
            result += (chars[Math.round(Math.random() * (chars.length - 1))])
    
        return result
    },
    
    randomHex(length) {
        const chars = [ 'a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
        var result = '';
        for (var i = 0; i < length; i++)
            result += (chars[Math.round(Math.random() * (chars.length - 1))])
    
        return result
    },

    log(message) {
        console.log(`\x1b[35m[Tectum]\x1b[33m[${new Date().toLocaleString()}]\x1b[0m ${message}`)
    },
}