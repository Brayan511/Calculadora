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


document.addEventListener('keydown', function(event) {
  const key = event.key;


  if (key >= '0' && key <= '9') {
    digit(key);
    event.preventDefault();
  }

  else if (key === '+') {
    digit('+');
    event.preventDefault();
  }
  else if (key === '-') {
    digit('-');
    event.preventDefault();
  }
  else if (key === '*') {
    digit('x'); 
    event.preventDefault();
  }
  else if (key === '/') {
    digit('/');
    event.preventDefault();
  }

  else if (key === '.') {
    addFloat();
    event.preventDefault();
  }
 
  else if (key === 'Enter' || key === '=') {
    equals();
    event.preventDefault();
  }
  
  else if (key === 'Delete' || key === 'c' || key === 'C') {
    clearAll();
    event.preventDefault();
  }
 
  else if (key === 'Backspace') {
    if (currentValue.length > 1) {
      currentValue = currentValue.slice(0, -1);
    } else {
      currentValue = '0';
    }
    display.value = currentValue;
    event.preventDefault();
  }
});
