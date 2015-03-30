
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
				alert("collection");
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