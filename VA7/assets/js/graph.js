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

    // scatterplot
	var data = [{
		x: unpack(rows, 'audio_length'),
		y: unpack(rows, 'db'),
		text: unpack(rows, 'country'),
		mode: 'markers',
		marker: {
			// color: colors_mapped,
			opacity: 0.5,
			size: 5,
			line: {
				color: 'rgb(0, 0, 0)',
				width: 1
			}
		},
		showlegend: false
	}];
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
