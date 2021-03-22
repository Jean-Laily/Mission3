// Note: {} Pilote la simulatin de connexion

/**
* @file connexion.js
* @author Yann Le Gall
* @version 1.0
*/

/**
* Bloque la possibilité de connexion au bout de trois
* mauvaises tentatives.
*/
$(()=>{
	$(document).ready(()=>{
		
		$('#btn_inscription').on('click', ()=>{
			window.location.href = "inscription.html";
		});
	});
	let bloque = 3;
	$('#btn_connexion').on('click', ()=>{
		if(bloque != 0){
			let $login = $('#login').val();
			let $password = $('#password').val();
			if(verifIdentifiant($login, $password)) {
				bonjourUtilisateur();
				retourIndex();
			} else {
				bloque--;
			}
		} else {
			$('#btn_connexion').attr('disabled', 'disabled');
			$('#erreur').text(messages(8)).css({color: 'red'});
		}
	});
});