let sbiBank={
    bankName: "SbiBank",
    location :"Pune",
    accountNo:1234567890,
    ifsc: "SBIN0240275",
    interestRate:"5.7%",
    showDeatail : function(){
           console.log(`Bank Name : ${this.bankName}   Location : ${this.location}   AccountNo : ${this.accountNo}   IFSC : ${this.ifsc}    Interest Rate ${this.interestRate}`);
    }
}
sbiBank.showDeatail();

let axisBank={
    bankName: "Axis Bank",
    location :"Mumbai",
    accountNo:87654321678,
    ifsc: "UTIB0054786",
    interestRate:"7.7%",
    showDeatail : function(){
        console.log(`Bank Name : ${this.bankName}  Location : ${this.location}  AccountNo : ${this.accountNo} IFSC : ${this.ifsc}   Interest Rate ${this.interestRate}`);
 }
}
axisBank.showDeatail();

let hdfcBank={
    bankName: "HDFC Bank",
    location :"Delhi",
    accountNo:9657392016,
    ifsc: "HDFC0000001",
    interestRate:"9.6%",
    showDeatail : function(){
        console.log(`Bank Name : ${this.bankName}  Location : ${this.location}  AccountNo : ${this.accountNo}  IFSC : ${this.ifsc}   Interest Rate ${this.interestRate}`);
 }
}
hdfcBank.showDeatail();


let yesBank={
    bankName: "YES  Bank",
    location :"chennai",
    accountNo:6930526891,
    ifsc: "YES0765432",
    interestRate:"3.6%",
    showDeatail : function(){
        console.log(`Bank Name : ${this.bankName}  Location : ${this.location}  AccountNo : ${this.accountNo}  IFSC : ${this.ifsc}   Interest Rate ${this.interestRate}`);
 }

}
yesBank.showDeatail();
