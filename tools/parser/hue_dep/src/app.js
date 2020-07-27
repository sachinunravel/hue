import genericSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/generic/genericSyntaxParser';
import calciteSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/calcite/calciteSyntaxParser';
import druidSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/druid/druidSyntaxParser';
import elasticsearchSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/elasticsearch/elasticsearchSyntaxParser';
import flinkSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/flink/flinkSyntaxParser';
import hiveSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/hive/hiveSyntaxParser';
import impalaSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/impala/impalaSyntaxParser';
import ksqlSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/ksql/ksqlSyntaxParser';
import prestoSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/presto/prestoSyntaxParser';
import phoenixSyntaxParser from 'hue/desktop/core/src/desktop/js/parse/sql/phoenix/phoenixSyntaxParser';


var express = require('express');
var app = express();
var fs = require("fs");


var parsers = {
"generic" : genericSyntaxParser, "calcite":calciteSyntaxParser, "druid":druidSyntaxParser,"elasticsearch":elasticsearchSyntaxParser, "flink":flinkSyntaxParser, "hive": hiveSyntaxParser, "impala":impalaSyntaxParser,
"ksql": ksqlSyntaxParser, "presto":prestoSyntaxParser, "phoenix":phoenixSyntaxParser
}

/**
 * Returns a hash code for a string.
 * (Compatible to Java's String.hashCode())
 *
 * The hash code for a string object is computed as
 *     s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 * using number arithmetic, where s[i] is the i th character
 * of the given string, n is the length of the string,
 * and ^ indicates exponentiation.
 * (The hash value of the empty string is zero.)
 *
 * @param {string} s a string
 * @return {number} a hash code value for the given string.
 */
function hashcode(s) {
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
  return h;
};

function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}  
app.use(express.json())
app.post('/parseQuery', function (req, res) {
  
  var start = Date.now();
  //console.log(req.body);
  //console.log("Parsers ========>" + process.argv[2])
  var parser = parsers[req.body.parser]
  //var loc1=parser.parseSyntax("select c1, `values` from tbl1", '');
  //console.log(loc1)
  //var loc2=parser.parseSyntax("select c1, `values` from tbl1", '');
  //console.log(loc2)

  // process.argv.forEach(function (vl, index, array) {
  // console.log(index + ': ' + vl);
    //console.log(
  //       JSON.stringify(
  //       parser.getLiterals(vl, '')
  //     );
    //);
    var query=req.body.query.toLowerCase().replace(/  +/g, ' ');
   // var query_2=query;
   var loc=parser.getLiterals(query, '');
   loc=loc.sort(GetSortOrder("last_column"));
   // console.log(loc)
    if(loc.length > 0) {
        loc.forEach(function (eloc, index1, array1) {
        //console.log(eloc)
        //var lit = query_2.substring(eloc.first_column, eloc.last_column);
        //query=query.replace(lit, "?")
         query=query.substring(0, eloc.first_column) + "?" + query.substring(eloc.last_column, query.length)
        });
        query=query.replace(/(\?,)+/g, '?').replace(/(\?)+/g, '?');
        var query_hashcode=hashcode(query.replace(/ +/g, "").replace(/;/g, ""))
    
        res.send({"parsed_query": query, "hashcode": query_hashcode, "time_taken": Date.now() - start})
    } else {
        res.send({"parsed_query": query, "hashcode": -1, "time_taken": Date.now() - start})
    }
    
        
    //   });
     // console.log(query)
    //}
});





var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

