
//https://github.com/israatjahan/assignment-3


// Problem-1:- kilometerToMeter....

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log('No negetive input for distance');

    }
    else {

        var meter = kilometer * 1000;  //1 km = 1000m
        return meter;
    }

}
var result = kilometerToMeter(10);
console.log(result);

/*the end problem-1*/



// Problem-2:- budgetCalculator....

function budgetCalculator(watchQuantity, PhoneQuantity, LaptopQuantity) {
    if (watchQuantity < 0 || PhoneQuantity < 0 || LaptopQuantity < 0) {
        console.log('No negetive quantity value');
    }
    else {
        var watch = 50 * watchQuantity;
        var Phone = 100 * PhoneQuantity;
        var Laptop = 500 * LaptopQuantity;
        totalCost = (watch + Phone + Laptop);
    }
    return totalCost;

}
var budgetcost = budgetCalculator(25, 18, 15);
console.log(budgetcost);
// end of the problem 2


/* Problem-3:- hotelCost....*/

function hotelCost(days){
    var totalCost ;
     
        if(days <0){
            console.log("Offer won't work for this")
         }
     
         else{
       if (days<=10){
         totalCost = days*100;
    }
    else if(days<=20){
        var firstTenDays = 10*100;
        var daysRemaining = days - 10;
        var secondTenDays =  daysRemaining*80;
        totalCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var daysRemaining = days-20;
        var anotherDayremain = daysRemaining*50;
        totalCost = firstTenDays + secondTenDays +  anotherDayremain;
    }
    return totalCost;
    }
}
var result = hotelCost(500);
console.log(result);
     








// Problem-4:- megaFriend....

var megaFriendNames = ["nabila", "nusrat","farhana","Alisha"];
function megaFriend(megaFriendName) 
{
    if (megaFriendName.length <= 0)
     {
        console.log("should be a large name here");
    } else {
        var megaFriendName = megaFriendNames[0];
        for (var i = 0; i < megaFriendNames.length; i++) 
        {
            var friendNames = megaFriendNames[i];
            if (friendNames.length > megaFriendName.length)
             {
                megaFriendName = friendNames;
            }
        }
        return megaFriendName;
    }
}
var result = megaFriend(megaFriendNames);
console.log(result);
