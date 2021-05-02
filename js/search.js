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
    
    // saisi = Gaudin;   //labotest
    //for(var [idAuteur, auteur] of auteurs.entries()) {
        // console.log(auteur.nom)
        
    // }

    $("#saisiRecherche").on('keyup',function(event){
        saisi = $(this).val().toLowerCase();      //valeur de sorti de l'imput type=Search
        $('.cardplace *').filter(function(){
            $(this).toggle($(this).children().html().toLowerCase().indexOf(saisi) > -1) 
             console.log($(this));
        });
       
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

        //     //recherche depuis le nom d'une serie 
        //     for(var [idSerie, serie] of series.entries()){
        //         if(album.idSerie == idSerie){
        //             if(saisi == serie.nom){
        //                 console.log(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteur.get(auteur.idAuteur).nom)
        //             }
        //         }
        //     }
        // }

        // <script>
        // $(document).ready(function(){
        //   $("#myInput").on("keyup", function() {
        //     var value = $(this).val().toLowerCase();
        //     $("#myTable tr").filter(function() {
        //       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        //     });
        //   });
        // });
        // </script>

    });//fin de l'event onChange / change 

});//fin de la methode ready

