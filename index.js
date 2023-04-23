let num1 = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
let result = Array(10);
for (let i = 0; i < num1.length; i++) {
    result[i] = num1[i]**2;
    }
console.log(result);
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];
let songuyento = [];
for (let i = 0; i < num2.length; i++) {
    let test = 0;
    for (let j = 2; j <= Math.sqrt(num2[i]); j++) {
        if(num2[i] % j == 0 ){
            test += 1;
        }
    }if(test == 0){
        songuyento.push(num2[i]);
    }
};
console.log(songuyento);
//Tạo một giỏ hàng
let one = {
    name : "America apple ",
    color: "Red",
    price: 20000,
    product: "America",
    expirationDate: '12/2023',
    distributionUnit : {
        nameUnit: "Yakima",
        address: "California",
    },
};
let two = {
    name : "Úc mango ",
    color: "Yellow",
    price: 30000,
    product: "VietNam",
    expirationDate: '10/2023',
    distributionUnit : {
        nameUnit: "Công ty TNHH Camlamonline",
        address: "Khánh Hòa",
    },
};
let three = {
    name : "Watermelon",
    color: "green",
    price: 50000,
    product: "VietNam",
    expirationDate: '09/2023',
    distributionUnit : {
        nameUnit: "Kỳ Lý",
        address: "Tam Đàn",
    },
};
let cart = [one, two, three];
for (let i = 0; i < cart.length; i++) {
    console.log("STT: ", i+1);
    console.log('Tên sản phẩm: ', cart[i].name);
    console.log('Giá: ', cart[i].price);
    console.log('Ngày hết hạn: ', cart[i].expirationDate);
    console.log(`Đơn vị phân phối:  ${cart[i].distributionUnit.nameUnit} - ${cart[i].distributionUnit.address}`);
}

let enter = prompt('Nhập số thứ tự muốn thay đổi: ');
for (let i = 0; i < cart.length; i++) {
    if(enter == i+1){
        let update = prompt('Nhập lại ngày hết hạn: ');
        console.log(`Ngày hết hạn mới của ${cart[i].name}: `, update);
    }
}
