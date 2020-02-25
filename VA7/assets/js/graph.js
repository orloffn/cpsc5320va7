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
        autocolorscale: true,
		colorbar: {
			title: 'Speech Length (s)'
		}
    }];

    var layout = {
		title: '',
		geo: {
			projection: {
				type: 'robinson'
			}
		},
		margin: {
			l: 50,
			r: 50,
			b: 10,
			t: 30,
			pad: 4
		},
    };

    Plotly.newPlot("graph1", data, layout, {showLink: false});

    // tone visual
    var data = [{
		type: 'box',
		y: unpack(rows, 'audio_length'),
		transforms: [{
			type: 'groupby',
			groups: unpack(rows, 'country'),
			styles: [
				{target: 'usa', value: {marker: {color: 'blue'}}},
				{target: 'russia', value: {marker: {color: 'red'}}},
				{target: 'algeria', value: {marker: {color: 'black'}}}
			]
		}]
    }];
    var layout = {
    	showlegend: false
    };

    Plotly.newPlot('graph2', data, layout)

    // scatterplot
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
	var layout = {
		xaxis: {
			title: {
				text: 'Speech Length (s)',
				font: {
					family: 'Courier New, monospace',
					size: 18,
					color: '#7f7f7f'
				}
			},
		},
		yaxis: {
			title: {
				text: 'Loudness (dB)',
				font: {
					family: 'Courier New, monospace',
					size: 18,
					color: '#7f7f7f'
				}
			}
		},
		margin: {
			l: 50,
			r: 50,
			b: 50,
			t: 30,
			pad: 4
		},
	};
	Plotly.newPlot('graph3', data, layout)
});
