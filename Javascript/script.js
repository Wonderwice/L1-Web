//Changement de fiche - Alexei

function pictureLeft() {
    let name = document.getElementById('img').name;
    if (name === "Iron Man") {
        document.getElementById('img').name = "Hulk";
        document.getElementsByClassName('affiche')[0].href = "Content/Collection/hulk.xhtml";
        document.getElementById('img').src = "Images/hulk.jpg";
        document.getElementById('img').alt = "Affiche de Hulk"
    } else {
        if (name === "Hulk") {
            document.getElementById('img').name = "Thor";
            document.getElementsByClassName('affiche')[0].href = "Content/Collection/thor.xhtml";
            document.getElementById('img').src = "Images/thor.jpg";
            document.getElementById('img').alt = "Affiche de Thor"
        } else {
            if (name === "Thor") {
                document.getElementById('img').name = "Captain";
                document.getElementsByClassName('affiche')[0].href = "Content/Collection/captain_america.xhtml";
                document.getElementById('img').src = "Images/captain-america.jpg";
                document.getElementById('img').alt = "Affiche de Captain America"
            } else {
                if (name === "Captain") {
                    document.getElementById('img').name = "Iron Man";
                    document.getElementsByClassName('affiche')[0].href = "Content/Collection/iron_man.xhtml";
                    document.getElementById('img').src = "Images/iron-man.jpg";
                    document.getElementById('img').alt = "Affiche de Iron Man"
                }
            }
        }
    }
}

//Changement de fiche - Alexei

function pictureRight() {
    let name = document.getElementById('img').name;
    if (name === "Iron Man") {
        document.getElementById('img').name = "Captain";
        document.getElementsByClassName('affiche')[0].href = "Content/Collection/captain_america.xhtml";
        document.getElementById('img').src = "Images/captain-america.jpg";
        document.getElementById('img').alt = "Affiche de Captain America";
    } else {
        if (name === "Hulk") {
            document.getElementById('img').name = "Iron Man";
            document.getElementsByClassName('affiche')[0].href = "Content/Collection/iron_man.xhtml";
            document.getElementById('img').src = "Images/iron-man.jpg";
            document.getElementById('img').alt = "Affiche de Iron Man"
        } else {
            if (name === "Thor") {
                document.getElementById('img').name = "Hulk";
                document.getElementsByClassName('affiche')[0].href = "Content/Collection/hulk.xhtml";
                document.getElementById('img').src = "Images/hulk.jpg";
                document.getElementById('img').alt = "Affiche de Hulk"
            } else {
                if (name === "Captain") {
                    document.getElementById('img').name = "Thor";
                    document.getElementsByClassName('affiche')[0].href = "Content/Collection/thor.xhtml";
                    document.getElementById('img').src = "Images/thor.jpg";
                    document.getElementById('img').alt = "Affiche de Thor"
                }
            }
        }
    }
}

//Changement de style - Styven

function switchStyle() {
    if (document.getElementById("style_exchange").value === "classic") {
        document.getElementById("style").href = "Styles/alternative_style.css";
        document.getElementById("style_exchange").value = "alternative"
    } else {
        document.getElementById("style").href = "Styles/index_style.css";
        document.getElementById("style_exchange").value = "classic"
    }
}

// Proposition de fiche - Styven

function checkMovie() {
    if (document.getElementById('first_movie').value === "") {
        window.alert("Veuillez rentrez un nom de film !")
    }
}

//Livre d'Or - Alexei

function checkFirstName() {
    if (document.getElementById("firstname").value === "") {
        window.alert("Vous devez rentrer un prénom !")
    }
}

function checkName() {
    if (document.getElementById("name").value === "") {
        window.alert("Vous devez rentrer un nom !")
    }
}

function checkLike() {
    if ((document.getElementById("YES").checked === false) && (document.getElementById("NO").checked === false)) {
        window.alert("Donnez nous votre retour sur notre travail !")
    }
}

function checkPrivacy() {
    if (document.getElementById("privacy").value === "...") {
        window.alert("Souhaitez-vous être publié ?")
    }
}

function checkNote() {
    if (document.getElementById("comment").value === "Vous pouvez écrire votre note ici. ;)") {
        window.alert("Laissez nous une petite note :)")
    }
}

function testAll() {
    checkNote();
    checkLike();
    checkPrivacy();
    checkFirstName();
    checkName();
    checkMovie();
}

//Envoi de mail - Alexei

function mailAlex() {
    if (navigator.language === "fr") {
        let d = new Date();
        let subject = d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear() + " : " + d.getHours() + "h" + d.getMinutes();
        document.getElementById("mailtoalex").href = "mailto:alexei.czornyj@etu.univ-poitiers.fr?subject=" + subject
    } else {
        let d = new Date();
        let subject = d.getMonth() + "-" + d.getDay() + "-" + d.getFullYear() + " : " + d.getHours() + "h" + d.getMinutes();
        document.getElementById("mailtoalex").href = "mailto:alexei.czornyj@etu.univ-poitiers.fr?subject=" + subject
    }
}

function mailStyven() {
    if (navigator.language === "fr") {
        let d = new Date();
        let subject = d.getDay() + "-" + d.getMonth() + "-" + d.getFullYear() + " : " + d.getHours() + "h" + d.getMinutes();
        document.getElementById("mailtoalex").href = "mailto:styven.drui@etu.univ-poitiers.fr?subject=" + subject
    } else {
        let d = new Date();
        let subject = d.getMonth() + "-" + d.getDay() + "-" + d.getFullYear() + " : " + d.getHours() + "h" + d.getMinutes();
        document.getElementById("mailtoalex").href = "mailto:styven.drui@etu.univ-poitiers.fr?subject=" + subject
    }
}
//Affichage/suppresion d'une section du plan de site - Alexei

function hide() {
    let item = document.getElementById("container");
    if (item.style.display === "") {
        item.style.display = "none"
    } else {
        item.style.display = ""
    }
}