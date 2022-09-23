const codes = document.querySelectorAll('.code');
// It will highlight the first input field
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // If the key pressed is not a number, it will not allow to enter
        if (e.key >= 0 && e.key <= 9) {
            // If the input field is not empty, it will move to the next input field
            codes[idx].value = '';
            // 
            setTimeout(() => codes[idx + 1].focus(), 10);
        }

        // Checking if the key pressed is backspace
        else if (e.key === 'Backspace') {
            // If the input field is empty, it will move to the previous input field
            setTimeout(() => codes[idx - 1].focus(), 10);
        }
    });
});