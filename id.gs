function getDeviceSignals() {
  const deviceID = '1a478e48-dbf5-4e37-8ca9-a94b19734c83';
  const token = 'jxOcHSGO9lohRgjzAQwEsBubjgJ-DX1OorV9qx4R-HQ.Dmc0XbDiFuJoMrWq-Sk_1fa1gtGM06phUtpfCfBsHKQ';
  const headers = {
    'Authorization': 'Bearer ' + token,
  };
  const options = {
    "method": "get",
    "headers": headers,
  };

  const response = UrlFetchApp.fetch(`https://api.nature.global/1/appliances/${deviceID}/signals`, options);
  const signals = JSON.parse(response.getContentText());

  signals.forEach(signal => {
    Logger.log('Signal ID: ' + signal.id + ', Signal Name: ' + signal.name);
  });
}

getDeviceSignals();


// 示例：获取所有信号并在日志中打印
function testGetAllSignals() {
  getAllSignals();
}
