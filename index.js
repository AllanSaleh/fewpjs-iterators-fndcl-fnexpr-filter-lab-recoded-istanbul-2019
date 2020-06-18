// Code your solution here

function findMatching(drivers, str){
  return drivers.filter(driver=>driver.name.toLowerCase()===str.toLowerCase());
}