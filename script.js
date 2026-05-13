function calculateAge() {
    let nameInput = document.getElementById("name");
    let dobInput = document.getElementById("dob");

    let nameError = document.getElementById("nameError");
    let dobError = document.getElementById("dobError");
    let result = document.getElementById("result");

    // Clear previous messages
    nameError.innerText = "";
    dobError.innerText = "";
    result.innerText = "";

    let name = nameInput.value.trim();
    let dob = dobInput.value;

    let hasError = false;

    // Name validation
    if (name === "") {
    nameError.innerText = "Please enter your name";
    hasError = true;
}

    // DOB validation
    if (dob === "") {
        dobError.innerText = "Please select your date of birth";
        hasError = true;
    }

    // Stop if error
    if (hasError) return;

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        dobError.innerText = "Invalid date of birth";
        return;
    }

    // Age calculation
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
    
    // Capitalize name
    name = name.charAt(0).toUpperCase() + name.slice(1);

    result.innerText = `  Dear ${name}, your age is ${years} Years, ${months} Months, ${days} Days`;
}
dobInput.addEventListener("input", () => {
    document.getElementById("dobError").innerText = "";
});