function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;

}

console.log(`==================Bank Details==========================================`);
let yesBank=new Bank("YesBank","pune","YES0005000","12345");
console.log(`Bank Details is : BankName: ${yesBank.bankName}, location:${yesBank.location}, ifscCode : ${yesBank.ifscCode} , BranchCode : ${yesBank.branchCode}`);

let sbiBank=new Bank("sbiBank","Mumbai","SBI0978654","33875");
console.log(`Bank Details is : BankName: ${sbiBank.bankName}, location:${sbiBank.location}, ifscCode : ${sbiBank.ifscCode} , BranchCode : ${sbiBank.branchCode}`);

let mahBank=new Bank("mahBank","Sangola","MAH29584","70432");
console.log(`Bank Details is : BankName: ${mahBank.bankName}, location:${mahBank.location}, ifscCode : ${mahBank.ifscCode} , BranchCode : ${mahBank.branchCode}`);

let axisBank=new Bank("AxisBank","pune","AXIS346787","98654");
console.log(`Bank Details is : BankName: ${axisBank.bankName}, location:${axisBank.location}, ifscCode : ${axisBank.ifscCode} , BranchCode : ${axisBank.branchCode}`);

console.log(`==============Open and close time of SBI bank=============`);
Bank.prototype.openTime="9 AM IST"
Bank.prototype.closeTime="6 PM IST"
console.log(` SBI bank open at : ${sbiBank.openTime} and close at :${sbiBank.closeTime}`);

console.log(`============Name of bank and close time ==============`);
console.log(`Bank Name : ${axisBank.bankName} and close at : ${axisBank.closeTime}`);

console.log(`=========Bank Details and open time ========================`);
console.log(`Bank Details is : BankName: ${yesBank.bankName}, location:${yesBank.location}, ifscCode : ${yesBank.ifscCode} , BranchCode : ${yesBank.branchCode} and Open at : ${yesBank.openTime}`);




