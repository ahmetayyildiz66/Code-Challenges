//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}