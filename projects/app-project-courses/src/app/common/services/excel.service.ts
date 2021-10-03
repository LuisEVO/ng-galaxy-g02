import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  generateTable(
    headers: string[],
    rows: string[][],
    opts: {
      workbookName: string,
      worksheetName: string,
      columnsWidth: number[]
    }
  ) {
    const wb = new Workbook();
    const ws = wb.addWorksheet(opts.worksheetName);

    ws.columns = opts.columnsWidth.map(width => ({ width }))

    ws.addRow(headers)
    ws.addRows(rows)

    const firstRow = ws.getRow(1);
    firstRow.eachCell(cell => {
      cell.font = { size: 18, bold: true };
    })

    ws.eachRow(row => {
      row.eachCell(cell => {
        cell.border = {
          top: {style:'thin'},
          left: {style:'thin'},
          bottom: {style:'thin'},
          right: {style:'thin'}
        }
      })
    })

    wb.xlsx.writeBuffer()
      .then(bytes => new Blob([bytes]))
      .then(blob => saveAs(blob, `${opts.workbookName}.xlsx`))

  }

}