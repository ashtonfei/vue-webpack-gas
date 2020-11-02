const APP_NAME = "VUE - WEBPACK - GAS"

function link(filename) {
  return HtmlService.createTemplateFromFile(filename).evaluate().getContent()
}

function doGet(e) {
  const htmlOutput = HtmlService.createTemplateFromFile("index.html").evaluate()
  htmlOutput.setTitle(APP_NAME)
  htmlOutput.addMetaTag("viewport", "width=device-width, initial-scale=1.0")
  htmlOutput.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  return htmlOutput
}
