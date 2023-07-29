// Bài 1: Tinh tiền lương nhân viên
var salaryOneDay = 100,
    numOfDayWork = 29,
    salary = salaryOneDay * numOfDayWork;

console.log("Bạn làm " + numOfDayWork + " ngày. Lương của bạn là: ", salary);


//-----------------------------------------------
// bài 2: tính trung bình cộng 5 số thực
var so1 = 1, so2 = 2, so3 = 3, so4 = 4, so5 = 5,
    tong5so = so1 + so2 + so3 + so4 + so5,
    tbc = tong5so / 5;
console.log("Trung bình cộng 5 số trên = " + tong5so + " / 5 = ", tbc);


//-----------------------------------------------
// bài 3: Quy đổi tiền
const ONE_USD = 23.500;
var USD = 50,
    moneyAfterConvert = USD * ONE_USD;
console.log(USD + " USD = " + moneyAfterConvert + " VND");


//-----------------------------------------------
// Bài 4: Tính chu vi diện tích hình chữ nhật
var chieuDai = 7, chieuRong = 5,
    chuVi = (chieuDai + chieuRong) * 2,
    dienTich = chieuDai * chieuRong;

console.log("Hình chữ nhật này có chu vi = " + chuVi + ", diện tích = " + dienTich);


//-----------------------------------------------
// Bài 5: TÍnh tổng 2 ký số
var num = 29,
    ten = Math.floor(num / 10),
    unit = num % 10,
    sum = ten + unit;

console.log("Tổng 2 số " + ten + " + " + unit + " = " + sum);