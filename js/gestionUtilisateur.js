// Note: {} Pilote la gestion de la page utilisateur

/**
* @file gestionUtilisateur.js
* @author Yann Le Gall
* @version 1.0
*/

$(()=>{
	$(document).ready(()=>{
		$('#btn_valider').hide();
		bonjourUtilisateur();
		$('#btn_').attr('id', 'btn_modifier').text('Modifier');
		afficheInfos();

		$('#btn_modifier').on('click', ()=>{
			$('.form-control').removeAttr('disabled');
			$('#btn_valider').show();
			$('#btn_modifier').hide();
		});

		$('#btn_valider').on('click' ,()=>{
			recupInfos();
			afficheInfos();
			bonjourUtilisateur();
			$('.form-control').attr('disabled', 'disabled');
			$('#message').css({color: 'green'}).text(messages(6));
			setTimeout(()=>{
				$('#message').css({color: 'green'}).text('');
			}, 5000)
			$('#btn_modifier').show();
			$('#btn_valider').hide();
		});

		$('#btn_retour').on('click', ()=>{
			retourIndex();
		});

		$('#deconnexion').on('click', ()=>{
			deconnexion();
		});
	});
});