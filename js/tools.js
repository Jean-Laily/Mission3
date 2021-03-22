// Note: {} Model et traitement

/**
* @file tools.js
* @author Yann Le Gall
* @version 1.0
*/

// Liste de membres exemple
var membres = new Map();
membres.set(1, {nom: "Wayne", prenom:"Bruce", mail: "gotham@city.bat", tel: "0692010203" ,login: "batman", password: "batman01"});
membres.set(2, {nom: "Laiho", prenom:"Alexi", mail: "childrenOfBodom@fin.com", tel: "0692010204" ,login: "children", password: "bodom"});
membres.set(3, {nom: "Taylor", prenom:"Corey", mail: "IOWA@city.us", tel: "0692010205" ,login: "numberZero", password: "unsainted"});
membres.set(4, {nom: "Farara", prenom:"Dez", mail: "coal@chamber.us", tel: "0692010206" ,login: "loco", password: "sway"});

/**
* Rôle: Récupère les données utilisateurs dans le "sessionStorage"
* et l'affiche.
* @see gestionUtilisateur.js
*/
var afficheInfos = ()=>{
	let $infos = JSON.parse(sessionStorage.getItem('utilisateur'));
	$.each($infos, ($cle, $valeur)=>{
		$(`#${$cle}`).val($valeur);
	});
}

/**
* Rôle: Récupère les données utilisateurs à l'inscription ou à la
* modification des informations utilisateurs.
* @see gestionUtilisateur.js
* @see inscription.js
* @see initialiserUtilisateur.js
* @return {Object} $tabChamps dans le cas d'une inscription
*/
var recupInfos = ()=>{
	if(sessionStorage.length != 0) {
		let $tabChamps = {
			nom: $('#nom').val(),
			prenom:  $('#prenom').val(),
			mail: $('#mail').val(),
			tel: $('#tel').val(),
			login: $('#login').val(),
			password: $('#password').val()
		}
		initialiserUtilisateur($tabChamps);
	} else {
		let $tabChamps = {
			nom: $('#nom').val(),
			prenom:  $('#prenom').val(),
			mail: $('#mail').val(),
			tel: $('#tel').val(),
			login: $('#login').val(),
			password: $('#password').val()
		}
		return $tabChamps;
	}
}

/**
* Rôle: Function regroupent les messages utlisés par l'application.
* @param {Int} $msg
* @see bonjourUtilisateur()
* @see connexion.js
* @see inscription.js
* @see gestionUtilisateur.js
* @return {String} $msg selon cas
*/
var messages = ($msg)=>{
	switch($msg) {
		case 1:
			$msg = "Erreur : Veuillez entrer un login et un mot de passe.";
			return $msg;
			break;
		case 2:
			$msg = "Erreur : Login ou mot de passe non valide.";
			return $msg;
			break;
		case 3:
			$msg = "* Champs requis";
			return $msg;
			break;
		case 4:
			$msg = "Inscription réussi. Redirection...";
			return $msg;
			break;
		case 5:
			$msg = "Bonjour ";
			return $msg;
			break;
		case 6:
			$msg = "Les informations ont bien été modifiés."
			return $msg;
			break;
		case 7:
			$msg = " * "
			return $msg;
			break;
		case 8:
			$msg = "Erreur : Trop d'essais incorrecte."
			return $msg;
			break;
		}
}

/**
* Rôle: Récupère les infos du membres, pour afficher un message
* personnalisé.
* @see index.js
* @see connexion.js
* @see gestinUtilisateur.js
*/
var bonjourUtilisateur = ()=>{
	let $infos = JSON.parse(sessionStorage.getItem('utilisateur'));
	$('#utilisateur').text(messages(5) + $infos.nom);	
}

/**
* Rôle: Function qui stock un membre dans le "sessionStorage"
* qu'il soit dans le " Map membres " ou en faisant une inscription
* @param {Int} $data (si membre Map)
* @param {Objet} $data (si membre inscription)
* @see verifIdentifiant()
* @see recupInfos()
*/
var initialiserUtilisateur = ($data)=>{
	if(typeof($data) == "number") {
		let $utilisateur = membres.get($data);
		let $tab = {
			nom: $utilisateur.nom,
			prenom:  $utilisateur.prenom,
			mail: $utilisateur.mail,
			tel: $utilisateur.tel,
			login: $utilisateur.login,
			password: $utilisateur.password
		}
		sessionStorage.setItem('utilisateur', JSON.stringify($tab));
	} else {
		sessionStorage.setItem('utilisateur', JSON.stringify($data));
	}
}

/**
* Rôle: Simule une connexion de membres inscrits
* avec l'aide de "Map membres".
* @param {String} $login
* @param {String} $password
* @see initialiserUtilisateur()
* @return {Boolean} true
*/
var verifIdentifiant = ($login, $password)=>{
	let $identifiantOk = false;
	let $id = 0;
	if($login == "" && $password == "") {
		console.log('test');
		$('#password').css({borderColor: 'red'});
		$('#login').css({borderColor: 'red'});
		$('#erreur').css({color: 'red'}).text(messages(1));
	} else {
		while(!$identifiantOk) {
			$id ++;
			let $membre = membres.get($id);
			if($membre.login == $login && $membre.password == $password) {
				$identifiantOk = true;
			} else {
				$('#erreur').css({color: 'red'}).text(messages(2));
				setTimeout(()=>{
					$('#erreur').css({color: 'red'}).text('');
				}, 5000);
			}
			
			if($id == membres.size) {
				break;
			}
		}
		if($identifiantOk) {
			initialiserUtilisateur($id);
			return true;
		}
	}
}

/**
* Rôle: Fait un petit contrôle des champs de saisie
* pour simuler une inscription de nouveau membre 
* @param {Object} $tabChamps
* @see inscription.js
* @return {Boolean} true
*/
var verifChamps = ($tabChamps)=>{
	let $check = 0;
	$.each($tabChamps, ($cle, $valeur)=>{
		if($valeur == "" || $valeur == " * " || $valeur == "*") {
			$(`#${$cle}`).css({borderColor: 'red'});
			$(`#${$cle}`).val(messages(7)).css({color: 'red'});
			$('#message').text(messages(3)).css({color: 'red'});
		}else {
			$(`#${$cle}`).css({color: 'black'});
			$(`#${$cle}`).css({borderColor: 'green'});
			$check ++;
		}
	});
	if($check == 6) {
		initialiserUtilisateur($tabChamps);
		return true;	
	}
}

/**
* Rôle: Supprime la session en cours et retourne à l'index.html
* @see gestionUtilisateur.js
*/
var deconnexion = ()=>{
	sessionStorage.clear();
	window.location.href= 'index.html';
}

/**
* Rôle: retourne à l'index.html
* @see gestionUtilisateur.js
* @see inscription.js
*/
var retourIndex = ()=>{
	window.location.href = "index.html";	
}