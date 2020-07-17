import genericSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/generic/genericSyntaxParser';

process.argv.forEach(function (vl, index, array) {
  // console.log(index + ': ' + vl);
    //console.log(
         JSON.stringify(
         genericSyntaxParser.getLiterals(vl, '')
       );
    //);
    var loc=genericSyntaxParser.getLiterals(vl, '');
    var query=vl
    //console.log(loc)
    if(loc.length > 0) {
        loc.forEach(function (eloc, index1, array1) {
        //console.log(eloc)
        var lit = vl.substr(eloc.first_column, eloc.last_column-eloc.first_column);
        query=query.replace(lit, "?")
        //console.log(lit)
        
       });
      console.log(query)
    }
});

