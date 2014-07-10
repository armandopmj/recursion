// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	var t = typeof obj, result = "";
	
	if( t === "number" || t === "boolean" ) return String(obj);
	if( obj === undefined || obj === "function") return;
	if( obj === null ) return "null";
		
	if( t === "string" ) { 
		return (new String('"') + new String( obj ) + new String('"')).toString();
	}

	if( Object.prototype.toString.call( obj ) === '[object Array]' ){
		for(var i = 0; i < obj.length; i++) {
			result += stringifyJSON( obj[i] );
			if( i < obj.length - 1 ) result += ",";
		}
		return "["+ result + "]"
	}

	if( Object.prototype.toString.call( obj ) === '[object Object]' ){
	    for (var p in obj) {
	        if (obj.hasOwnProperty(p) && stringifyJSON( obj[p] ) !== undefined ) {
	        	result += stringifyJSON( p ) +':'+ stringifyJSON( obj[p] ) +",";
	        }
	    }
	    if(result === "") return "{}";
	    else return "{"+ result.slice(0, -1) +"}";
	}
};
