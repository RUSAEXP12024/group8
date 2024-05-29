// メイン関数
function doPost(e) {
  // LINEから受け取ったデータをパースし、replyTokenを取り出す
  var json = JSON.parse(e.postData.contents);
  var replyToken = json.events[0].replyToken;
  
  // replyTokenが存在しない場合は処理を終了
  if (typeof replyToken === 'undefined') {
    return;
  }

  // LINEから受け取ったデータをパースし、メッセージテキストを取り出す
  var receive_message = json.events[0].message.text;
  var reply_text = '';

  if (receive_message === "ON/OFF") {
    turnOnLight();
    reply_text = "電気を切り替えます";
  } else if (receive_message === "UP") {
    turnUpLight();
    reply_text = "明るさを上げます";
  } else if (receive_message === "DOWN") {
    turnDownLight();
    reply_text = "明るさを下げます";
  } else if (receive_message === "ADJUST") {
    adjustLightBasedOnCurrentIlluminance();
    reply_text = "自動で明るさを調整します";
  } else if (receive_message === "消灯時刻を設定") {
    setInitialTimeSetting(replyToken);
    return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
  } else if (isValidTimeFormat(receive_message)) {
    setTime(replyToken, receive_message);
    return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
  } else if (receive_message === "おやすみ") {
    reply_text = "おやすみなさい！";
  } else {
    reply_text = receive_message + "\n" + "は無効なメッセージだよ！";
  }

  // LINEに対して応答メッセージを返すためのAPIコールを行う
  replyToUser(replyToken, reply_text);
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}


