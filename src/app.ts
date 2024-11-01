function targetFormat() {
    const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    const range = activeSheet.getRange(1, 1)
    range.setValue("Testing From Github Action Push")
}

targetFormat()
