
function verif()
{
   var male = document.getElementById("mr").checked;
   var female = document.getElementById("miss").checked;

   if(!male && !female) {
    alert("vous devez selectionné votre civilité");
    document.formul.mr.focus();
    document.formul.mr.style.backgroundColor = "red";
    
    return false;
   }


    if (document.getElementById('firstname').value == "")
    { 

        alert("attention un des champs doit être rempli");
        document.formul.firstname.focus();
        document.formul.firstname.style.backgroundColor = "red";

    return false;
    }

    if (document.getElementById("lastname").value == "")
    { 

        alert("attention un des champs doit être rempli");
        document.formul.lastname.focus();
        document.formul.lastname.style.backgroundColor = "red";

    return false;
    }


    if (document.getElementById("adresse").value == "")
    { 

        alert("attention un des champs doit être rempli");
        document.formul.adresse.focus();
        document.formul.adresse.style.backgroundColor = "red";

    return false;
    }

    if(document.getElementById("mail").value == "")
    { 

        alert("attention un des champs doit être rempli");
        document.formul.mail.focus();
        document.formul.mail.style.backgroundColor = "red";

    return false;
    }

    var mobile = /^(01|02|03|04|05|06|07|08|09|0033|\+33)[0-9]{8}/;
        if (mobile.test(document.getElementById("tel").value)) 
        {
            return true;}

        else{
            alert("entrez un numéro de telephones valide");
            document.formul.tel.focus();
            document.formul.tel.style.backgroundColor = "red";
            return false;
        }

        var checked = document.getElementById("tnc").checked;
        if (!checked) {

            alert("vous devez accepté les mentions légales!");
            document.formul.tnc.focus();
            document.formul.tel.style.backgroundColor = "red";
            return false;
        }
}