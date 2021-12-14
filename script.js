const pust = [];

for(let i = 1; i < Infinity; i++) {
    var about = prompt('Введите команду');
    var arr = about.split(', ')

    if(arr[0] == 'add') {
     pust.push(arr[1]);
     console.log(pust);  
    }else if ( arr[0] == 'del') {
        pust.shift(0);
        console.log(pust);
     } else if (about == 'stop') {
         break;
     }

}



