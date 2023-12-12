function getDaysUntilChristmas (today) {
  let options = {day: 'numeric'};
  let xmas = new Date('2023-12-26');

  let todaysDay = today.toLocaleDateString('en-US', options);
  let xmasDay = xmas.toLocaleDateString('en-US', options);

  let daysTillXmas = xmasDay - todaysDay;

  
  console.log(daysTillXmas);

}
getDaysUntilChristmas(new Date());





// let numbers = [5, 10, 2, 25, 44, 109, 7];

// function getAverage(nums){
//   let total = 0;
//   for(let i = 0 ; i<nums.length ; i++){
//     total += nums[i];
//   }
//   console.log(total);
//   return total;


// }

// getAverage(numbers);

