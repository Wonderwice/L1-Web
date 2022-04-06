
//Acceuil

function pictureLeft(){
    let name = document.getElementById('img').name;
    if ( name === "Iron Man") {
        document.getElementById('img').name = "Hulk";
        document.getElementsByClassName('affiche')[0].href = "Content/Collection/hulk.xhtml";
        document.getElementById('img').src = "Images/hulk.jpg";
        document.getElementById('img').alt = "Affiche de Hulk"
    } else{
        if (name === "Hulk"){
            document.getElementById('img').name = "Thor";
            document.getElementsByClassName('affiche')[0].href = "Content/Collection/thor.xhtml";
            document.getElementById('img').src = "Images/thor.jpg";
            document.getElementById('img').alt = "Affiche de Thor"
        } else{
            if (name === "Thor"){
                document.getElementById('img').name = "Captain";
                document.getElementsByClassName('affiche')[0].href = "Content/Collection/captain_america.xhtml";
                document.getElementById('img').src = "Images/captain-america.jpg";
                document.getElementById('img').alt = "Affiche de Captain America"
            } else{
                if (name === "Captain"){
                    document.getElementById('img').name = "Iron Man";
                    document.getElementsByClassName('affiche')[0].href = "Content/Collection/iron_man.xhtml";
                    document.getElementById('img').src = "Images/iron-man.jpg";
                    document.getElementById('img').alt = "Affiche de Iron Man"
                }
            }
        }
    }
}

function pictureRight(){
    let name = document.getElementById('img').name;
    if ( name === "Iron Man") {
        document.getElementById('img').name = "Captain";
        document.getElementsByClassName('affiche')[0].href = "Content/Collection/captain_america.xhtml";
        document.getElementById('img').src = "Images/captain-america.jpg";
        document.getElementById('img').alt = "Affiche de Captain America";
    } else{
        if (name === "Hulk"){
            document.getElementById('img').name = "Iron Man";
            document.getElementsByClassName('affiche')[0].href = "Content/Collection/iron_man.xhtml";
            document.getElementById('img').src = "Images/iron-man.jpg";
            document.getElementById('img').alt = "Affiche de Iron Man"
        } else{
            if (name === "Thor"){
                document.getElementById('img').name = "Hulk";
                document.getElementsByClassName('affiche')[0].href = "Content/Collection/hulk.xhtml";
                document.getElementById('img').src = "Images/hulk.jpg";
                document.getElementById('img').alt = "Affiche de Hulk"
            } else{
                if (name === "Captain"){
                    document.getElementById('img').name = "Thor";
                    document.getElementsByClassName('affiche')[0].href = "Content/Collection/thor.xhtml";
                    document.getElementById('img').src = "Images/thor.jpg";
                    document.getElementById('img').alt = "Affiche de Thor"
                }
            }
        }
    }
}

//Livre d'Or

function checkFirstName(){
    if (document.getElementById("firstname").value === ""){
        window.alert("Vous devez rentrer un prénom !")
    }
}

function checkName(){
    if (document.getElementById("name").value === ""){
        window.alert("Vous devez rentrer un nom !")
    }
}

function checkLike(){
    if ((document.getElementById("YES").checked === false) && (document.getElementById("NO").checked === false)){
        window.alert("Donnez nous votre retour sur notre travail !")
    }
}

function checkPrivacy(){
    if (document.getElementById("privacy").value === "..."){
        window.alert("Souhaitez-vous être publié ?")
    }
}

function checkNote(){
    if (document.getElementById("comment").value === "Vous pouvez écrire votre note ici. ;)"){
        window.alert("Laissez nous une petite note :)")
    }
}

function testAll(){
    checkNote();
    checkLike();
    checkPrivacy();
    checkFirstName();
    checkName();
}