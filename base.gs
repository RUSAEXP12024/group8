var access_token = 'Dw8SBZ1ioscnuBMA4SuIPEoz1pQcDSOTCszGMG-9sJY.KzMrhsa4kMaZyBuHVf5yCyLmyhhPxG_o1U6HB4c-m6w'//←トークンを入れる
var spreadsheetId = '1w-hwMAU3coFXghNCzSZy_VMoPZMY3TfR6fTgm6Zmm4I'//←スプレッドシートのIDを入れる
function remo() {
  var data = getNatureRemoData();　　　　//data取得
  var lastData = getLastData();　　　　　//最終date取得
  setLaremoData(
  {
    te:data[0].newest_events.te.val,　　//温度
    hu:data[0].newest_events.hu.val,　　//湿度
    il:data[0].newest_events.il.val,　　//照度
  },
  lastData.row + 1//最終data追加作業
  );
  adjustLightBasedOnCurrentIlluminance();
}
 
function getNatureRemoData() {　　　　　　//Remoのapiをお借りします
  var url = "https://api.nature.global/1/devices";
  var headers = {
    "Content-Type" : "application/json;",
    'Authorization': 'Bearer ' + access_token,
  };
 
  var postData = {
 
  };
 
  var options = {





    "method" : "get",
    "headers" : headers,
  };
 
  var data = JSON.parse(UrlFetchApp.fetch(url, options));
  Logger.log(data[0].newest_events)
  Logger.log(data[0].newest_events.te.val)
  Logger.log(data[0].newest_events.hu.val)
  Logger.log(data[0].newest_events.il.val)
 
  return data;
  
}
 
function getLastData() {
  var datas = SpreadsheetApp.openById(spreadsheetId).getSheetByName('log').getDataRange().getValues()　　//logシートをゲットする
  var data = datas[datas.length - 1]
 
  return {
    totalpoint:data[1],
    coupon:data[2],
    row:datas.length,
  }
}
 
function setLaremoData(data, row) {
  SpreadsheetApp.openById(spreadsheetId).getSheetByName('log').getRange(row, 1).setValue(new Date())//A2にゲットした日時ほりこむ
  SpreadsheetApp.openById(spreadsheetId).getSheetByName('log').getRange(row, 2).setValue(data.te)　　//B2に温度追加
  SpreadsheetApp.openById(spreadsheetId).getSheetByName('log').getRange(row, 3).setValue(data.hu)　　//C2湿度追加(幅があるけど気にしない)
  SpreadsheetApp.openById(spreadsheetId).getSheetByName('log').getRange(row, 4).setValue(data.il)　　//D2照度追加
}

function adjustLightBasedOnCurrentIlluminance() {
  var data = getNatureRemoData();

  if (!data || data.length === 0 || !data[0].newest_events || !data[0].newest_events.il) {
    console.error("Failed to get illuminance data");
    return;
  }

  var currentIlluminance = data[0].newest_events.il.val;
  var targetIlluminance = 100;
  var requiredAdjustment = targetIlluminance - currentIlluminance;

  if (requiredAdjustment > 30) {
    turnUpLight();
  } else if (requiredAdjustment < -30) {
    turnDownLight();
  } else {
    console.log("No adjustment needed");
  }
}