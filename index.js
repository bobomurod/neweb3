var Web3 = require('web3');   //создали класс из библиотеки, заведомо установленной изначально с помощью  npm

//console.log(Web3);   //раскоментируйте для уточнения насколько правильно все подключилось или определилось 
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/B0QFpfZKeuLFhhW3zZeu"));  //создали экземпляр класса Web3 с параметрами по определению сети (в данном случаи Rinkeby) и назвали его web3 (не путать с Web3)

console.log(web3.version);  //так можем узнать версию подключенной и унаследованной библиотеки 

console.log(web3.version.network);  //в старых версиях работает, но сейчас используем версию 1
var addr="0x260c29d0c228603b35b608cfa68f1476a1c763ca"   //тут се ясно 


// web3.eth.getBalance(addr,function(error,result){
//   if (!error) {
//     console.log('balance is',web3.utils.fromWei(result,'ether'))
//   }
//     else {
//         console.log("eror")
//     }
// })


console.log(web3.eth.net.getId(function(error,result){
  if (!error) {
    console.log(result)
  } else {
    console.log(error)
  }
  }))

//web3.eth.net.getId().then(console.log);