/*
*    main.js
*/

w = 40
h = 100

var data = [ 25, 20, 15, 10, 5 ]

var svg = d3.select( '#chart-area' ).append( 'svg' )
  .attr( 'widt', 400 )
  .attr( 'height', 400 );

var rect = svg.selectAll( 'rect' )
  .data(data);

rect.enter().append( 'rect' )
  .attr( 'x', ( d, i ) => { return w * i + w * i } )
  .attr( 'y', ( d ) => { return h - d } )
  .attr( 'width', w )
  .attr( 'height', ( d ) => { return d } )
  .attr( 'fill', 'red' );


