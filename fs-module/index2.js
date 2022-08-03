const fs = require('fs');

// Dosya okumak

fs.readFile('password.txt', 'utf8', (err, data)=> {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya Okundu!');
});

// Dosya yazmak

fs.writeFile('example.json','{"name": "Arin", "age": 6}','utf8', (err) => {
    if(err) console.log(err);
    console.log('Dosya başarılı bir şekilde oluşturuldu!');
});


// Dosyaya veri eklemek
fs.appendFile('example.txt','\nKodluyoruz 22222','utf8', (err) => {
    if(err) console.log(err);
    console.log('Dosya başarılı bir şekilde oluşturuldu!');
});

// Dosyadan veri silme 
fs.unlink('example.json', (err)=>{
    if(err) console.log(err);
    console.log('Dosya silindi'); 
});

// Klasörler oluşturmak 
fs.mkdir('uploads/img', {recursive:true}, (err) => {
    if(err) console.log(err);
    console.log('Klasörler oluşturuldu!'); 
});

// Klasörler silmek
fs.rm('uploads', {recursive:true}, (err) => {
    if(err) console.log(err);
    console.log('Klasörler silindi!'); 
});
