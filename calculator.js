 document.addEventListener('DOMContentLoaded', function() {
            // Arithmetic functions
            function add(number1, number2) {
                return number1 + number2;
            }
            
            function subtract(number1, number2) {
                return number1 - number2;
            }
            
            function multiply(number1, number2) {
                return number1 * number2;
            }
            
            function divide(number1, number2) {
                if (number2 === 0) {
                    return "Error: Division by zero!";
                }
                return number1 / number2;
            }
            
            // DOM elements
            const number1Input = document.getElementById('number1');
            const number2Input = document.getElementById('number2');
            const resultElement = document.getElementById('calculation-result');
            const historyList = document.getElementById('history-list');
            
            // Function to update history
            function updateHistory(operation, num1, num2, result) {
                const operationSymbols = {
                    'add': '+',
                    'subtract': '-',
                    'multiply': '×',
                    'divide': '÷'
                };
                
                const symbol = operationSymbols[operation];
                const historyItem = document.createElement('li');
                
                if (typeof result === 'string') {
                    // Error case
                    historyItem.textContent = `${num1} ${symbol} ${num2} = ${result}`;
                    historyItem.style.color = '#dc3545';
                } else {
                    // Normal calculation
                    historyItem.textContent = `${num1} ${symbol} ${num2} = ${result}`;
                    historyItem.style.color = '#28a745';
                }
                
                historyList.insertBefore(historyItem, historyList.firstChild);
                
                // Limit history to 10 items
                if (historyList.children.length > 10) {
                    historyList.removeChild(historyList.lastChild);
                }
            }
            
            // Function to get input values
            function getInputValues() {
                const number1 = parseFloat(number1Input.value) || 0;
                const number2 = parseFloat(number2Input.value) || 0;
                return { number1, number2 };
            }
            
            // Function to perform calculation and update UI
            function performOperation(operation) {
                const { number1, number2 } = getInputValues();
                let result;
                
                switch(operation) {
                    case 'add':
                        result = add(number1, number2);
                        break;
                    case 'subtract':
                        result = subtract(number1, number2);
                        break;
                    case 'multiply':
                        result = multiply(number1, number2);
                        break;
                    case 'divide':
                        result = divide(number1, number2);
                        break;
                }
                
                // Update result display
                if (typeof result === 'number') {
                    resultElement.textContent = result.toFixed(2);
                } else {
                    resultElement.textContent = result;
                }
                
                // Update history
                updateHistory(operation, number1, number2, result);
            }
            
            // Attach event listeners to buttons
            document.getElementById('add').addEventListener('click', function() {
                performOperation('add');
            });
            
            document.getElementById('subtract').addEventListener('click', function() {
                performOperation('subtract');
            });
            
            document.getElementById('multiply').addEventListener('click', function() {
                performOperation('multiply');
            });
            
            document.getElementById('divide').addEventListener('click', function() {
                performOperation('divide');
            });
            
            // Initialize with a calculation
            performOperation('add');
        });