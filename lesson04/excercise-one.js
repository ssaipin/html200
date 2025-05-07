//1. Create an array with at leastt 5 straings 
    let colors = ['red', 'blue', 'green', 'purple', 'orange'];

    console.log(colors);
    // ["red","blue","green","purple","orange"]

//2. Add an element to the end of array 
    let colors = ['red', 'blue', 'green', 'purple', 'orange'];
    colors.push('pink');

    console.log(colors);
    // ["red","blue","green","purple","orange","pink"]

//3. Remove third element 
    let colors = ['red', 'blue', 'green', 'purple', 'orange'];
    colors.push('pink');
    colors.splice(2,1);

    console.log(colors);
    // ["red","blue","purple","orange","pink"]

//4. Create a string from the elements and comma separete them
    let colors = ['red', 'blue', 'green', 'purple', 'orange'];
    colors.push('pink');
    colors.splice(2,1);
    const colorsString = colors.join('","');

    console.log(colorsString);
    // "red','blue','purple','orange','pink"

