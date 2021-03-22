// Note: {} Pilote l'inscription

/**
* @file inscription.js
* @author Yann Le Gall
* @version 1.0
*/


$(()=>{
	$(document).ready(()=>{
		$('#btn_valider').on('click', ()=>{
			let $tabChamps = recupInfos();
			if(verifChamps($tabChamps)) {
				console.log('test');
				$('form').remove();
				$('h2').remove();
				$('#message').text(messages(4));
				setTimeout(()=>{
					retourIndex();
				}, 5000);
			}
		});
		$('#btn_retour').on('click', ()=>{
			retourIndex();
		});

		$('#voir_password').on('mouseenter', ()=>{
			$('#password').attr('type', 'text');
		});
		$('#voir_password').on('mouseleave', ()=>{
			$('#password').attr('type', 'password');
		});
	});
});