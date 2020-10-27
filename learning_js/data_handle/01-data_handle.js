const Data = require('../data/allData.json');

const data = Data.data;
console.dir(data);
// result = [];
// k_list = ['date','confirmed','confirmed_acc','death','death_acc','released','released_acc','active']
// piece = {};

// for(let r in data)
//     for(let k in data[r]){
//         if(k=='date'){
//             piece[k] = data[r][k];
//         } else{
//             if(piece[k]===undefined){
//                 piece[k]=0;
//             }else{
//                 piece[k] = +data[r][k];
//             }
//         }
//     }
// }

