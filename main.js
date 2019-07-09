/*function add (left, right) {
    return left + right;
}

module.exports = add;8*/

function ifItemExist(shopCount,itemIdList){
	for(let i = 0; i < shopCount.length; i++){
		if(itemIdList.indexOf(shopCount[i].key) == -1)
			return false;
	}
	return true;
}


function getReceipt(shopCount,itemList){
	let sum = 0;
	let message = "Receipts"+"\n"+"----------------------------------------------------------------------------"+"\n";
	for(let i = 0; i < shopCount.length; i++){
		for(let j = 0; j < itemList.length; j++){
			if(shopCount[i].key === itemList[j].id){
				sum += itemList[j].price  * shopCount[i].count;
				message += itemList[j].name +"\t" +"\t" +"\t" + "\t" + itemList[j].price + "\t" + shopCount[i].count + "\n";
			}
		}

	}
	message += "----------------------------------------------------------------------------"+"\n";
	message += "Price: "+ sum;
	return message;
}

function  printReceipt(shopList,itemList){
	shopList.sort();
	console.log(shopList);
	let shopCount = [];
	let temp = {};
	for(let i = 0; i < shopList.length - 1; i++){
		if(i == 0){
			temp.key = shopList[0];
			temp.count = 1;
			if(shopList[0] == shopList[1])
				temp.count ++;
			else{
				shopCount.push(temp);
			temp = {};
			temp.key = shopList[i+1];
			temp.count = 1;
			}
			continue;
		}
		if(shopList[i] == shopList[i+1]){
			temp.count ++;
		}else{
			shopCount.push(temp);
			temp = {};
			temp.key = shopList[i+1];
			temp.count = 1;
		}
	}

	if(temp.length!=0)
		shopCount.push(temp);
	
	console.log(shopCount);
	
	var itemIdList = [];
	for(let i = 0; i < itemList.length; i++){
		itemIdList.push(itemList[i].id);
	}
	
	
	
	let output = "";
	if(!ifItemExist(shopCount,itemIdList))
		output +="[ERROR]:item not exist";
	else{
		output += getReceipt(shopCount,itemList);
	}
	
	return output;
	//console.log(output);
}

/*var shopList = ['0001', '0003', '0005', '0003'];
var itemList = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];*/

//printReceipt(shopList,itemList);

module.exports = {ifItemExist,getReceipt,printReceipt};