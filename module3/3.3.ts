{
    //
    // Type Guard

    type AlphaNemeric = string|number;

    const add=(num1: AlphaNemeric, num2: AlphaNemeric): AlphaNemeric =>{
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        }else{
            return num1.toString() + num2.toString();
        }
    
    }

    // Example usage
    const result1 = add(5, 7);
    console.log(result1); // Output: 12

    const result2 = add('Hello', 5);
    console.log(result2); // Output: Hello5
       
    
    

    //
}