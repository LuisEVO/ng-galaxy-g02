import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  generateTable(
    headers: string[],
    rows: string[][],
    opts?: {
      pageOrientation?: 'portrait' | 'landscape'
    }
  ) {
    const pdf = pdfMake.createPdf({
      ...opts,
      content: [
        {
          table: {
            body: [
              headers.map(header => ({ text: header, bold: true })),
              ...rows,
            ]
          }
        }
      ]
    })

    pdf.download()
  }

}