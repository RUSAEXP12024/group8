function setInitialTimeSetting(replyToken) {
  var reply_text = '24時間表記で消灯時刻を入力してね！ 例：21:00、01:01';
  replyToUser(replyToken, reply_text);
}

function setTime(replyToken, message) {
  var ACCESS_TOKEN = "qEXHnvFwb37Xh/cxWQsGIZfDRA7O0JnKuBNKOZJlaXXd2qKbQDPV0+cAY4yJiQ1of5H22uUhr4eG60F95l74sSRsRps5CtNO6qRbkiYEzVEnswoQ3GP1EieOGuXy3Urw1DL/l3gQ54lxo0eZ7hHwuwdB04t89/1O/w1cDnyilFU=";
  var File = SpreadsheetApp.openById('1w-hwMAU3coFXghNCzSZy_VMoPZMY3TfR6fTgm6Zmm4I');
  var baseSheet = File.getSheetByName('log');
  var lastRow = baseSheet.getLastRow();

  // セルへの書き込み
  baseSheet.getRange('E' + (lastRow + 1)).setValue(message);

  var reply_text = message + "に消灯時刻を設定したよ！";
  replyToUser(replyToken, reply_text);

  // 通知とライトを制御するトリガーを設定
  setLightControlTrigger(message);
}

function replyToUser(replyToken, reply_text) {
  var url = 'https://api.line.me/v2/bot/message/reply';
  var channelToken = 'qEXHnvFwb37Xh/cxWQsGIZfDRA7O0JnKuBNKOZJlaXXd2qKbQDPV0+cAY4yJiQ1of5H22uUhr4eG60F95l74sSRsRps5CtNO6qRbkiYEzVEnswoQ3GP1EieOGuXy3Urw1DL/l3gQ54lxo0eZ7hHwuwdB04t89/1O/w1cDnyilFU=';

  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + channelToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': reply_text,
      }],
    }),
  });
}

function isValidTimeFormat(time) {
  // 時刻のフォーマットが正しいかを確認する正規表現
  var timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return timeFormat.test(time);
}