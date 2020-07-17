import genericSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/generic/genericSyntaxParser';

process.argv.forEach(function (vl, index, array) {
  // console.log(index + ': ' + vl);
    //console.log(
         JSON.stringify(
         genericSyntaxParser.getLiterals(vl, '')
       );
    //);
    var query=vl.toLowerCase().replace(/  +/g, ' ');
    var query_2=query;
    var loc=genericSyntaxParser.getLiterals(query, '');
    //console.log(loc)
    if(loc.length > 0) {
        loc.forEach(function (eloc, index1, array1) {
        //console.log(eloc)
        var lit = query_2.substring(eloc.first_column, eloc.last_column);
        query=query.replace(lit, "?")
        //console.log(lit)
        
       });
      console.log(query)
    }
});

