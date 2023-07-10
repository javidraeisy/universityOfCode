function christmasEve(dateObject) {
  if (dateObject.getMonth() == 11 && dateObject.getDate() == 24) {
    return true;
  } else {
    return false;
  }
}


// to check if the function is working properly can try the below method
// const currentDate = new Date();
// const isChristmasEve = christmasEve(currentDate);
// if (isChristmasEve) {
//   console.log("It's Christmas Eve!");
// } else {
//   console.log("It's not Christmas Eve.");
// }
