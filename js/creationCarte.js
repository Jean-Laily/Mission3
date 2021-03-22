const srcAlbum = "./assets/albums/"; // endroit ou chercher les images des albums

/*
M : creer carte
O : rien
I : titre, id, prix
*/

function creationCarte(titre, id, prix){

    var src = getImageAlbum(id);

    var divCol = $('<div/>', {
        class: 'col-12 col-sm-4 my-3 my-sm-0 pb-3',
    });

    var divCard = $('<div/>', {
        class: 'card text-center'
    });

    var img = $('<img />', {
        src: src,
        id: 'album_'+id,
        class: "card-img-top img-fluid",
        alt: 'Image',
        height: '400'
    });  

    // var divCardImgOver = $('<div/>', {
    //     class: 'card-img-overlay d-flex justify-content-end align-items-end'
    // });

    var btnCard = $('<button/>', {
        type: 'button',
        class: 'btn btn-light rounded-rectangle',
        autocomplete: "off"
    });
    btnCard.attr('data-toggle', 'button');
    btnCard.attr('aria-pressed', 'false');

    var imgCardIcon = $('<img />', {
        src: './assets/icons/cart-plus.svg',
        alt: '',
        width: '22',
        height: '22',
        title: 'addPanier'
    });

    var divCardBody = $('<div/>',{
        class: 'card-body'
    });

    var cardTitle = $('<h5/>', {
        class: 'card-title col-md d-none d-md-block',
        style: 'font-size:2vh',
        text : titre
    });

    var cardPrice = $('<p/>', {
        class: 'card-text',
        class: 'text-danger',
        text: prix + ' €'
    }); 

    var a = $('<a/>', {
        href: '#',
        numalbum: id,
    });

    var iconUp = $('<img >',{
        src: './assets/icons/arrow-bar-up.svg'
    });

    /*Création d'une carte */

    divCol.appendTo($('.cardplace'));
    divCard.appendTo(divCol);
    a.appendTo(divCard);
    img.appendTo(a);
    divCardBody.appendTo(divCard);
    cardTitle.appendTo(divCardBody);
    cardPrice.appendTo(divCardBody);
    btnCard.appendTo(divCardBody);
    $('<span/>', {
        class: 'd-none d-md-inline',
        text: 'Ajouter'        
    }).appendTo(btnCard);
    imgCardIcon.appendTo(btnCard); 

    console.log("carte générer OK!");
};

/*
M: Récupere une image
O: src
I: id
*/

function getImageAlbum(id){

    var album = albums.get(id);

    var serie = series.get(album.idSerie);
    
    var auteur = auteurs.get(album.idAuteur);    

    var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

    nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

   
    var src = srcAlbum + nomFic + ".jpg";

    return src;
};