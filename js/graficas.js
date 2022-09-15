window.onload = function() {
let val = parseInt(localStorage.getItem('rows'));
function elementsTags(){
    let proof_total = val-1;
    const array_y = [];
    let counter = 0;
    let percentage = 0;
    for(let i = 0; i < proof_total; i++){
        percentage = (Math.random()*5) + 1;
        array_y.push({
            y:percentage,
            label: `entrevistador-${i+1}`,
        });
    }
    return array_y;
} 

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Experiencia de candidatos"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: elementsTags(),
	}]
});
chart.render();

var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Valoración"
	},
	axisY: {
		title: "desempeño"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		legendText: "candidatos",
		dataPoints: elementsTags(),
	}]
});
chart2.render();

};