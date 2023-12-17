

var scoresBtn = document.querySelector( 
	"#view-high-scores"
); 

 
// Rank previous scores in order by 
// Retrieving scores from localStorage 

window.onload = function printHighscores() { 
	var highscores = 
		JSON.parse( 
			window.localStorage.getItem( 
				"highscores"
			) 
		) || []; 
	highscores.sort(function (a, b) { 
		return b.score - a.score; 
	}); 
	highscores.forEach(function ( 
		score 
	) { 
		var liTag = 
			document.createElement( 
				"li"
			); 
		liTag.textContent = 
			score.name + 
			" - " + 
			score.score; 
		var olEl = 
			document.getElementById( 
				"highscores"
			); 
		olEl.appendChild(liTag); 
	}); 
} 

// Clear previous scores when users click clear 
function del(){
	localStorage.clear();
	window.location.reload();
}





