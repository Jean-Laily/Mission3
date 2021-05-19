/** Ce qu'on veut faire
 * Event lors d'un clic sur une image spécifique
 * récupère id lié a l'image et lance l'affichage 
 * avec tout les infos disponible pour l'image ciblé
 */

/*********************** Test Labo unitaire avec donnée en dur ********************************/
// creationDetailHtml();
// recupID("1");

//init & affect variable
// var numIDAlbum;
const image = "./assets/albums/";   // cible l'emplacement des images (Version Grand)



$(document).ready(function(){
    /**
     * 
     * 
     */
    $('.cardplace a').click(function(e){
        var numIDAlbum = $(this).attr('numalbum');  //retourne la valeur qui se trouve dans l'attribut ciblé
        $('.cardplace').html('');   //remplace tout le contenu de la class .cardplace par "" chaîne carac vide
        // console.log(numIDAlbum);
        creationDetailHtml();   //fonction permettant de créer un ensemble de code html depuis la class .cardplace
        recupID(numIDAlbum);    //récupère la valeur de la variable @numIDAlbum pour faire la recherche
        e.preventDefault();     //Annule le comportement par défaut d'une balise <a/>
    });
    console.log("listener installé");   //Debugging console

    /**
    * M: Permet la lecture des informations dans le tableau Album et les affiches dans la page HTML
    * O: @param NULL
    * I: @Param @num    =>   correspond à l'id de l'albums[]
    */
    function recupID(num){
        
        //lecture du tableau depuis une ID précise
        var album = albums.get(num);
        var serie = series.get(album.idSerie);                          //récupère l'idSerie depuis Albums[]
        var auteur = auteurs.get(album.idAuteur);                       //récupère l'idAuteur depuis Albums[]
        var nomImage = serie.nom+"-"+album.numero+"-"+album.titre;      //récupère les informations nécessaire pour avoir le nom de l'image ciblé
        
        //Expression regulière de nomImage afin de retirer ce qui defini entre (/ /g) et de le remplace par ChaineCarVoid
        nomImage = nomImage.replace(/'|!|\?|\.|"|:|\$/g, "");

        //Envoie des données du tableau vers la page HMTL avec methode .TEXT()
        $("#imgSerie").attr("src", image + nomImage+".jpg");
        $("#nomSerie").text(serie.nom);
        $("#imageTitre").text(album.titre);
        $("#nomAuteur").text("Auteur BD: "+auteur.nom);
        $("#numSerie").text("Numéro Serie: "+album.numero);
        $("#prixBd").text("Prix: "+album.prix +" €");

        console.log("Titre: "+album.titre+", Serie de: "+serie.nom+", De l'auteur: "+auteur.nom+"Valeur de nomImage: "+nomImage);
    };

   
    /**
     * M: Permet de créer de façon dynamique 
     * une parti de page html afin d'afficher le detail d'une BD depuis l'id récupérer
     * O: @NULL
     * I: @NULL
     */
    function creationDetailHtml(){
        
        var divUn = $('<div/>',{
            class : 'col d-flex',
        });

        var imgDiv = $('<div/>',{
            class : 'col-md',
        });

        var img1 = $('<img/>',{
            class : 'img-fluid',
            id:'imgSerie', 
            alt:'image',
        });

        var divDeux = $('<div/>',{
            class : 'col-sm col-md d-flex flex-column align-items-start affiche',
        });

        var h2Div = $('<h2/>',{
            id:'nomSerie',
            class:'d-none d-md-block',
        });

        var h3Div = $('<h3/>',{
            id:'imageTitre',
        }); 
        
        var h6Div = $('<h6/>',{
            id:'nomAuteur',
        });

        var divTrois = $('<div/>',{
            class : 'col-md d-flex justify-content-between align-items-end',
        });

        var p1Div = $('<p/>',{
            id:'numSerie',
        });

        var p2Div = $('<p/>',{
            id:'prixBd',
        });

        var divQuatre = $('<div/>',{
            class : 'card-img-overlay d-flex justify-content-end align-items-end',
            style : 'width: 100%; height: 100%',
        });

        var bouton = $('<button/>',{
            class : 'btn btn-light rounded-rectangle mb-5',
            type:'button',
        });

        var img2 = $('<img/>',{
            src:'./assets/icons/cart-plus.svg',
            width:'22',
            height:'22', 
            title:'addPanier',

        });

        var span1 = $('<span/>', {
            text: 'ajouter',
            class: 'd-none d-sm-inline'
        });

        var retourne = $('<a/>',{
            type:'button',
            href:'index.html', 
            text: 'Retour',
            class: 'btn btn-success h-100' 
        });

        var divCinq = $('<div/>',{
            class : 'h-100',
        });

            //parti affichage sur la page web
            // retourne.appendTo($('.cardplace'));
            divCinq.appendTo($('.cardplace'));
                retourne.appendTo(divCinq);
        divUn.appendTo($('.cardplace'));
            imgDiv.appendTo(divUn);
                img1.appendTo(imgDiv);
            //fin imgDiv
            divDeux.appendTo(divUn);
                h2Div.appendTo(divDeux);
                h3Div.appendTo(divDeux);
                h6Div.appendTo(divDeux);
                divTrois.appendTo(divDeux);
                    p1Div.appendTo(divTrois);
                    p2Div.appendTo(divTrois);
                //fin divTrois
                divQuatre.appendTo(divDeux);
                    bouton.appendTo(divQuatre);
                        img2.appendTo(bouton);
                        span1.appendTo(bouton);
                    //fin bouton
                //fin divQuatre
            //fin divDeux
        //fin divUn
        console.log("création de la carte fait");
    };

    
}); 
