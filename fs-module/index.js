console.log('LOG YAZILDI');

console.log(__dirname);
// Prints: /Users/mjr
//console.log(path.dirname(__filename));
// Prints: /Users/mjr

console.log('3 saniye beklenecek!');

setTimeout(()=>{
    console.log('3 saniye geçti!');
}, 3000);