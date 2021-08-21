// validate user
let userName = prompt("Please enter your name?");``
while(userName.trim() == "" || userName ==null) {
  alert("Invalid name !!");
  userName = prompt("Please enter your name?");
}

// validate password
let password = prompt("Please enter your password?");
let count = 0;
while(password != "123") {
  alert("invalid password !");
  count++;
  if(count == 3){
    alert("you’ve entered wrong password 3 times");
  }
  password = prompt("Please enter your password?");
}

alert("Welcome "+ userName + " to Horoscope program !");

function getHoroscope(){
   var birthDay = Number(document.getElementById("day").value);
   var birthMonth  = Number(document.getElementById("month").value);    
  
   if(!validateNum(birthDay) || !validateNum(birthMonth) || !validateBirthDate(birthDay,birthMonth)){
     document.getElementById("day").value= "";
     document.getElementById("month").value= "";
     alert("Please enter valid day or month!") 
   
   }
   else{
     let month = getMonthByName(birthMonth);
     alert("your Horoscope is : " + zodiac_sign(birthDay, month))
   }
   
}

function validateNum(checkNum){
     var z = checkNum;
     var isValidNum = true;
     if(!/^[0-9]+$/.test(z)){
        isValidNum = false; 
     }
    return isValidNum;
}

function daysInMonth(m) { // m is 0 indexed: 0-11
   switch (m) {
       case 2 :
           return 28;
       case 4 : case 6 : case 9 : case 11 :
           return 30;
       default :
           return 31
    }
}

function validateBirthDate(d, m) {
  return m > 0 && m <= 12 && d > 0 && d <= daysInMonth(m);
}
  
function getMonthByName(monthInt){
  const months = ["dummy", "january","february", "march", "april", "may", "june", 
                  "july", "august", "september" , "october", "november", "december"];
  return months[monthInt];                
}

function zodiac_sign(day, month){
    let astro_sign="";
           
    if (month == "december"){         
      if (day < 22)
        astro_sign = "Sagittarius";
      else
        astro_sign ="capricorn";
   }
               
    else if (month == "january"){
      if (day < 20)
        astro_sign = "Capricorn";
      else
        astro_sign = "aquarius";
    }
               
    else if (month == "february"){
      if (day < 19)
        astro_sign = "Aquarius";
      else
        astro_sign = "pisces";
    }
               
    else if(month == "march"){
      if (day < 21)
        astro_sign = "Pisces";
      else
        astro_sign = "aries";
    }
  
    else if (month == "april"){
      if (day < 20)
        astro_sign = "Aries";
      else
        astro_sign = "taurus";
    }
               
    else if (month == "may"){
      if (day < 21)
        astro_sign = "Taurus";
      else
        astro_sign = "gemini";
     }
               
    else if( month == "june"){
      if (day < 21)
        astro_sign = "Gemini";
      else
        astro_sign = "cancer";
    }
               
    else if (month == "july"){
      if (day < 23)
        astro_sign = "Cancer";
      else
        astro_sign = "leo";
    }
               
    else if( month == "august"){
      if (day < 23)
        astro_sign = "Leo";
      else
        astro_sign = "virgo";
    }
               
    else if (month == "september"){
      if (day < 23)
        astro_sign = "Virgo";
      else
        astro_sign = "libra";
    }
               
    else if (month == "october"){
      if (day < 23)
        astro_sign = "Libra";
      else
        astro_sign = "scorpio";
    }
               
    else if (month == "november"){
      if (day < 22)
        astro_sign = "scorpio";
      else
        astro_sign = "sagittarius";
    }
               
  return astro_sign;
}


  
