TESTER = document.getElementById('tester');
Plotly.newPlot( TESTER, [{
x: [1, 2, 3, 4, 5],
y: [1, 2, 4, 8, 16] }], {
margin: { t: 0 } } );

d3.csv("/country.csv", function(data) {
    console.log('bye');
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        console.log(data[i]);
        console.log('Hi');
    }
});


console.log('Hi');