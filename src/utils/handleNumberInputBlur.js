export const handleNumberInputBlur = (event, initialValue) => {
    const startsWithZero = event.target.value.startsWith('0');
    const startsWithDot = event.target.value.startsWith('.');
    const endsWithDot = event.target.value.endsWith('.');
    
    let nonZeroValue = event.target.value.replace(/^0+/, '');

    if (!nonZeroValue.length || !event.target.value.length) {
        event.target.value = initialValue;
        return;
    }

    if (event.target.value === '.') {
        event.target.value = initialValue;
        return;
    }

    if (startsWithDot) {
        event.target.value = '0' + event.target.value;
        return;
    }

    if (startsWithZero && event.target.value.startsWith('0.')) {
        return;
    }

    if (endsWithDot) {
        nonZeroValue = nonZeroValue.slice(0, -1);
    }

    event.target.value = nonZeroValue;
};
