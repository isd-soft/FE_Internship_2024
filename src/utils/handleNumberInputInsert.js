export const handleNumberInputInsert = (event, floatFlag = false) => {
    const inputValue = event.target.value;

    if (!floatFlag) {
        const isValidInput = /^\d+$/.test(inputValue) || inputValue === '';
        if (isValidInput) {
            return;
        } else {
            event.preventDefault();
            event.target.value = inputValue.replace(/[^\d]/g, ''); // Remove non-digit characters
            return;
        }
    }

    let dotCount = 0;

    inputValue.split('').forEach(char => {
        if (char === '.') dotCount++;
    });

    if (dotCount > 1 && event.data === '.') {
        const value = event.target.value;
        event.target.value = value.slice(0, -1);
        return;
    }

    const isValidInput = /^[\d.]+$/.test(inputValue) || inputValue === '';

    if (isValidInput) {
        return;
    } else {
        event.preventDefault();
        event.target.value = inputValue.replace(/[^\d.]/g, '');
    }
};
