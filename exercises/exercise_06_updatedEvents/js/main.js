/*
*    main.js
*/

console.log('hola')

d3.json( 'data/revenues.json' ).then( ( data ) => {
  const width = 400;
  const g = d3.select( '#chart-area' ).append( 'svg' )
    .attr( 'width', width )
    .attr( 'height', width );

  data.forEach( ( d ) => {
    d.revenue = +d.revenue;
  });

  var bars = g.selectAll( 'rect' ).data( data )
    .enter( )
    .append( 'rect' )
    .attr( 'x', ( d ) => {
      return x( d.mont );
    })
    .attr( 'fill', 'yellow' );

  d3.interval( ( ) => {
    console.log( 'hello world' );
  }, 1000);
}).catch( ( error ) => {
  console.log( error );
});









 





