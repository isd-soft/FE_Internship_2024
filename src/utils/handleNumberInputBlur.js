export const handleNumberInputBlur = (event, initialValue) => {
    const startsWithZero = event.target.value.startsWith('0');
    const startsWithDot = event.target.value.startsWith('.');
    const endsWithDot = event.target.value.endsWith('.');
    
    let nonZeroValue = event.target.value.replace(/^0+/, '');

    if (!nonZeroValue.length || !event.target.value.length) {
        event.target.value = initialValue;
        return;
    }

    // If the input consists only of a dot, change it to the initialValue
    if (event.target.value === '.') {
        event.target.value = initialValue;
        return;
    }

    // If the first character is '.' add a '0' at the beginning
    if (startsWithDot) {
        event.target.value = '0' + event.target.value;
        return;
    }

    // If the first 2 characters are '0.' then don't remove the zero
    if (startsWithZero && event.target.value.startsWith('0.')) {
        return;
    }

    // Remove leading zeros
    if (endsWithDot) {
        nonZeroValue = nonZeroValue.slice(0, -1);
    }

    event.target.value = nonZeroValue;
};
