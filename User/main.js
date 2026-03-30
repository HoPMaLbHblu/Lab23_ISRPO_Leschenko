const form = document.getElementById("profileForm");
const clearBtn = document.getElementById("clear");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");

const errorText = document.getElementById("error");

const profileName = document.getElementById("profileName");
const profileAge = document.getElementById("profileAge");
const profileCity = document.getElementById("profileCity");
const profileHobby = document.getElementById("profileHobby");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const city = cityInput.value.trim();
    const hobby = hobbyInput.value.trim();

    if (!name || !age || !city || !hobby) {
        errorText.textContent = "Заполните все поля";
        return;
    }

    errorText.textContent = "";

    profileName.textContent = name;
    profileAge.textContent = age;
    profileCity.textContent = city;
    profileHobby.textContent = hobby;
});
clearBtn.addEventListener("click", function () {

    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";
    hobbyInput.value = "";

    profileName.textContent = "—";
    profileAge.textContent = "—";
    profileCity.textContent = "—";
    profileHobby.textContent = "—";

    errorText.textContent = "";
});