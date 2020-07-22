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
  

   const result2 = impalaSyntaxParser.getLiterals("SELECT fdc.filename, wf.LOT_ID, wf.WAFER_ID, wf.PROCESS, wf.STEP, wf.RECIPE, fdc.KEY, fdc.RECIPESTEPNUMBER, wf.RUN_START, wf.RUN_START_STR, fdc.TIMERELATIVESECS, fdc.`VALUES`, fdc.NUMBEROFITEMS, fdc.ITEMNOS FROM mfg_master.wafer_fdc wf JOIN mfg_master.context_list cl on wf.lot_id = cl.lot_id and wf.wafer_id = cl.wafer_id LEFT JOIN mfg_fdc.eqp_batch_info e on wf.site_abbr = e.fab and wf.eqp_nam = e.eqp_id and e.master_data_logic is null JOIN mfg_fdc.fdc fdc on wf.lot_id = fdc.lotid and wf.fdc_wafer_id = fdc.waferno and wf.run_start_str = fdc.runstart and wf.recipe = fdc.toolrecipeid and wf.chamber = fdc.chamberno and (wf.site_abbr = fdc.fab or wf.site_abbr = 'ECHO' and fdc.fab = 'CHD') and wf.year = fdc.year and wf.month = fdc.month and wf.day = fdc.day WHERE cl.context_id = 'realm_20200628_111500_5280' AND wf.site_abbr IN ('OHT') AND wf.lot_id IN ('EY28126.1H','EY28136.1F','EY28136.2K','EY28669.1F','EY29210.1T','EY29363.1R','EY29741.1J','EY29974.1R','EY29975.1J','EY32605.1C','EY33014.1H','EY33018.1A','EY33674.1F','EY33674.4X','EY33676.1N','EY33773.1T','EY33774.1K','EY34192.1W','EY34193.1L','EY34612.1N','EY34613.1H','EY34804.1L','EY35138.1T','EY36298.1W','EY36533.1L')  AND wf.process IN ('1109_PENIT')  AND wf.step IN ('FP216.04_1400 NITRIDE')   AND fdc.key IN ('I_13560_N=1','I_13560_N=2','I_13560_N=3','I_13560_N=5','I_350_N=1','I_350_N=2','I_350_N=3','I_350_N=5','Latch:_Edwards_Abatement_(OHT_F01SAMT_FDC).F01SAMT.HAPS_Alarm_OK1','Latch:_Edwards_Abatement_(OHT_F01SAMT_FDC).F01SAMT.HAPS_Alarm_OK2','Latch:_Edwards_Abatement_(OHT_F01SAMT_FDC).F01SAMT.HAPS_Alarm_OK3','Latch:_Edwards_Abatement_(OHT_F02SAMT_FDC).F02SAMT.HAPS_Alarm_OK2','Latch:_Edwards_Abatement_(OHT_F02SAMT_FDC).F02SAMT.HAPS_Alarm_OK3','Latch:_Edwards_Abatement_(OHT_F03SAMT_FDC).F03SAMT.HAPS_Alarm_OK1','Latch:_Edwards_Abatement_(OHT_F03SAMT_FDC).F03SAMT.HAPS_Alarm_OK2','Latch:_Edwards_Abatement_(OHT_F04SAMT_FDC).F04SAMT.HAPS_Alarm_OK1','Latch:_Edwards_Abatement_(OHT_F04SAMT_FDC).F04SAMT.HAPS_Alarm_OK2','Latch:_Edwards_Abatement_(OHT_F04SAMT_FDC).F04SAMT.HAPS_Alarm_OK3','Ph_13560_N=1','Ph_13560_N=2','Ph_13560_N=3','Ph_13560_N=5','Ph_350_N=1','Ph_350_N=2','Ph_350_N=3','Ph_350_N=5','Sensor_Status','Sig:_ACCOUNT_DI_POINT_ALL_COUNT_(post_Run)','Sig:_ACCOUNT_DI_POINT_ALL_PERCENT_(post_Run)','Sig:_CH_STEP_NAME_TIMER_AFTER_CHANGE','Sig:_CH_STEP_NAME_TIMER_BY_STEP_(post_Step)','Sig:_CH_STEP_NUMBER_COUNT_CHANGES','Sig:_CH_STEP_NUMBER_MAX','Sig:_CH_STEP_NUMBER_MIN','Sig:_CH_STEP_NUMBER_TIMER_BY_STEP_(post_Step)','Sig:_Data_Age_Max','Sig:_DC_BIAS_Error_Count','Sig:_DC_BIAS_SLOPE','Sig:_DEP1_DC_BIAS_(post_Step)','Sig:_DEP1_LAMP_DRIVE_PWR_(post_Step)','Sig:_DEP1_STEP','Sig:_DEP1_TIMER','Sig:_DEP2_DC_BIAS_(post_Step)','Sig:_DEP2_LAMP_DRIVE_PWR_(post_Step)','Sig:_DEP2_STEP','Sig:_DEP2_TIMER','Sig:_DEP_CHAMBER_PRESSURE_(post_Run)','Sig:_DEP_CHAMBER_PRESSURE_(post_Step)','Sig:_DEP_DC_BIAS_New_(post_Step)','Sig:_DEP_DC_BIAS_(post_Run)','Sig:_DEP_DC_BIAS_(post_Step)','Sig:_DEP_LAMP_DRIVE_PWR_(post_Run)','Sig:_DEP_LAMP_DRIVE_PWR_(post_Step)','Sig:_DEP_N2_FLOW_RATIO_(post_Run)','Sig:_DEP_N2_FLOW_RATIO_(post_Step)','Sig:_DEP_N2O_0.2L_FLOW_ACT_(post_Step)','Sig:_DEP_N2O_0.2L_FLOW_RATIO_(post_Run)','Sig:_DEP_N2O_0.2L_FLOW_RATIO_(post_Step)','Sig:_DEP_N2O_FLOW_RATIO_(post_Run)','Sig:_DEP_NH3_FLOW_RATIO_(post_Run)','Sig:_DEP_PH3_FLOW_ACT_(post_Step)','Sig:_DEP_PH3_FLOW_RATIO_(post_Run)','Sig:_DEP_PH3_FLOW_RATIO_(post_Step)','Sig:_DEP_RF1_H1_POWER_(post_Run)','Sig:_DEP_RF1_H2_POWER_(post_Run)','Sig:_DEP_RF1_H3_POWER_(post_Run)','Sig:_DEP_RF1_H5_POWER_(post_Run)','Sig:_DEP_RF1_POWER_REFL_TDS_(post_Step)','Sig:_DEP_RF1_POWER_TDS_(post_Step)','Sig:_DEP_RF1_PWR_(post_Run)','Sig:_DEP_RF1_REFL_(post_Run)','Sig:_DEP_RF2_H1_POWER_(post_Run)','Sig:_DEP_RF2_H2_POWER_(post_Run)','Sig:_DEP_RF2_H3_POWER_(post_Run)','Sig:_DEP_RF2_H5_POWER_(post_Run)','Sig:_DEP_RF2_PWR_(post_Run)','Sig:_DEP_RF2_REFL_(post_Run)','Sig:_Dep_RF_Load_Blade_Position_(post_Run)','Sig:_Dep_RF_Load_Blade_Position_(post_Step)','Sig:_Dep_RF_Load_Blade_Position_Thick_(post_Run)','Sig:_Dep_RF_Load_Blade_Position_Thick_(post_Step)','Sig:_Dep_RF_Tune_Position_(post_Run)','Sig:_Dep_RF_Tune_Position_(post_Step)','Sig:_Dep_RF_Tune_Position_Thick_(post_Run)','Sig:_Dep_RF_Tune_Position_Thick_(post_Step)','Sig:_DEP_SELECT_New_(post_Step)','Sig:_DEP_SELECT_(post_Run)','Sig:_DEP_SELECT_(post_Step)','Sig:_DEP_SELECT_THICK_(post_Run)','Sig:_Dep_Select_Thick_(post_Step)','Sig:_DEP_SIH4_0.1L_FLOW_ACT_(post_Step)','Sig:_DEP_SIH4_0.1L_FLOW_RATIO_(post_Run)','Sig:_DEP_SIH4_0.1L_FLOW_RATIO_(post_Step)','Sig:_DEP_SIH4_0.4L_FLOW_ACT_(post_Step)','Sig:_DEP_SIH4_0.4L_FLOW_RATIO_(post_Run)','Sig:_DEP_SIH4_0.4L_FLOW_RATIO_(post_Step)','Sig:_DEP_STEP','Sig:_DEP_STEP_SELECT','Sig:_Dep_Step_Select_(post_Step)','Sig:_Dep_Step_Select_Thin_(post_Step)','Sig:_Dep_Timer_Down_(post_Step)','Sig:_DEP_TIMER_(post_Run)','Sig:_DEP_TIMER_(post_Step)','Sig:_Dep_Timer_Up','Sig:_DEP_TUNE_TO_LOAD_RATIO_Absolute_(post_Run)','Sig:_DEP_TUNE_TO_LOAD_RATIO_Absolute_(post_Step)','Sig:_DEP_TUNE_TO_LOAD_RATIO_(post_Run)','Sig:_DEP_TUNE_TO_LOAD_RATIO_(post_Step)','Sig:_DEP_TV_POS_(post_Run)','Sig:_DEP_TV_POS_(post_Step)','Sig:_DEP_WAFER_TEMP_(post_Run)','Sig:_DEP_WAFER_TEMP_(post_Step)','Sig:_DEP_WAFER_TEMP_THIN_(post_Step)','Sig:_DI_POINT_ALL_Error','Sig:_DI_POINT_ALL_Error_New_(post_Step)','Sig:_DI_POINT_ALL_Error_No_Tune','Sig:_DI_POINT_ALL_Error_(post_Run)','Sig:_DI_POINT_DATA_AGE_3p_Before_Spike_Error_(post_Run)','Sig:_DI_POINT_DATA_AGE_Error','Sig:_DI_POINT_DATA_AGE_Error_New','Sig:_DI_POINT_DATA_AGE_Error_(post_Run)','Sig:_DI_POINT_DC_BIAS_Error','Sig:_DI_POINT_LOAD_Error','Sig:_DI_POINT_RF_REFL_Error','Sig:_DI_POINT_TUNE_Error','Sig:_DI_POINT_WAFER_TEMP_Error','Sig:_DI_RUN_DATA_AGE_Error_(post_Step)','Sig:_DI_RUN_PREHEAT_Step_Error','Sig:_DI_RUN_PREHEAT_Step_Error_LDR_PEN','Sig:_DI_RUN_Purge_Step_error_(post_Step)','Sig:_DI_RUN_RUN_POINT_MAX_(post_Step)','Sig:_Front_Trim_(post_Step)','Sig:_IMPEDANCE_DRIFT_(post_Run)','Sig:_Lamp_Drive_Max','Sig:_Lamp_Drive_Max_on_Load_(post_Step)','Sig:_Lamp_Drive_Min','Sig:_Lamp_Drive_on_Load_(post_Step)','Sig:_Lamp_Drive_Slope','Sig:_LAMP_DRIVE_STD_DEV','Sig:_Load_Select','Sig:_MAX_IMPEDANCE_(post_Run)','Sig:_MAXIMUM_LATENCY','Sig:_MAX_TEMP','Sig:_MIN_IMPEDANCE_(post_Run)','Sig:_Minimum_Step_Number','Sig:_MIN_TEMP','Sig:_N2_10L_MFC_Voltage_to_Flow_Ratio','Sig:_N2_10L_MFC_Voltage_to_Setpoint_Ratio','Sig:_Negative_PS_RF2_H1_POWER_Check','Sig:_N_Trim_BackEnd','Sig:_N_Trim_FrontEnd','Sig:_Position_Robot_Extension','Sig:_Position_Robot_Rotation','Sig:_PREHEAT_Data_Age_Max','Sig:_PREHEAT_Step_Time','Sig:_PS_RF1_H1_POWER','Sig:_PS_RF1_H2_POWER','Sig:_PS_RF1_H3_POWER','Sig:_PS_RF1_H5_POWER','Sig:_PS_RF2_H1_POWER','Sig:_PS_RF2_H2_POWER','Sig:_PS_RF2_H3_POWER','Sig:_PS_RF2_H5_POWER','Sig:_PS_SELECT','Sig:_PS_SELECT_COMPLETE_TRIGGERED_(post_Run)','Sig:_Pump_Alarm','Sig:_Pump_Alarm_High','Sig:_Pump_Alarm_Low','Sig:_Pump_Config','Sig:_Purge_Step_Defined','Sig:_Purge_Step_Ended_Counter','Sig:_Purge_Step_Point_Count','Sig:_PWR_TRANSITION_TIMER','Sig:_Recipe_Coverage','Sig:_RECIPE_COVERAGE_ERROR_(post_Step)','Sig:_RF1_H1_IMPEDANCE','Sig:_RF1_H1_POWER','Sig:_RF1_H1_REACTANCE','Sig:_RF1_H1_RESISTANCE','Sig:_RF1_H2_POWER','Sig:_RF1_H3_IMPEDANCE','Sig:_RF1_H3_POWER','Sig:_RF1_H3_REACTANCE','Sig:_RF1_H3_RESISTANCE','Sig:_RF1_H5_POWER','Sig:_RF2_H1_POWER','Sig:_RF2_H2_POWER','Sig:_RF2_H3_POWER','Sig:_RF2_H5_POWER','Sig:_RFS_Sensor_Compare_count','Sig:_RFS_Sensor_RFS_run_count','Sig:_RFS_Sensor_TDS_run_count','Sig:_Run_Point_for_DI_RUN','Sig:_RUN_TIMER','Sig:_SI_HAPS_Alarm_OK_(post_Step)','Sig:_SI_N2_10L_MFC_(post_Step)','Sig:_SI_N2O_0.2L_MFC_(post_Step)','Sig:_SI_N2O_5L_MFC_(post_Step)','Sig:_SI_NH3_MFC_(post_Step)','Sig:_SI_PH3_MFC_(post_Step)','Sig:_SI_Pump_Exhaust_Pressure_(post_Step)','Sig:_SI_SiH4_0.2L_MFC_(post_Step)','Sig:_SI_SiH4_1L_MFC_(post_Step)','Sig:_StepChanges','Sig:_StepChangesCount','Sig:_StepNumber_Standard_','Sig:_STEP_TIME_REMAINING_(post_Step)','Sig:_TEMP_DIP_ON_LOAD','Sig:_TEMP_DIP_ON_LOAD_LDR_PEN','Sig:_TEMP_DIP_ON_LOAD_LDR_PEN_(post_Step)','Sig:_TEMP_DIP_ON_LOAD_(post_Step)','Sig:_Temp_Dip_on_Load_Slope','Sig:_Temp_Min_on_Load','Sig:_Temp_Slope','Sig:_TOOL_BIN_DATA_AGE_CHECK','Sig:_Trim_Counter_Down_(post_Step)','Sig:_Trim_Counter_Up','Sig:_Wafer_Misplacement_Detect_(post_Step)','Sig:_Wafer_Misplacement_Index_HT_(post_Step)','Sig:_Wafer_Misplacement_Index_LT_(post_Step)','Sig:_Wafer_Temp_Stuck_check','Snapshot:_PM_Wafer_Count','Tool_Bin_Data_Age_OPC','Tool_Bin_Data_Age_Serial','Tool:_CF4_MFC','Tool:_CF4_MFC_SETPOINT','Tool:_CHAMBER_PRESSURE','Tool:_CH_ROBOT_EXTENSION_ON_DROP','Tool:_CH_ROBOT_EXTENSION_ON_PICKUP','Tool:_CH_ROBOT_ROTATION_ON_DROP','Tool:_CH_ROBOT_ROTATION_ON_PICKUP','Tool:_CH_STEP_NAME','Tool:_CH_STEP_NUMBER','Tool:_DC_BIAS','Tool:_HAPS_Alarm_OK','Tool:_LAMP_DRIVE','Tool:_N2_10L_MFC','Tool:_N2_10L_MFC_SETPOINT','Tool:_N2_10L_MFC_Voltage','Tool:_N2O_0.2L_MFC','Tool:_N2O_0.2L_MFC_SETPOINT','Tool:_N2O_5L_MFC','Tool:_N2O_5L_MFC_SETPOINT','Tool:_NH3_MFC','Tool:_NH3_MFC_SETPOINT','Tool:_PH3_MFC','Tool:_PH3_MFC_SETPOINT','Tool:_PreviousRun_RFS_Sensor_Compare_count','Tool:_PreviousRun_RFS_Sensor_RFS_run_count','Tool:_PreviousRun_RFS_Sensor_TDS_run_count','Tool:_Pump_Booster_Current_(A)','Tool:_Pump_Booster_Temp_(K)','Tool:_Pump_Exhaust_Pressure_(psi)','Tool:_Pump_Motor_Temp_(K)','Tool:_Pump_Phase_Current_(A)','Tool:_RF2_PWR_REFL_(W)','Tool:_RF_LOAD_BLADE_POS','Tool:_RF_PWR_FWD_(W)','Tool:_RF_PWR_REFL_(W)','Tool:_RF_TUNE_POS','Tool:_SiH4_0.2L_MFC','Tool:_SiH4_0.2L_MFC_SETPOINT','Tool:_SiH4_1L_MFC','Tool:_SiH4_1L_MFC_SETPOINT','Tool:_THROT_VLV_POS','Tool:_TIMER_RF_ON_PM','Tool:_WAFER_TEMP','Tool:_WATER_RESISTIVITY_(Mohm)','V_13560_N=1','V_13560_N=2','V_13560_N=3','V_13560_N=5','V_350_N=1','V_350_N=2','V_350_N=3','V_350_N=5')  AND (e.batch_tool is null OR e.batch_tool != '1') AND  (e.master_data_logic is null or e.master_data_logic != 'implanter') AND fdc.fab = 'OHT' and fdc.year = 2019 and fdc.month = 12 and fdc.day = 11 ORDER BY wf.LOT_ID, wf.WAFER_ID, wf.RUN_START_STR, fdc.KEY, fdc.RECIPESTEPNUMBER, fdc.filename desc;", '')
   console.log(result2)
   console.log(result)

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
