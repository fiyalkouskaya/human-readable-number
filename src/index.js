module.exports = function toReadable (number) {
      let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
      let dozen = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      let hundred = 'hundred';
    
    let convertedNumber = '';
    
    // from 100 to 999 
        if (number >= 100 && number <= 999 && number % 10 == 0) {
            if (number % 100 == 0) {
                convertedNumber = `${digit[Math.floor(number / 100)]} ${hundred}`;
            } else {
                convertedNumber = `${digit[Math.floor(number / 100)]} ${hundred} ${dozen[(number % 100) / 10]}`;
            }
    }
        if (number >= 100 && number <= 999) {
            if (number % 100 <= 20) {
                convertedNumber = `${digit[Math.floor(number / 100)]} ${hundred} ${digit[Math.floor((number % 100))]}`;
            }
            else convertedNumber = `${digit[Math.floor(number / 100)]} ${hundred} ${dozen[Math.floor((number % 100) / 10)]} ${digit[number % 10]}`;
        }  
    // from 21 to 99 
        if (number > 20 && number < 100) {
            if (number % 10 == 0) {
            convertedNumber = `${dozen[number / 10]}`;
            }
            else convertedNumber = `${dozen[Math.floor(number / 10)]} ${digit[number % 10]}`;
        }
    // from 0 to 20 
        if (number <= 20) {
            convertedNumber = digit[number];
        }
    return convertedNumber;
}
