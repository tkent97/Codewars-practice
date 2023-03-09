// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    // Your code here
    let stringify = num.toString();
    const expand = [];
    for (let i = 0; i < stringify.length; i++) {
        if (stringify[i] === '0') {
            continue;
        }
        const digitValue = parseInt(stringify[i]) * 10 ** (stringify.length - i - 1);
        expand.push(digitValue.toString());
    }
    return expand.join(' + ')
}