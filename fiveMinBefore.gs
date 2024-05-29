function setLightControlTrigger(timeString) {
  var timeParts = timeString.split(':');
  var hours = parseInt(timeParts[0], 10);
  var minutes = parseInt(timeParts[1], 10);

  // 消灯時刻の5分前の日時オブジェクトを作成
  var targetDate = new Date();
  targetDate.setHours(hours);
  targetDate.setMinutes(minutes - 5);
  targetDate.setSeconds(0);

  // 現在の日時とターゲット日時との差を計算
  var now = new Date();
  var diff = targetDate.getTime() - now.getTime();

  // トリガーを設定
  if (diff >= 0) {
    ScriptApp.newTrigger('notifyUserAndTurnOffLight')
             .timeBased()
             .after(diff)
             .create();
  }
}

function notifyUserAndTurnOffLight() {
  var ACCESS_TOKEN = "qEXHnvFwb37Xh/cxWQsGIZfDRA7O0JnKuBNKOZJlaXXd2qKbQDPV0+cAY4yJiQ1of5H22uUhr4eG60F95l74sSRsRps5CtNO6qRbkiYEzVEnswoQ3GP1EieOGuXy3Urw1DL/l3gQ54lxo0eZ7hHwuwdB04t89/1O/w1cDnyilFU=";
  var url = 'https://api.line.me/v2/bot/message/push';
  var userId = 'U4f4b42387afff2d48bb370e889b0eedb'; // ご自身のユーザーIDを入力してください
  // 通知メッセージを送信
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'to': userId,
      'messages': [{
        'type': 'text',
        'text': '消灯五分前だよ！',
      }],
    }),
  });

  setTimeout(turnOnLight, 5 * 60 * 1000);
}
