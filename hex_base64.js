// Hex to Base64
// 'b5eb2d'
function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null,
      str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
      
    );
}

// Base64 to Hex
// 'test'
function base64ToHex(str) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        let tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex.join(" ");
}

// Demo
let data = 'E6FF00F0';
let d1 = hexToBase64( data );
console.log(d1);
// output: '5v8A8A=='

let d2 = base64ToHex( d1 );
console.log(d2.toUpperCase());
// output: 'E6 FF 00 F0'


//Demo with form

//hex to base64
document.getElementById('btnHex').addEventListener('click', function () {

    let valorInput = document.getElementById('valHex').value
        console.log(hexToBase64(valorInput));
});
//base64 to hex
document.getElementById('btnBase64').addEventListener('click', function () {

    let valorInput = document.getElementById('valHex').value
        console.log(base64ToHex(valorInput));
});
