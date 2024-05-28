function turnOnLight() {
  const signalID = '68593fd9-d43e-4478-bcb8-bb349c2521fa';
  const token = 'jxOcHSGO9lohRgjzAQwEsBubjgJ-DX1OorV9qx4R-HQ.Dmc0XbDiFuJoMrWq-Sk_1fa1gtGM06phUtpfCfBsHKQ';
  const headers = {
    'Authorization': 'Bearer ' + token,
  };
  const options = {
    "method": "post",
    "headers": headers,
  };

  const response = UrlFetchApp.fetch(`https://api.nature.global/1/signals/${signalID}/send`, options);
  Logger.log(response.getContentText());
}
function turnUpLight() {
  const signalID = 'c798a8f9-b5a0-4fc7-8471-77d87a56dadc';
  const token = 'jxOcHSGO9lohRgjzAQwEsBubjgJ-DX1OorV9qx4R-HQ.Dmc0XbDiFuJoMrWq-Sk_1fa1gtGM06phUtpfCfBsHKQ';
  const headers = {
    'Authorization': 'Bearer ' + token,
  };
  const options = {
    "method": "post",
    "headers": headers,
  };

  const response = UrlFetchApp.fetch(`https://api.nature.global/1/signals/${signalID}/send`, options);
  Logger.log(response.getContentText());
}
function turnDownLight() {
  const signalID = '25f4a4c1-9222-488f-8560-bab6b3193510';
  const token = 'jxOcHSGO9lohRgjzAQwEsBubjgJ-DX1OorV9qx4R-HQ.Dmc0XbDiFuJoMrWq-Sk_1fa1gtGM06phUtpfCfBsHKQ';
  const headers = {
    'Authorization': 'Bearer ' + token,
  };
  const options = {
    "method": "post",
    "headers": headers,
  };

  const response = UrlFetchApp.fetch(`https://api.nature.global/1/signals/${signalID}/send`, options);
  Logger.log(response.getContentText());
}
