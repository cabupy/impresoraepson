const escpos = require('escpos');

// Select the adapter based on your printer type
const device = new escpos.USB(0x04b8, 0x0202);
// const device  = new escpos.Network('localhost');
//const device  = new escpos.Serial('/dev/usb/lp0');

const printer = new escpos.Printer(device)

device.open(function () {
  
  printer
    //.font('a')
    //.align('ct')
    //.style('bu')
    //.size(1, 1)
    .text('0123456789012345678901234567891234567890')
    .text('0123456789012345678901234567891234567890')
    .text('0123456789012345678901234567891234567890')
    .text('0123456789012345678901234567891234567890')
    .feed(5)
    //.cut()
    .close()
    
  //this.close()
})


