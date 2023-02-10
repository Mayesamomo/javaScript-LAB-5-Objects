//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer = {
    //2. Add the required properties to your object.
    lastName: "Momo",
    brancNumber: 205,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false, //2. Add another property: multipleAccounts.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
    makeDeposit: function(amount){
        bankCustomer.accountBalance += amount;

        return "Thank you, your current balance is now  $" + bankCustomer.accountBalance.toFixed(2) + ".";
    },

    //4. Add your second method and test it.
    makeWithdrawal: function(amount){
        bankCustomer.accountBalance-=amount;
        return "Thank you, your current balance is now  $" + bankCustomer.accountBalance.toFixed(2);
    },
    //extra challenge: Add another method: addInterest. 
    //This method will simply multiply the accountBalance by interestRate-
    addInterest: function(){
       
        if(this.multipleAccounts === true){
            var multiAccRate = this.interestRate + 0.005;
            var newInterest = this.accountBalance = bankCustomer.accountBalance *multiAccRate ;
            return "Thank you, You have multiple accounts, therefore, your current balance is now  $" +  newInterest.toFixed(2);
        }
        else{
            this.accountBalance = bankCustomer.accountBalance * bankCustomer.interestRate
            return "Thank you, your current balance is now  $" + this.accountBalance.toFixed(2);
        }
       
    }
}




//Add your first method and test it
//alert(bankCustomer.makeDeposit(100));

////4. Add your second method and test it.
//alert(bankCustomer.makeWithdrawal(100));

//5. Create the required output to complete steps 6-10 of the lab.
//6. Output the account starting balance to the console.
console.log("Starting balance: $" + bankCustomer.accountBalance.toFixed(2));

//7. Deposit $200 
var deposit = bankCustomer.makeDeposit(200);

//8. Output the new balance to the console.
console.log(deposit);

//9. Withdraw $75
var withdrawal = bankCustomer.makeWithdrawal(75);

//10. Output the new balance to the console.
console.log(withdrawal);

//testing extra challenge

console.log(bankCustomer.addInterest());






