import React, { useState, useEffect } from 'react';
import './App.css';

import { jsPDF } from "jspdf";

import { Directory, Filesystem } from "@capacitor/filesystem";


import { order } from './order';

function App() {
/////////////////////////////////////////
  //@pdfme/generator
////////////////////////////////////////

/*

function generateTemplate(order: any): Template {
  
  


  const template: Template = {
    basePdf: BLANK_PDF,
    schemas: [],
  };


  const titleSchema = {
    type: 'text',
    position: { x: 0, y: 0 },
    width: 10,
    height: 10,
    content: '{{eventName}}',
    style: { fontSize: 24, align: 'center', bold: true },
  };
  template.schemas.push({ title: titleSchema });


  const dateSchema = {
    type: 'text',
    position: { x: 0, y: 20 },
    width: 10,
    height: 10,
    content: '{{formattedDate}}',
    style: { fontSize: 12, align: 'center' },
  };
  template.schemas.push({ date: dateSchema });


  order.tickets.forEach((ticket: any) => {
    const ticketSchema = {
      type: 'text',
      position: { x: 0, y: 40 },
      width: 10,
      height: 10,
      content: '{{ticketName}}',
      style: { fontSize: 24, align: 'center', bold: true },
    };
    template.schemas.push({ ticketName: ticketSchema });

    const ticketDescriptionSchema = {
      type: 'text',
      position: { x: 0, y: 40 },
      width: 10,
      height: 10,
      content: '{{ticketDescription}}',
      style: { fontSize: 12, align: 'center' },
    };
    template.schemas.push({ ticketDescription: ticketDescriptionSchema });


    if (ticket.extras) {
      ticket.extras.forEach((extra: any) => {
        const extraNameSchema = {
          type: 'text',
          position: { x: 0, y: 40 },
          width: 10,
          height: 10,
          content: '{{extraName}}',
          style: { fontSize: 12, align: 'center' },
        };
        template.schemas.push({ extraName: extraNameSchema });

        const extraDescriptionSchema = {
          type: 'text',
          position: { x: 0, y: 40 },
          width: 10,
          height: 10,
          content: '{{extraDescription}}',
          style: { fontSize: 12, align: 'center' },
        };
        template.schemas.push({ extraDescription: extraDescriptionSchema });
      });
    }
  });

  return template;
}

const template = generateTemplate(order);




const inputs = order.tickets.flatMap(ticket => {
  const ticketInputs = {
    eventName: order.event_name.toString(),
    formattedDate: formatDate(order.start_date),
    ticketName: ticket.ticket_name.toString(),
    ticketDescription: ticket.ticket_description.toString(),
  };

  const extrasInputs = ticket.extras ? ticket.extras.map(extra => ({
    extraName: extra.extra_name.toString(),
    extraDescription: extra.extra_description.toString(),
  })) : [];

  return [ticketInputs, ...extrasInputs];
});



function generateAndOpenPDF(template: any, inputs: any) {
  generate({ template, inputs }).then((pdf: any) => {
    console.log(pdf);

    // Para abrir el PDF en una nueva ventana del navegador
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  }).catch((error: any) => {
    console.error('Error al generar el PDF:', error);
  });
}
  */
/////////////////////////////////////
// jsPDF
/////////////////////////////////////

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
