import React, { useState, useEffect } from 'react';
import './App.css';

import { jsPDF } from "jspdf";

import { Directory, Filesystem } from "@capacitor/filesystem";


import { order } from './order';

function App() {

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.toLocaleString('es-ES', { weekday: 'short' });
  const month = date.toLocaleString('es-ES', { month: 'short' });
  const dayOfMonth = date.getDate();
  return `${day}, ${month} ${dayOfMonth}`;
}


const downloadPDF = async () => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(order.event_name, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

  doc.setFontSize(12);
  doc.text(formatDate(order.start_date), doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

  doc.text('', 10, 40);

  order.tickets.forEach((ticket, index) => {
    doc.setFontSize(16);
    doc.text(ticket.ticket_name, 10, 50 + 2 * index * 60);

    doc.setFontSize(12);
    doc.text(ticket.ticket_name, doc.internal.pageSize.getWidth() / 2, 50 + 2 * index * 60 + 10, { align: 'center' });
    doc.text(ticket.ticket_description, 10, 50 + 2 * index * 60 + 20);

    if (ticket.extras && ticket.extras.length > 0) {
      doc.setFontSize(16);
      doc.text('Extras', doc.internal.pageSize.getWidth() / 2, 50 + 2 * index * 60 + 40, { align: 'center' });

      ticket.extras.forEach((extra, idex2) => {
        doc.setFontSize(12);
        doc.text(extra.extra_name, 10, 50 + 2 * index * 60 + 50 + 2 * idex2 * 20);
        doc.text(extra.extra_description, 10, 50 + 2 * index * 60 + 60 + idex2 * 20);
      });
    }

    doc.line(10, 50 + 2 * index * 60 + 50 + 2 * ticket.extras.length * 20 , doc.internal.pageSize.getWidth() - 10,  50 + 2 * index * 60 + 50 + 2 * ticket.extras.length * 20 )
  });

  doc.setLineWidth(0.5);
  doc.save(`order_${order.event_name}_${order.start_date}.pdf`);

  //doc.save ya descarga el archivo, pero no se si en otras plataformas funcionas. En el sctipt de ejemplo que me pasó Juan lo descargaba con este código de abajo.
  /*
  const pdfBase64 = doc.output("datauristring");
  const fileName = `order_${order.event_name}_${order.start_date}.pdf`;

  try {
    await Filesystem.writeFile({
      path: fileName,
      data: pdfBase64,
      directory: Directory.Documents,
    });
  } catch (error) {
    console.error("Unable to write file", error);
  }*/
};

  return (
    /*
    <div className="App">
      <h1>Generador de PDF</h1>
      <button onClick={() => generateAndOpenPDF(template, inputs)}>Generar y abrir PDF</button>
    </div>
    */

    <div className='App'>
      <h1>Generador de PDF</h1>
      <button onClick={downloadPDF}>Generar y abrir PDF</button>
    </div>

  );
};

export default App;
