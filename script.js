const display = document.getElementById('result');

function digit(value) {
  if (value === 'x') {
    value = '*';
  }

  display.value += value;
}

function addFloat() {
 
  const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
  
  if (!lastNumber.includes('.')) {
    display.value += '.';
  }
}


function equals() {
  try {
   
    let expression = display.value.replace(/x/g, '*');
    
    
    const result = eval(expression);
    
    
    if (!isNaN(result) && isFinite(result)) {
   
      display.value = result % 1 === 0 ? result : result.toFixed(6).replace(/\.?0+$/, '');
    } else {
      display.value = 'Erro';
    }
  } catch (error) {

    display.value = 'Erro';
  }
}


function clearAll() {
  display.value = '';
}


