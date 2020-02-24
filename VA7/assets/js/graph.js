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
    var data = {
		x: unpack(rows, 'audio_length'),
		y: unpack(rows, 'db'),
		mode: 'lines+markers',
		type: 'scatter'
	};

	Plotly.newPlot('graph3', data)
});

// tone visual

// scatterplot
