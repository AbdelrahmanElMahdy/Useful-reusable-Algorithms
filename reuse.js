
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
// days >> which days if the month must be 2 days 
// allowed period >> period that if the current day is before it we shift the installment to next sechedual day 
function getDatesPrice(noPlans, totalPrice, formalDate=false,days=[14,18],allowedPeriod=4){
  price= totalPrice / noPlans ;     
  let currentDate= new Date(Date.now());

  let installmentsObj=[];

  let year= currentDate.getFullYear();
  let month = currentDate.getMonth();
  let currentDay= currentDate.getDay() 
  
  let dayFirstOrSecond = currentDay > days[0]-allowedPeriod && currentDay < days[1]-allowedPeriod ? days[1] : days[0];
  for (let noDownPay=0; noDownPay<noPlans; noDownPay++){
    let date =`${year}-${month}-${dayFirstOrSecond}`;
	
	if (formalDate) {installmentsObj.push({price,date :new Date(date)})}
	else {installmentsObj.push({price,date})};
    
    

    if( dayFirstOrSecond ===days[1] ) month++;
    if(month ===13){
      month=1;
      year++;
    }

    dayFirstOrSecond =  dayFirstOrSecond === days[0] ? days[1] : days[0];
  } 
  return installmentsObj;
}


    day14or28 =  day14or28 === 14 ? 28 : 14;
  } 
  return installmentsObj;
}
console.log(getDatesPrice(15,500,true))
