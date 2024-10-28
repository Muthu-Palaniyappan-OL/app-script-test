function targetFormat() {
    const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const range = activeSheet.getRange(1, 1)
    range.setValue("Good123")
}

targetFormat()
