/*
*    main.js
*/

const size = 400;

var svg = d3.select( '#chart-area' ).append( 'svg' )
  .attr( 'widt', size )
  .attr( 'height', size );

d3.json( 'data/ages.json' ).then( ( data ) => {
  data.forEach( ( d ) => {
    d.age = +d.age;
  });
  console.log( data );

  let currPos = -40;
  let circle = svg.selectAll( 'circle' )
    .data(data);

  circle.enter().append( 'circle' )
    .attr( 'cy', size / 2 )
    .attr( 'cx', ( d ) => {
      currPos += ( d.age + 5 ) * 4;
      return currPos
    } )
    .attr( 'r', ( d ) => { return d.age * 2.5 } )
    .attr( 'fill', 'red' );
});


