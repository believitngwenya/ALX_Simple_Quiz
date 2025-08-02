document.addEventListener('DOMContentLoaded', function() {
            const submitButton = document.getElementById('submit-answer');
            const feedbackElement = document.getElementById('feedback');
            const progressBar = document.getElementById('progress-bar');
            
            // Function to check the answer
            function checkAnswer() {
                // Set the correct answer
                const correctAnswer = "4";
                
                // Get the user's selected answer
                const selectedOption = document.querySelector('input[name="quiz"]:checked');
                
                if (!selectedOption) {
                    feedbackElement.textContent = "Please select an answer!";
                    feedbackElement.className = "incorrect";
                    return;
                }
                
                const userAnswer = selectedOption.value;
                
                // Compare answers and show feedback
                if (userAnswer === correctAnswer) {
                    feedbackElement.textContent = "Correct! Well done.";
                    feedbackElement.className = "correct";
                     } else {
                    feedbackElement.textContent = "That's incorrect. Try again!";
                    feedbackElement.className = "incorrect";
                }
                
                // Update progress bar
                progressBar.style.width = "25%";
            }
            
            // Add event listener to the submit button
            submitButton.addEventListener('click', checkAnswer);
            
            // Add event listeners to options for better UX
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const radio = this.querySelector('input[type="radio"]');
                    radio.checked = true;
                    
                    // Remove selection from other options
                    options.forEach(opt => {
                        opt.style.borderColor = '#e0e0e0';
                        opt.style.backgroundColor = '';
                    });
                    // Highlight selected option
                    this.style.borderColor = '#4a00e0';
                    this.style.backgroundColor = '#f0ebff';
                });
            });
        });