
module.exports = {
  "port": 8081,
  "staticFilesDirectory": "htdocs",
  "pathlist": [
    "pjssamples"
  ],
  "initialModules": {
    "/hello": "pjssamples/hello",
    "/hello2": "pjssamples/hello2",
    "/connect4": "pjssamples/connect4",
    "/upload": "pjssamples/upload"
  },
  "databaseConnections": [
    {
      "name": "default",
      "default": true,
      "driver": "IBMi"
    }
  ],
  "timeout": 3600,
  "defaultMode": "case-sensitive"
}
