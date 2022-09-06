const counters = document.querySelectorAll('.counter');
// traversing the counters using forEach
counters.forEach(counter => {
    // setting the intial value to be zero
    counter.innerText = '0';
    // created a function to update the counter
    const updateCounter = () => {
            // getting the target value from the data attribute and "+" will convert its type from string to integer
            const target = +counter.getAttribute('data-target');
            // getting the current value from the counter
            const c = +counter.innerText;
            // This will make sure that irrespective of the target value, the counter will take same time to finish
            const increment = target / 150;

            // if the current value is less than the target value
            // then we will increment the current value by the increment value
            if (c < target) {
                counter.innerText = `${Math.ceil(c+increment)}`;
                // this will call the updateCounter function after every 1ms
                setTimeout(updateCounter, 1);
            } else {
                // if the current value is greater than the target value
                // then we will set the current value to the target value
                counter.innerText = target;
            }
        }
        // calling the updateCounter function
    updateCounter();
})