// https://api.openweathermap.org/data/2.5/weather?q= @ville &appid= @apiKey               //lien de l'api meteo de base

const apiKey = "5e915e1c3efea347f84e73525e6d1f3b";
var metricTemp = "units=metric"
var city = $("#nomCitie");                                 
var temp = $("#temperature");
var saisiNomVille ; 

$(function(){                   //ecriture alternative de $(document).ready(function(){})
    let icons ;
    let temper;
    let widgetIcons;
    

    $("#saisiVille").change(function(){                                                      //On fait ce qui suit après un click de souris sur input#saisiVille


        saisiNomVille = $("#saisiVille").val(); 

        $.ajax({
            //param @url définit l'url à qui on doit envoyer la requête
            url: "https://api.openweathermap.org/data/2.5/weather?q="+saisiNomVille+"&"+metricTemp+"&appid="+apiKey,
    
            //param @type définit le type d'envoie de notre requête soit en (get ou en post)
            type:"GET",
    
            //param @dataType défini quel type de donnée on veut obtenir (json ,xml ,html ...)
            dataType: "json",
    
            //param @success ici executera le code si tout est ok
            success: function(response){
                // console.log("est ok");
                city = city.text(response.name);                                                                          //comme innerHTML ici on ajout une des données récupérés de l'API et on l'affiche
                icons = response.weather[0].icon;                                                                         //retourne la valeur de l'icon du tableau weather
                widgetIcons = icons+".png";                                                                               // concaténation de la valeur @icons + string
                $("#iconWidget").css("background", "url(http://openweathermap.org/img/wn/"+widgetIcons),                   //ajout url à la propriété de background
                temper = response.main.temp;                                                                               //récupère la valeur de main temp
                temper = temper.toFixed(0)                                                                                 //valeur en float, on n'affiche aucun nombre après la virgule
                temp = temp.text(temper+"°C");                                                                             //concaténation de la valueur temp + string
            },
    
            //param @error ici executera le code si tout n'est pas ok
            error: function(){
                // alert("Ville non trouvée");
                city = city.text("Ville inexistant"); 
            },
    
        });//fin Ajax requête
    
    })//fin d'eventListener onChange de jquery

})//fin de .ready


