module.exports = function toReadable (number) {
      const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
      const dozen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
      const hundred = 'hundred';
    
    let convertedNumber = '';
    
    // from 0 to 20 
    if (number <= 20) {
        convertedNumber = digit[number];
    }
    
    // from 21 to 99 
    if (number > 20 && number < 100) {
        if (number % 10 == 0) {
        convertedNumber = `${dozen[number / 10]}`;
        }
        else convertedNumber = '${dozen[number / 10]} ${digit[number % 10]}`;
    }
    
    // from 100 to 999 
    if (number >= 100 && number <= 999) {
        if (number % 100 <= 20) {
            convertedNumber = `${digit[Math.floor(number / 100)]} ${hundred} ${digit[Math.floor((number % 100))]}`;
        }
        else convertedNumber = `${digit[Math.floor(number / 100)]} ${hundreds} ${digit[Math.floor((number % 100) / 10)]} ${digit[number % 10]}`;
    } 
    return convertedNumber;
}
