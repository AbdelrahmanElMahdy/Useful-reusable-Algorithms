
// this function return list of objects which contain schedual time and price for every instalment.
//ex if formalDate equal true 
//   [{ price: 33.333333333333336, date: 2021-10-14T00:00:00.000Z },
//   { price: 33.333333333333336, date: 2021-10-28T00:00:00.000Z },
//   { price: 33.333333333333336, date: 2021-11-14T00:00:00.000Z }]

//  if formalDate equal false
// [{ price: 33.333333333333336, date: '2021-10-14' },
//   { price: 33.333333333333336, date: '2021-10-28' },
//   { price: 33.333333333333336, date: '2021-11-14' },
//   { price: 33.333333333333336, date: '2021-11-28' },

function getDatesPrice(noPlans, totalPrice, formalDate=false){
  price= totalPrice / noPlans ;     
  let currentDate= new Date(Date.now());

  let installmentsObj=[];

  let year= currentDate.getFullYear();
  let month = currentDate.getMonth();
  let currentDay= currentDate.getDay();
  
  let day14or28 = currentDay > 9 && currentDay < 23 ? 28 : 14;
  for (let noDownPay=0; noDownPay<noPlans; noDownPay++){
    let date =`${year}-${month}-${day14or28}`;
	
	if (formalDate) {installmentsObj.push({price,date :new Date(date)})}
	else {installmentsObj.push({price,date})};
    
    if( day14or28 ===28 ) month++;
    if(month ===13){
      month=1;
      year++;
    }

    day14or28 =  day14or28 === 14 ? 28 : 14;
  } 
  return installmentsObj;
}
console.log(getDatesPrice(15,500,true))
