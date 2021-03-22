
$(document).ready(function() { 
    depart();
});

/*
M : Filtrer les BD
O : rien
I : rien
*/

$('li').on("click", function(){

    $('.cardplace').html(''); //

    // on transforme les obejt Map() en Array()
    var album = Array.from(albums);
    var serie = Array.from(series);
    var auteur = Array.from(auteurs);
    
    //filtre les albums

    //soit par série
    if($(this).children().text() === "Serie"){
        
        for(var i = 0; i < serie.length; i++){ 
            var h2 = $('<h2/>').attr('class', 'col-12 text-center')
                .text(serie[i][1].nom)
                .appendTo($('.cardplace'));
            for(var j = 0; j < album.length; j++){
                if(serie[i][0] === album[j][1].idSerie){
                    creationCarte(album[j][1].titre, album[j][0], album[j][1].prix);
                }
            }       
        }
    }
    //soit par auteur
    else if($(this).children().text() === "Auteur"){
        
        for(var i = 0; i < serie.length; i++){ 
            var h2 = $('<h2/>').attr('class', 'col-12 text-center')
                .text(auteur[i][1].nom)
                .appendTo($('.cardplace'));
            for(var j = 0; j < album.length; j++){
                if(auteur[i][0] === album[j][1].idAuteur){
                    creationCarte(album[j][1].titre, album[j][0], album[j][1].prix);
                }
            }       
        }
    }

    //soit par titre
    else if ($(this).children().text() === "Titre"){
        $('#pagination').show();
        for(var i = 0; i < album.length; i++){
            creationCarte(album[i][1].titre, album[i][0], album[i][1].prix);
        }       
    }
});


/*
M: affiche une liste de BD aléatoire
O: rien
I: rien
*/
function depart(){

    var album = Array.from(albums);

    album.sort( () => Math.random() - .5);
    var imin = 0;
    var imax = 18;

    for(var i = imin; i < imax; i++){ 
        creationCarte(album[i][1].titre, album[i][0], album[i][1].prix);
    };
}