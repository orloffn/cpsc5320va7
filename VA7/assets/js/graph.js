Plotly.d3.csv('assets/js/country.csv', function(err, rows){
	// map visual
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'country'),
        z: unpack(rows, 'audio_length'),
        text: unpack(rows, 'country'),
        autocolorscale: true
    }];

    var layout = {
      title: '',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.newPlot("graph1", data, layout, {showLink: false});

    // tone visual

    // scatterplot
	// function onlyUnique(value, index, self) { 
	// 	return self.indexOf(value) === index;
	// }
	// var countries = unpack(rows, 'country').filter(onlyUnique)
	// var colors = []
	// for (var i = countries.length - 1; i >= 0; i--) {
	// 	colors.push('rgb(255, 112, ' + (12 + i) + ')')
	// }
	// var marker_cols = {}
	// countries.forEach((key, i) => marker_cols[key] = colors[i]);
	// var colors_mapped = [for (x of unpack(rows, 'country')) marker_cols[x]]
	// console.log(colors_mapped)

	/*
	var data = [{
		x: unpack(rows, 'audio_length'),
		y: unpack(rows, 'db'),
		text: unpack(rows, 'country'),
		mode: 'markers',
		marker: {
			opacity: 0.5,
			size: 5,
			line: {
				color: 'rgb(0, 0, 0)',
				width: 1
			}
		},
		showlegend: false
	}];

	Plotly.newPlot('graph3', data)
	*/

var data = [{
  type: 'scatter',
  x: unpack(rows, 'audio_length'),
  y: unpack(rows, 'db'),
  mode: 'markers',
  transforms: [{
    type: 'groupby',
    groups: unpack(rows, 'country'),
    styles: [
      {target: 'usa', value: {marker: {color: 'blue'}}},
      {target: 'russia', value: {marker: {color: 'red'}}},
      {target: 'algeria', value: {marker: {color: 'black'}}}
    ]
  }]
}]

Plotly.newPlot('graph3', data)
});
