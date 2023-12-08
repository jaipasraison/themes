if(localStorage.getItem("unlockedItems") == null)
{
    localStorage.setItem("unlockedItems", JSON.stringify( [ { "environnement": false }, { "alimentation": false }, { "energie": false }, { "quotidien": false }, { "transports": false } ] ));
}

let indexs = new Map();
indexs.set("environnement", 0);
indexs.set("alimentation", 1);
indexs.set("energie", 2);
indexs.set("quotidien", 3);
indexs.set("transports", 4);

let divIcons = document.querySelectorAll(".icon");
divIcons.forEach((div) => {
    let libelle = div.id;
    let index = indexs.get(libelle);
    for(let key in JSON.parse(localStorage.unlockedItems)[index])
    {
        if(key == libelle && !JSON.parse(localStorage.unlockedItems)[index][libelle])
        {
            div.classList.add("locked");
            div.getElementsByTagName("p")[1].textContent = "Bloqué";
        }
        else if(key == libelle && JSON.parse(localStorage.unlockedItems)[index][libelle])
        {
            div.classList.add("unlocked");
            div.getElementsByTagName("p")[1].textContent = "Débloqué !";
            div.addEventListener("click", changeTheme);
        }
    }
})

function changeTheme(event)
{
    let libelle = event.target.id;
    document.querySelector("#theme-css").href = `${libelle}.css`;
    localStorage.setItem("currentTheme", `${libelle}`);
    if(localStorage.currentTheme == "base")
    {
        document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else
    {
        document.querySelector("#selectedTheme").firstElementChild.textContent = `Le thème sélectionné est ${localStorage.currentTheme.charAt(0).toUpperCase() + localStorage.currentTheme.slice(1)}.`;
    }
}

if(localStorage.currentTheme != null)
{
    if(localStorage.currentTheme == "base")
    {
        document.querySelector("#theme-css").href = "";
        document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else
    {
        document.querySelector("#theme-css").href = `${localStorage.currentTheme}.css`;
        document.querySelector("#selectedTheme").firstElementChild.textContent = `Le thème sélectionné est ${localStorage.currentTheme.charAt(0).toUpperCase() + localStorage.currentTheme.slice(1)}.`;
    }
}