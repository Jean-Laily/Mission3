// Note: {} Controle 

/**
* @file index.js
* @author Yann Le Gall
* @version 1.0
*/

$(()=>{
	 $(document).ready(()=>{
		if(sessionStorage.length != 0) {
			$('#utilisateur').text('');
			$('#lien_connexion').attr('href', 'gestionCompte.html');
			bonjourUtilisateur();
		} else {
			$('#utilisateur').text('Se connecter');
			$('#lien_connexion').attr('href', 'connexion.html');
		}
	});
});







	