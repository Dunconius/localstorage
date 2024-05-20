// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark";


/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser local storage
 * @returns  Array of objects. 
 */
function getStoredCssThemes(){
    // Update the cssTheme array
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes);

    // Return the updated data
    return cssThemes;
};


/**
 * Retrieve, assign, and return the latest stored page theme from the browser local storage
 * @returns  String. Should be "light" or "dark"
 */
function getStoredPageTheme(){
    // Update the pageTheme array
    pageTheme = localStorage.getItem("pageTheme");
    return pageTheme;
};


// Create/update local storage
function setCssThemesToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
};

function setPageThemeToStorage(){
    localStorage.setItem("pageTheme", pageTheme);
};

// check if data exists
// if it does, retrieve it,
// else, set default variables to localstorage

if (localStorage.getItem("pageTheme") && localStorage.getItem("cssThemes").length > 0 ){
    getStoredPageTheme();
    getStoredCssThemes();
} else {
    setCssThemesToStorage();
    setPageThemeToStorage();
}