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

const getCurrentUser = () => {
    const email = Session.getActiveUser().getEmail()
    return JSON.stringify({ email })
}

const sendEmail = () => {
    const email = Session.getActiveUser().getEmail()
    GmailApp.sendEmail(email, `${APP_NAME} - GmailApp`, `This is a test email from ${APP_NAME} project.`)
    return email
}

const createEvent = () => {
    const email = Session.getActiveUser().getEmail()
    CalendarApp.getDefaultCalendar().createAllDayEvent(`${APP_NAME} - All Day Event`, new Date())
    return email
}

const createSheet = () => {
    const sheet = SpreadsheetApp.create(`${APP_NAME} - Create Sheet`)
    return sheet.getUrl() 
}

const createFile = () => {
    const file = DriveApp.createFile(`${APP_NAME} - create file.txt`, `${APP_NAME} - create file test`, MimeType.PLAIN_TEXT)
    return file.getUrl()
}

