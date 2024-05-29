function turnOnLight() {
  const signalID = '91f71df5-fab9-4d87-bbe1-f90dcc384cb4';
  const token = 'Dw8SBZ1ioscnuBMA4SuIPEoz1pQcDSOTCszGMG-9sJY.KzMrhsa4kMaZyBuHVf5yCyLmyhhPxG_o1U6HB4c-m6w';
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
  const signalID = '9bb22559-4b77-4d7b-912c-7e6635959229';
  const token = 'Dw8SBZ1ioscnuBMA4SuIPEoz1pQcDSOTCszGMG-9sJY.KzMrhsa4kMaZyBuHVf5yCyLmyhhPxG_o1U6HB4c-m6w';
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
  const signalID = '911c8ca5-4bd5-48f8-830b-7734d2aaf932';
  const token = 'Dw8SBZ1ioscnuBMA4SuIPEoz1pQcDSOTCszGMG-9sJY.KzMrhsa4kMaZyBuHVf5yCyLmyhhPxG_o1U6HB4c-m6w';
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

