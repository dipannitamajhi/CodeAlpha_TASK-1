function calculateAge() {
    let nameInput = document.getElementById("name");
    let dobInput = document.getElementById("dob");

    let nameError = document.getElementById("nameError");
    let dobError = document.getElementById("dobError");
    let result = document.getElementById("result");

    
    nameError.innerText = "";
    dobError.innerText = "";
    result.innerText = "";

    let name = nameInput.value.trim();
    let dob = dobInput.value;

    let hasError = false;

    
    if (name === "") {
    nameError.innerText = "Please enter your name";
    hasError = true;
}

    
    if (dob === "") {
        dobError.innerText = "Please select your date of birth";
        hasError = true;
    }

    
    if (hasError) return;

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        dobError.innerText = "Invalid date of birth";
        return;
    }

    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    
   
    name = name.charAt(0).toUpperCase() + name.slice(1);

    result.innerText = `  Dear ${name}, your age is ${years} Years, ${months} Months, ${days} Days`;
}
dobInput.addEventListener("input", () => {
    document.getElementById("dobError").innerText = "";
});
