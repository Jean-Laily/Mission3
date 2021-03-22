/** Ce qu'on veut faire
 * Eventlistener lors d'un clic sur une image cible
 * Récupèrer id lié à l'image et lance l'affichage dynamique
 * avec tout les infos disponible pour l'image ciblé
 */

/*********************** Test Labo unitaire avec donnée en dur ********************************/
// creationDetailHtml();
// recupID("1");

//init & affect variable
const image = "./assets/albums/";   // cible l'emplacement des images (Version Grand)



$(document).ready(function(){	
    /**
     * M: Cette fonction permet de ciblé dans le DOM toutes les <a/> de la class @cardplace
	 * et lors de l'event Clic on récupére l'ID de l'attribut numalbum et par la meme occasion 
	 * on remplace tout ce qui se trouve dans la class par une chaine de caratère vide.
	 * On appel ensuite les fonctions créationDetail(),recupID() afin de généré les details d'une image
     * O: @param NULL
	 * I: @param e => ce parametre 'e' permet de lancer la methode preventDefault().
     */
    $('.cardplace a').click(function(e){
        var numIDAlbum = $(this).attr('numalbum');  //retourne la valeur qui se trouve dans l'attribut ciblé
        $('.cardplace').html('');   //remplace tout le contenu de la class .cardplace par "" chaine carac vide
        // console.log(numIDAlbum);
        creationDetailHtml();   //fonction permetant de créer un ensemble de code htlm depuis la class .cardplace
        recupID(numIDAlbum);    //recupère la valeur de la variable @numIDAlbum pour faire la recherche
        e.preventDefault();     //Annule le comportement par defaut d'une balise <a/>
    });
    console.log("listener installé");   //Debuging console

    /**
    * M: Permet la lecture des informations dans le tableau Albums[] fournir et affiche les inforamtions ciblé, 
	* dans la page HTML  
    * O: @param NULL
    * I: @Param @num    =>   correspond à l'id de l'albums[]
    */
    function recupID(num){
        
        //lecture du tableau depuis une ID précise
        var album = albums.get(num);
        var serie = series.get(album.idSerie);                          //récupère l'idSerie depuis Albums[]
        var auteur = auteurs.get(album.idAuteur);                       //récupère l'idAuteur depuis Albums[]
        var nomImage = serie.nom+"-"+album.numero+"-"+album.titre;      //récupère les informations nécessaires pour avoir le nom de l'image voulu
        
        //Expression regulière de nomImage afin de retirer ce qui defini entre (/ /g) et de le remplace par ChaineCarVoid
        nomImage = nomImage.replace(/'|!|\?|\.|"|:|\$/g, "");

        //Envoie des données du tableau vers la page HMTL avec methode .TEXT()
        $("#imgSerie").attr("src", image + nomImage+".jpg");
        $("#nomSerie").text(serie.nom);
        $("#imageTitre").text(album.titre);
        $("#nomAuteur").text("Auteur BD: "+auteur.nom);
        $("#numSerie").text("Numéro Serie: "+album.numero);
        $("#prixBd").text("Prix: "+album.prix +" €");

        //console.log("Titre: "+album.titre+", Serie de: "+serie.nom+", De l'auteur: "+auteur.nom+"Valeur de nomImage: "+nomImage);
    };

   
    /**
     * M: Permet de créer de facon dynamique une parti de page se trouvant dans index.html
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
