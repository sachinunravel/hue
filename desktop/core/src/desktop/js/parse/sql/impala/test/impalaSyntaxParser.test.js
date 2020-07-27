// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// 'License'); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import impalaSyntaxParser from '../impalaSyntaxParser';

describe('impalaSyntaxParser.js', () => {
  const expectedToStrings = function(expected) {
    return expected.map(ex => ex.text);
  };

  it('should not find errors for ""', () => {
    const result = impalaSyntaxParser.parseSyntax('', '');

    expect(result).toBeFalsy();
  });

  it('should report incomplete statement for "SEL"', () => {
    const result = impalaSyntaxParser.parseSyntax('SEL', '');

    expect(result.incompleteStatement).toBeTruthy();
  

   const result2=impalaSyntaxParser.getLiterals("select ndv_no_finalize(site) as site, cast(-1 as bigint), max(length(site)), avg(length(site)), count(site),lot_id as lot_id, cast(-1 as bigint), max(length(lot_id)), avg(length(lot_id)), count(lot_id), ndv_no_finalize(product) as product, cast(-1 as bigint), max(length(product)), avg(length(product)), count(product), ndv_no_finalize(tester_id) as tester_id, cast(-1 as bigint), max(length(tester_id)), avg(length(tester_id)), count(tester_id), ndv_no_finalize(probecard_id) as probecard_id, cast(-1 as bigint), max(length(probecard_id)), avg(length(probecard_id)), count(probecard_id), ndv_no_finalize(program) as program, cast(-1 as bigint), max(length(program)), avg(length(program)), count(program), ndv_no_finalize(parameter_number) as parameter_number, cast(-1 as bigint), 8, cast(8 as double), count(parameter_number), ndv_no_finalize(parameter_name) as parameter_name, cast(-1 as bigint), max(length(parameter_name)), avg(length(parameter_name)), count(parameter_name), ndv_no_finalize(finish_time) as finish_time, cast(-1 as bigint), max(length(finish_time)), avg(length(finish_time)), count(finish_time), ndv_no_finalize(count) as count, cast(-1 as bigint), 8, cast(8 as double), count(count), ndv_no_finalize(result_average) as result_average, cast(-1 as bigint), 8, cast(8 as double), count(result_average), ndv_no_finalize(result_median) as result_median, cast(-1 as bigint), 8, cast(8 as double), count(result_median), ndv_no_finalize(result_variance) as result_variance, cast(-1 as bigint), 8, cast(8 as double), count(result_variance), ndv_no_finalize(lower_control_limit) as lower_control_limit, cast(-1 as bigint), 8, cast(8 as double), count(lower_control_limit), ndv_no_finalize(upper_control_limit) as upper_control_limit, cast(-1 as bigint), 8, cast(8 as double), count(upper_control_limit), ndv_no_finalize(lower_hold_limit) as lower_hold_limit, cast(-1 as bigint), 8, cast(8 as double), count(lower_hold_limit), ndv_no_finalize(upper_hold_limit) as upper_hold_limit, cast(-1 as bigint), 8, cast(8 as double), count(upper_hold_limit), ndv_no_finalize(lower_spec_limit) as lower_spec_limit, cast(-1 as bigint), 8, cast(8 as double), count(lower_spec_limit), ndv_no_finalize(upper_spec_limit) as upper_spec_limit, cast(-1 as bigint), 8, cast(8 as double), count(upper_spec_limit), ndv_no_finalize(create_ts) as create_ts, cast(-1 as bigint), 16, cast(16 as double), count(create_ts), year, month, day from mfg_measurement.tx_wat_par_lot_summary where (year=2020 and month=1 and day=4) group by year, month, day", '')
   const result3=impalaSyntaxParser.parseSyntax("select ndv_no_finalize(site) as site, cast(-1 as bigint), max(length(site)), avg(length(site)), count(site), ndv_no_finalize(lot_id) as lot_id, cast(-1 as bigint), max(length(lot_id)), avg(length(lot_id)), count(lot_id), ndv_no_finalize(product) as product, cast(-1 as bigint), max(length(product)), avg(length(product)), count(product), ndv_no_finalize(tester_id) as tester_id, cast(-1 as bigint), max(length(tester_id)), avg(length(tester_id)), count(tester_id), ndv_no_finalize(probecard_id) as probecard_id, cast(-1 as bigint), max(length(probecard_id)), avg(length(probecard_id)), count(probecard_id), ndv_no_finalize(program) as program, cast(-1 as bigint), max(length(program)), avg(length(program)), count(program), ndv_no_finalize(parameter_number) as parameter_number, cast(-1 as bigint), 8, cast(8 as double), count(parameter_number), ndv_no_finalize(parameter_name) as parameter_name, cast(-1 as bigint), max(length(parameter_name)), avg(length(parameter_name)), count(parameter_name), ndv_no_finalize(finish_time) as finish_time, cast(-1 as bigint), max(length(finish_time)), avg(length(finish_time)), count(finish_time), ndv_no_finalize(count) as count, cast(-1 as bigint), 8, cast(8 as double), count(count), ndv_no_finalize(result_average) as result_average, cast(-1 as bigint), 8, cast(8 as double), count(result_average), ndv_no_finalize(result_median) as result_median, cast(-1 as bigint), 8, cast(8 as double), count(result_median), ndv_no_finalize(result_variance) as result_variance, cast(-1 as bigint), 8, cast(8 as double), count(result_variance), ndv_no_finalize(lower_control_limit) as lower_control_limit, cast(-1 as bigint), 8, cast(8 as double), count(lower_control_limit), ndv_no_finalize(upper_control_limit) as upper_control_limit, cast(-1 as bigint), 8, cast(8 as double), count(upper_control_limit), ndv_no_finalize(lower_hold_limit) as lower_hold_limit, cast(-1 as bigint), 8, cast(8 as double), count(lower_hold_limit), ndv_no_finalize(upper_hold_limit) as upper_hold_limit, cast(-1 as bigint), 8, cast(8 as double), count(upper_hold_limit), ndv_no_finalize(lower_spec_limit) as lower_spec_limit, cast(-1 as bigint), 8, cast(8 as double), count(lower_spec_limit), ndv_no_finalize(upper_spec_limit) as upper_spec_limit, cast(-1 as bigint), 8, cast(8 as double), count(upper_spec_limit), ndv_no_finalize(create_ts) as create_ts, cast(-1 as bigint), 16, cast(16 as double), count(create_ts), year, month, day from mfg_measurement.tx_wat_par_lot_summary where (year=2020 and month=1 and day=4) group by year, month, day",'')
   console.log(result2)
   console.log(result3)
   console.log(result)

   const result4=impalaSyntaxParser.getLiterals("select ndv_no_finalize(site) as site, cast(-1 as bigint), max(site) , site as s, site as e,lot_id as lot_id, cast(-1 as bigint), max(length(lot_id)), avg(length(lot_id)), count(lot_id), product, cast(-1 as bigint), max(length(product)), avg(length(product)), count(product), ndv_no_finalize(tester_id) as tester_id, cast(-1 as bigint), max(length(tester_id)), avg(length(tester_id)), count(tester_id), ndv_no_finalize(probecard_id) as probecard_id, cast(-1 as bigint), max(length(probecard_id)), avg(length(probecard_id)), count(probecard_id), ndv_no_finalize(program) as program, cast(-1 as bigint), max(length(program)), avg(length(program)), count(program), ndv_no_finalize(parameter_number) as parameter_number, cast(-1 as bigint), 8, cast(8 as double), count(parameter_number), ndv_no_finalize(parameter_name) as parameter_name, cast(-1 as bigint), max(length(parameter_name)), avg(length(parameter_name)), count(parameter_name), ndv_no_finalize(finish_time) as finish_time, cast(-1 as bigint), max(length(finish_time)), avg(length(finish_time)), count(finish_time), ndv_no_finalize(count) as count, cast(-1 as bigint) from mfg_measurement.tx_wat_par_lot_summary group by year, month, day", '')

  console.log(result4)

  });

  it('should report incomplete statement for "SELECT"', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT', '');

    expect(result.incompleteStatement).toBeTruthy();
  });

  it('should report incomplete statement for "SELECT "', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT ', '');

    expect(result.incompleteStatement).toBeTruthy();
  });

  it('should not report incomplete statement for "SELECT * FROM tbl"', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT * FROM tbl', '');

    expect(result.incompleteStatement).toBeFalsy();
  });

  it('should not report incomplete statement for "SELECT * FROM tbl LIMIT 1"', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT * FROM tbl LIMIT 1', '');

    expect(result.incompleteStatement).toBeFalsy();
  });

  it('should report incomplete statement for "SELECT * FROM tbl LIMIT "', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT * FROM tbl LIMIT ', '');

    expect(result.incompleteStatement).toBeTruthy();
  });

  it('should report incomplete statement for "SELECT * FROM tbl GROUP"', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT * FROM tbl GROUP', '');

    expect(result.incompleteStatement).toBeTruthy();
  });

  it('should not find errors for "SELECT *"', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT *', '');

    expect(result).toBeFalsy();
  });

  it('should not report incomplete statement for "SELECT * FR"', () => {
    const result = impalaSyntaxParser.parseSyntax('SELECT * FR', '');

    expect(result.incompleteStatement).toBeTruthy();
  });

  it('should find errors for "SLELECT "', () => {
    const result = impalaSyntaxParser.parseSyntax('SLELECT ', '');

    expect(result).toBeTruthy();
    expect(result.text).toEqual('SLELECT');
    expect(result.expected.length).toBeGreaterThan(0);
    expect(result.loc.first_column).toEqual(0);
    expect(result.loc.last_column).toEqual(7);
  });

  it('should find errors for "alter tabel "', () => {
    const result = impalaSyntaxParser.parseSyntax('alter tabel ', '');

    expect(result).toBeTruthy();
    expect(result.text).toEqual('tabel');
    expect(result.expected.length).toBeGreaterThan(0);
    expect(result.loc.first_column).toEqual(6);
    expect(result.loc.last_column).toEqual(11);
  });

  it('should find errors for "select *  form "', () => {
    const result = impalaSyntaxParser.parseSyntax('select *  form ', '');

    expect(result).toBeTruthy();
    expect(result.loc.first_column).toEqual(10);
    expect(result.loc.last_column).toEqual(14);
    expect(expectedToStrings(result.expected)).toEqual(['from', 'union']);
  });

  it('should find errors for "select * from customers c cultster by awasd asd afd;"', () => {
    const result = impalaSyntaxParser.parseSyntax(
      'select * from customers c cultster by awasd asd afd;',
      ''
    );

    expect(result).toBeTruthy();
  });

  it('should find errors for "select asdf wer qwer qewr   qwer"', () => {
    const result = impalaSyntaxParser.parseSyntax('select asdf wer qwer qewr   qwer', '');

    expect(result).toBeTruthy();
  });

  it('should suggest expected words for "SLELECT "', () => {
    const result = impalaSyntaxParser.parseSyntax('SLELECT ', '');

    expect(result).toBeTruthy();
    expect(expectedToStrings(result.expected)).toEqual([
      'SELECT',
      'DELETE',
      'SET',
      'ALTER',
      'COMMENT',
      'INSERT',
      'UPSERT',
      'CREATE',
      'EXPLAIN',
      'GRANT',
      'LOAD',
      'REFRESH',
      'REVOKE',
      'SHOW',
      'USE',
      'COMPUTE',
      'DROP',
      'TRUNCATE',
      'UPDATE',
      'WITH',
      'DESCRIBE',
      'INVALIDATE'
    ]);
  });

  it('should suggest expected words for "slelect "', () => {
    const result = impalaSyntaxParser.parseSyntax('slelect ', '');

    expect(result).toBeTruthy();
    expect(expectedToStrings(result.expected)).toEqual([
      'select',
      'delete',
      'set',
      'alter',
      'comment',
      'insert',
      'upsert',
      'create',
      'explain',
      'grant',
      'load',
      'refresh',
      'revoke',
      'show',
      'use',
      'compute',
      'drop',
      'truncate',
      'update',
      'with',
      'describe',
      'invalidate'
    ]);
  });

  it('should suggest expected that the statement should end for "use somedb extrastuff "', () => {
    const result = impalaSyntaxParser.parseSyntax('use somedb extrastuff  ', '');

    expect(result).toBeTruthy();
    expect(result.expectedStatementEnd).toBeTruthy();
  });

  const expectEqualIds = function(beforeA, afterA, beforeB, afterB) {
    const resultA = impalaSyntaxParser.parseSyntax(beforeA, afterA);
    const resultB = impalaSyntaxParser.parseSyntax(beforeB, afterB);

    expect(resultA).toBeTruthy();
    expect(resultB).toBeTruthy();
    expect(resultA.ruleId).toEqual(resultB.ruleId);
  };

  const expectNonEqualIds = function(beforeA, afterA, beforeB, afterB) {
    const resultA = impalaSyntaxParser.parseSyntax(beforeA, afterA);
    const resultB = impalaSyntaxParser.parseSyntax(beforeB, afterB);

    expect(resultA).toBeTruthy();
    expect(resultB).toBeTruthy();
    expect(resultA.ruleId).not.toEqual(resultB.ruleId);
  };

  it('should have unique rule IDs when the same rule is failing in different locations', () => {
    expectEqualIds('SLELECT ', '', 'dlrop ', '');
    expectEqualIds('SELECT * FORM ', '', 'SELECT * bla ', '');
    expectEqualIds('DROP TABLE b.bla ERRROROR ', '', 'DROP TABLE c.cla OTHERERRRRORRR ', '');
    expectEqualIds(
      'SELECT * FROM a WHERE id = 1, a b SELECT ',
      '',
      'SELECT id, foo FROM a WHERE a b SELECT',
      ''
    );
    expectEqualIds(
      'SELECT * FROM a WHERE id = 1, a b SELECT ',
      '',
      'SELECT id, foo FROM a WHERE a b SELECT',
      ''
    );

    expectNonEqualIds('slelect ', '', 'select * form ', '');
  });
});
