// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:




var getElementsByClassName = function(className){
  var x, i, results = [];
  if( arguments.length === 1 ) x = document.childNodes;
  else x = arguments[1].childNodes; 

  for( i = 0; i < x.length; i++ ){
    if(x[i].classList !== undefined && x[i].classList.contains(className)) {
      results = results.concat( x[i] );
    }
    if( x[i].childNodes.length > 0 ) results = results.concat( getElementsByClassName( className,  x[i]  ) );
  }
  return results;
};
