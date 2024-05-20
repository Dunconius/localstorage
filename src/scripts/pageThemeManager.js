
// update #pageThemeHeading text
function updatePageThemeHeading(){
    let headingToUpdate = document.getElementById("pageThemeHeading");
    headingToUpdate.textContent = getStoredPageTheme();
}


// Update #pageThemeButton text
function updatePageThemeButtonText(){
    let buttonToUpdate = document.getElementById("pageThemeButton");

    let textToShow = "";

    if (getStoredPageTheme() == "dark"){
        textToShow = "Switch to Light Mode";
    } else {
        textToShow = "Switch to Dark Mode";
    }

    buttonToUpdate.textContent = textToShow;
}

// Add onclick to #pageThemeButton
function togglePageTheme(){
    if (getStoredPageTheme() == "dark"){
        pageTheme = "light";
    } else {
        pageTheme = "dark";
    }
    setPageThemeToStorage();
    updatePageThemeButtonText();
    updatePageThemeHeading();
}

let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);