// ----- A METTRE UNIQUEMENT SUR LA PAGE DES THEMES
let buttonThemeBase = document.querySelector("#buttonThemeBase");
buttonThemeBase.addEventListener("click", displayThemeBase);
function displayThemeBase()
{
    document.querySelector("#theme-css").href = "";
    localStorage.setItem("currentTheme", "base");
    if(localStorage.currentTheme == "base")
    {
        document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else
    {
        document.querySelector("#selectedTheme").firstElementChild.textContent = `Le thème sélectionné est ${localStorage.currentTheme.charAt(0).toUpperCase() + localStorage.currentTheme.slice(1)}.`;
    }
}

// localStorage.setItem("unlockedItems", JSON.stringify( [ { "environnement": true }, { "alimentation": JSON.parse(localStorage.unlockedItems)[1].alimentation }, { "energie": JSON.parse(localStorage.unlockedItems)[2].energie }, { "quotidien": JSON.parse(localStorage.unlockedItems)[3].quotidien }, { "transports": JSON.parse(localStorage.unlockedItems)[4].transports } ] ));

// console.log(localStorage.getItem("unlockedItems"));