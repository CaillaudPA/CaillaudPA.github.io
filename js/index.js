var hauteurImgPrincipalOrigine = 943;
var largeurImgPrincipalOrigine = 400;
var ratioImgPrincipal = hauteurImgPrincipalOrigine/largeurImgPrincipalOrigine;

var afficherBarreRecherche = false;

$('document').ready(function(){
	redimentionnerImage();
	$(window).resize(function() {
		redimentionnerImage();
	});
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

function redimentionnerImage(){
	$("a [id*=imgPrincipal]").each(function (){
		largeur = $(window).width();

		var coord = redimensionImage($(this).width(), $(this).height(), $(window).width(), $(window).height());
		if(coord[1]<800){
			this.setAttribute("width",coord[0]);
			this.setAttribute("height",coord[1]);
		}
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


function recupGet(nomCle){

	var url = document.URL;
	var tmp = url.split(".html?")[1];
	tmp = tmp.split("&");

	var positionCle = -1;

	for (var i = tmp.length - 1; i >= 0; i--) {
		if(tmp[i].search(nomCle)>=0){
			positionCle = i;
			break;
		};
	};

	if (positionCle == -1) {
		return "";
	}else{
		return tmp[positionCle].split("=")[1];
	};
}

var index = 0;
function reloadJS(){
	var scriptElement = document.createElement('script');
	scriptElement.type = 'text/javascript';
	scriptElement.src = src + '?' + index++;
	document.getElementsByTagName('head')[0].appendChild(scriptElement);
}