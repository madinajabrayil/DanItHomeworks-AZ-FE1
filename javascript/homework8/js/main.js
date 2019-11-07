document.addEventListener('DOMContentLoaded', showInput);

function showInput() {
    let priceInput = document.createElement('input');
    let priceSpan = document.createElement('span');
    let button = document.createElement('button');

    priceInput.placeholder = 'Enter price:';
    //priceInput.type = 'number';
    

    button.innerHTML='X';

    document.body.append(priceInput);
    document.body.appendChild(priceSpan);
    document.body.appendChild(button);

    priceInput.addEventListener('focus', function () {
        priceInput.style.borderColor = 'green';
        priceInput.style.outlineStyle = 'none';
    });

    priceInput.addEventListener('blur', function () {
        if ( priceInput.value > 0 && !isNaN(Number(priceInput.value))) {
           
            priceSpan.innerText  = `Current price: ${priceInput.value}`;
            priceInput.style.borderColor = '';
        }else{
            priceInput.style.borderColor = 'red';
        }
    });

    button.addEventListener('click',function(e)
    {
        e.preventDefault();
        priceSpan.remove();
        button.remove();
        priceInput.value ='';
    })
    
    

   
}

