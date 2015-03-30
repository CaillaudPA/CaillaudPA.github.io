
$('document').ready(function(){

});

function afficherInputRecherche(){
	$('#recherche').css('display', 'inline');
	$('#rechercheDiv').css('display', 'inline');
	document.getElementById("recherche").focus();
}


function enleverInputRecherche(){
	$('#recherche').css('display', 'none');
	$('#rechercheDiv').css('display', 'none');
	$('#loupeRecherche').removeClass("ui-btn-active");
}

function changementPage(){
	enleverInputRecherche();
}