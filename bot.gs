//LINEからのPOSTを処理する関数
function doPost(e) {
  //LINEから受け取ったデータをパースし、replyTokenを取り出す
  var replyToken= JSON.parse(e.postData.contents).events[0].replyToken;
  //replyTokenが存在しない場合は処理を終了
  if (typeof replyToken === 'undefined') {
    return;
  }
  //LINE Messaging APIのエンドポイント
  var url = 'https://api.line.me/v2/bot/message/reply';
  //認証に使用するチャネルトークンを入力
  var channelToken = 'tk9VvqVgl+uKJJ9gEd4pfj6FWIvDlCYHj7l+MaLvFUHWE5eWVoksHl0YIJcB36oAZ3Re2lizDu25UUyR0uSO4BHgKUDOrs24Mecg7gJnyXXB2eiBi+9puJ7VtwxuYLqJJsO2BRdJ9xVPuS7E1tZYwQdB04t89/1O/w1cDnyilFU=';

  //LINEから受け取ったデータをパースし、メッセージテキストを取り出す
  var receive_message = JSON.parse(e.postData.contents).events[0].message.text;
  //応答するメッセージのデフォルトのテキストを設定
  var reply_text = receive_message + "\n" + "は無効なメッセージです";

  if(receive_message == "ON/OFF") {
    turnOnLight();
    reply_text = "電気をつけます";
  } else if(receive_message == "UP") {
    turnUpLight()
    reply_text = "明るさを上げます";
  }else if(receive_message == "DOWN") {
    turnDownLight()
    reply_text = "明るさを下げます";
  }else if (receive_message == "ADJUST") {
    adjustLightBasedOnCurrentIlluminance();
    reply_text = "自動で明るさを調整します";
  }
  
  //LINEに対して応答メッセージを返すためのAPIコールを行う
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
  //処理が成功したことを示すレスポンスを返します。
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}