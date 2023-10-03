function validateYear(year) {
    const currentYear = new Date().getFullYear();
  
    if (isNaN(year)) {
      document.getElementById("yearErrorMsg").innerHTML = "Invalid birth year";
      console.log("Error: Invalid birth year");
      document.getElementById("user-birth-year-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-year").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("yearErrorMsg").style.display = "block";
      return false;
    }
    if (year > currentYear) {
      console.log("Error: Birth year is in the future");
      document.getElementById("yearErrorMsg").innerHTML = "Must be in the past";
      document.getElementById("user-birth-year-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-year").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day").style.borderColor = "hsl(0, 100%, 67%)";      
      document.getElementById("yearErrorMsg").style.display = "block";
      return false;
    }
  
    document.getElementById("user-birth-year-label").style.color = "#767676";
    document.getElementById("user-birth-month-label").style.color = "#767676";
    document.getElementById("user-birth-day-label").style.color = "#767676";
    document.getElementById("user-birth-year").style.borderColor = "#DCDCDC";
    document.getElementById("user-birth-month").style.borderColor = "#DCDCDC";
    document.getElementById("user-birth-day").style.borderColor = "#DCDCDC";
    document.getElementById("yearErrorMsg").style.display = "none";
    return true;
  }
  
  function validateMonth(month) {
    if (isNaN(month) || month < 1 || month > 12) {
      console.log("Error: Invalid month");
      document.getElementById("monthErrorMsg").innerHTML = "Invalid month";
      document.getElementById("user-birth-year-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-year").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day").style.borderColor = "hsl(0, 100%, 67%)";   
      document.getElementById("monthErrorMsg").style.display = "block";
      return false;
    }
    
    document.getElementById("user-birth-year-label").style.color = "#767676";
    document.getElementById("user-birth-month-label").style.color = "#767676";
    document.getElementById("user-birth-day-label").style.color = "#767676";
    document.getElementById("user-birth-year").style.borderColor = "#DCDCDC";
    document.getElementById("user-birth-month").style.borderColor = "#DCDCDC";
    document.getElementById("user-birth-day").style.borderColor = "#DCDCDC";
    document.getElementById("monthErrorMsg").style.display = "none";
    return true;
  }
  
  function validateDay(day, month, year) {
    const daysInMonth = new Date(year, month, 0).getDate();
    if (isNaN(day) || day < 1 || day > daysInMonth) {
      console.log("Error: Invalid day");
      document.getElementById("dayErrorMsg").innerHTML = "Invalid day";
      document.getElementById("user-birth-year-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day-label").style.color = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-year").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-month").style.borderColor = "hsl(0, 100%, 67%)";
      document.getElementById("user-birth-day").style.borderColor = "hsl(0, 100%, 67%)"; 
      document.getElementById("dayErrorMsg").style.display = "block";
      return false;
    }
  
    document.getElementById("user-birth-year-label").style.color = "#767676";
    document.getElementById("user-birth-month-label").style.color = "#767676";
    document.getElementById("user-birth-day-label").style.color = "#767676";
    document.getElementById("user-birth-year").style.borderColor = "#DCDCDC";
    document.getElementById("user-birth-month").style.borderColor = "#DCDCDC";
    document.getElementById("user-birth-day").style.borderColor = "#DCDCDC";
    document.getElementById("dayErrorMsg").style.display = "none";
    return true;
  }
  

  function calculateAge() {
    const year = parseInt(document.getElementById("user-birth-year").value, 10);
    const month = parseInt(document.getElementById("user-birth-month").value, 10);
    const day = parseInt(document.getElementById("user-birth-day").value, 10);
  
    // Validate year, month, and day
    const isYearValid = validateYear(year);
    const isMonthValid = validateMonth(month);
    const isDayValid = validateDay(day, month, year);
  
    if (!isYearValid || !isMonthValid || !isDayValid) {
      // Exit the function if validation failed
      return;
    }
  
    const currentDate = new Date();
    const userBirthDate = new Date(year, month - 1, day); // Months are 0-indexed
  
    const ageInMilliseconds = currentDate - userBirthDate;
    const ageDate = new Date(ageInMilliseconds);
  
    const years = ageDate.getUTCFullYear() - 1970; // Years since 1970
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1; // Days (0-indexed)
  
    document.getElementById("year-result-value").innerHTML = years
    document.getElementById("month-result-value").innerHTML = months
    document.getElementById("day-result-value").innerHTML = days
    console.log("Age: ", years, " years, ", months, " months, ", days, " days");
  }
  