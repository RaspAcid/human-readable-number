module.exports = function toReadable (number) {
    let num = number;
    let result = '';
    let counter = 0;
    
    if(num === 0){
        result = 'zero'
    }
    while(num>=1){
        if(number>=10&&number<=19||counter === 1 && number%100>=10&&number%100<=19){
        switch(number%100){
        case 10:
        result = 'ten'
        break;
        case 11:
        result = 'eleven'
        break;
        case 12:
        result = 'twelve'
        break;
        case 13: 
        result = 'thirteen'
        break;
        case 14:
        result = 'fourteen'
        break;
        case 15:
        result  = 'fifteen'
        break;
        case 16:
        result = 'sixteen'
        break;
        case 17:
        result = 'seventeen'
        break;
        case 18:
        result = 'eighteen'
        break;
        case 19:
        result = 'nineteen'
        break;
        default:
        break;
        }
      }else{
      switch(num%10){
        case 0: 
          result = result;
          break;
        case 1:
          if(counter === 2){
            result = 'one hundred ' + result;
            break;
          }else{
            result = 'one' + result;
            break;
          }
        case 2:
          if(counter === 1){
            result = 'twenty ' + result;
            break;
          }else if (counter === 2){
            result = 'two hundred ' + result;
            break;
          }else{
            result = 'two' + result;
            break;
          }
        case 3:
          if(counter === 1){
            result = 'thirty ' + result;
            break;
          }else if (counter === 2){
            result = 'three hundred ' + result;
            break;
          }else{
            result = 'three' + result;
            break;
          }
        case 4:
          if(counter === 1){
            result = 'forty ' + result;
            break;
          }else if (counter === 2){
            result = 'four hundred ' + result;
            break;
          }else{
            result = 'four' + result;
            break;
          }
        case 5:
          if(counter === 1){
            result = 'fifty ' + result;
            break;
          }else if (counter === 2){
            result = 'five hundred ' + result;
            break;
          }else{
            result = 'five' + result;
            break;
          }
        case 6:
          if(counter === 1){
            result = 'sixty ' + result;
            break;
          }else if (counter === 2){
            result = 'six hundred ' + result;
            break;
          }else{
            result = 'six' + result;
            break;
          }
        case 7:
          if(counter === 1){
            result = 'seventy ' + result;
            break;
          }else if (counter === 2){
            result = 'seven hundred ' + result;
            break;
          }else{
            result = 'seven' + result;
            break;
          }
        case 8:
          if(counter === 1){
            result = 'eighty ' + result;
            break;
          }else if (counter === 2){
            result = 'eight hundred ' + result;
            break;
          }else{
            result = 'eight' + result;
            break;
          }
        case 9:
         if(counter === 1){
          result = 'ninety ' + result;
          break;
          }else if(counter === 2){
            result = 'nine hundred ' + result;
            break;
          }else {
            result = 'nine' + result;
            break;
          }
        default:
          break;
      }}
      num = parseInt(num/10);
      counter++;
    }
      return(result.trim());  
}
