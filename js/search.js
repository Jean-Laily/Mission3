/** AFFICHER rechercher par auteur, titre, ... 
*   LIRECLAV @saisi
*   RECHERCHER la valeur de @saisi dans le tableau ALBUM
*   RECUPERER les données trouver
*   AFFICHER les resultats tel que ( titre, auteur et prix)
*   *prevoir le cas ou la saisi demander n'existe pas
*/

//init var
var saisi ;

$(document).ready(function(){       //.ready()
    
	/**
	* M: Permet de rechercher depuis l'input un nom de titre ou de serie
	* O: @Param NULL
	* I: @Param NULL
	*
	*/
    $("#saisiRecherche").on('keyup',function(event){
        saisi = $(this).val().toLowerCase();      //valeur de sorti de l'imput type=Search
        $('.cardplace *').filter(function(){
            $(this).toggle($(this).children().html().toLowerCase().indexOf(saisi) > -1) 
             console.log($(this));
        });
			
			//ce methode permet de recherche un auteur et tous les bd qu'il a écrit (contrainte le nom doit etre exacte )
        // // Recherche des albums de l'auteur 
        // for (var [idAlbum, album] of albums.entries()) {
        //     //recherche un auteur dans la tableau auteurs[]
        //     for(var [idAuteur, auteur] of auteurs.entries()) {
        //         if(album.idAuteur == idAuteur) {
        //             if(saisi == auteur.nom){
        //                 console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom);
        //             }else{
        //                 console.log("données invalide");
        //             }
        //         }
        //     }
				//ce methode permet de recherche un série et tous les numero existant(contrainte le nom doit etre exacte )
        //     //recherche depuis le nom d'une serie 
        //     for(var [idSerie, serie] of series.entries()){
        //         if(album.idSerie == idSerie){
        //             if(saisi == serie.nom){
        //                 console.log(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteur.get(auteur.idAuteur).nom)
        //             }
        //         }
        //     }
        // }

        // <script> // script example jquery (site officiel) 
        // $(document).ready(function(){
        //   $("#myInput").on("keyup", function() {
        //     var value = $(this).val().toLowerCase();
        //     $("#myTable tr").filter(function() {
        //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //     });
        //   });
        // });
        // </script>

    });//fin de l'event on keyup 

});//fin de la methode ready

