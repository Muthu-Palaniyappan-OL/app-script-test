function targetFunction() {
    const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const range = activeSheet.getRange(1, 1)
    range.setValue("Pushing After 2 Weeks !! ")
}

targetFunction()
