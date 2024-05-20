// Declare JS data that we want to store
let cssTheme = [

];

let pagTheme = "dark";


/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser local storage
 * @returns  Array of objects. 
 */
function getStoredCssThemes(){
    // Update the cssTheme array
    let rawJsonStringCssThemes = localStorage.getITem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes);

    // Return the updated data
    return cssThemes;
};


/**
 * Retrieve, assign, and return the latest stored page theme from the browser local storage
 * @returns  String. Should be "light" or "dark"
 */
function getStoredPageThemes(){
    // Update the pageTheme array
    pageTheme = localStorage.getITem("pageTheme");

    // Return the updated data
    return pageTheme;
};


// Create/update local storage
function setCssThemesToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
}

// delete local storage