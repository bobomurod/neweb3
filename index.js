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

web3.eth.getBalance(addr).then(console.log)

console.log(web3.eth.net.getId(function(error,result){
  if (!error) {
    console.log(result)
  } else {
    console.log(error)
  }
  }))

//web3.eth.net.getId().then(console.log);
console.log("Actual blck number is")
web3.eth.getBlockNumber().then(console.log);
//
console.log("Gives list of accounts the node controls")
web3.eth.getAccounts().then(console.log)

var storageContractAbi = [
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "Numbers",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var storageContract = new web3.eth.Contract(storageContractAbi,"0x2309206CC02A25B2749C918CCa1B0258A9bB4CEF")

storageContract.methods.get().call().then(console.log);
