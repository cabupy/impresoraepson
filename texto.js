const { USB, Printer } = require('escpos');

(async () => {

  try {
    const device = await new USB.getDevice(0x04b8, 0x0202)
    const printer = await new Printer.create(device)

    device.open(async() => {
      await printer.text('F  A  C  T  U  R  A')    
      await printer.text('PROCESA')
      await printer.text('RUC: 80084733-4 / TEL: 021286115')
      await printer.text('DIRECCION: AVDA. VENEZUELA C/ CASTELAR')
      await printer.text('Terminal: 226801201 Suc: PROCESA')
      await printer.text('Trans: 159182715 Usuar: procesa')

      await printer.text('Pago por cuenta y orden de') 
      await printer.text('NUCLEO S.A.')
      await printer.text('Servicio: Personal Recarga')
      await printer.text('Referencia: 0974277877')
      await printer.text('Ref. Consulta: 0974277877')
      await printer.text('Importe: 2,000 F. Pago: Efectivo')
      await printer.text('APROBADA. SU CREDITO ES: G$2432,4')       
      await printer.text('FACTURA CONTADO NRO:001-003-0915694 SE:5')
      await printer.text(' IVA INCL NUCLEO S.A. - RUC 80017437-2')  
      await printer.text('TIMBRADO:12501381 RUC:2469498')           
      await printer.text('CST: 2952969279')
      await printer.text('FECHA: 23/02/2018 - 13:14:57 XXX')
      await printer.text('**ESTE ES SU COMPROBANTE, CONSERVELO**')
      await printer.text('**** RED DE PAGOS ****')

      //await printer.text('0123456789012345678901234567891234567890')
      //await printer.text('0123456789012345678901234567891234567890')
      //await printer.text('0123456789012345678901234567891234567890')
      //await printer.text('0123456789012345678901234567891234567890')
      await printer.feed(2)
      await printer.cut()
      console.log('Fin')
      process.exit(0)
    })




  }
  catch (e) {
    console.log(e)
  }

  // USB.close()


})()
