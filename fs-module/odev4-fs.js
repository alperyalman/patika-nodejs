const fs = require('fs');

// Create
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf8', (err) => {
    if(err) console.log(err);
    console.log('Dosya başarılı bir şekilde oluşturuldu!');
});

//Read
fs.readFile('employees.json','utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('Dosya başarılı bir şekilde okundu!');
});

// Update
/* fs.appendFile('employees.json','\n{"name": "Employee 2 Name", "salary": 4000}', (err) => {
    if(err) console.log(err);
    console.log('Dosyaya ekleme yapıldı!');
}); */

// Delete 
/* fs.unlink('employees.json', (err)=>{
    if(err) console.log(err);
    console.log('Dosya silindi'); 
}); */