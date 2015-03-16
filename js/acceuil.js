hauteurImgPrincipalOrigine = 943;
largeurImgPrincipalOrigine = 400;
ratioImgPrincipal = hauteurImgPrincipalOrigine/largeurImgPrincipalOrigine;

$('document').ready(function(){
	redimentionnerImage();
	$(window).resize(function() {
		redimentionnerImage();
	});

	
});

function afficherInputRecherche(){
	if ($('#recherche').css('display') == 'none') {
	$('#recherche').css('display', 'inline');
	$('#rechercheDiv').css('display', 'inline');
	$("recherche").focus();}
	

}

// Inutile ?
function enleverInputRecherche(){
	$('#recherche').css('display', 'none');
	$('#rechercheDiv').css('display', 'none');
}

function redimentionnerImage(){
	newWidth = $(window).width();
	newHeight = $(window).width();
	
	if(newWidth > largeurImgPrincipalOrigine){
		newWidth = largeurImgPrincipalOrigine;
	}

	if(newHeight > hauteurImgPrincipalOrigine){
		newHeight = hauteurImgPrincipalOrigine;
	}

	var coord = redimensionImage(largeurImgPrincipalOrigine,hauteurImgPrincipalOrigine,newWidth,newHeight);


	$("a [id*=imgPrincipal]").each(function (){
		this.setAttribute("width",coord[1]);
		this.setAttribute("height",coord[0]);
	});
}



function redimensionImage(largeur, hauteur, largeurc, hauteurc) {
    coord=new Array(2);
    ratio=hauteur/largeur;
    //si l'image réelle est plus petite en largeur et hauteur
    if (largeur < largeurc && hauteur < hauteurc) {
        while (largeur < largeurc && hauteur < hauteurc) {
            largeur++;
            hauteur=Math.round(largeur*ratio);
        }
    } else {
        while (largeur > largeurc || hauteur > hauteurc) {
            largeur--;
            hauteur=Math.round(largeur*ratio);
        }
    }
    coord[0]=largeur;
    coord[1]=hauteur;
    ratioImgPrincipal = hauteur/largeur
    return(coord);
}