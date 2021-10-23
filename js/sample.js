let subject = 'JavaScript' //global variable
function homework(){
    let student = 'Brian';
    console.log(`${student}, did you do your ${subject} homework?`)
}




function outer(){
    let outerMessage = 'This is the outer message!'
}





function parsePersonObject(person){
    // Loop through the keys of person
    for (let i = 0; i < Object.keys(person).length; i++){
        // If value of object at key[i] is an array
        if (Array.isArray(Object.values(person)[i])){
            // loop through the array
            for (let j = 0; j < Object.values(person)[i].length; j++){
                // if the value of array[j] is an object
                if(typeof(Object.values(person)[i][j]) === 'object'){
                    // loop through the keys of person[i][j]
                    for (let k = 0; k < Object.keys(Object.values(person)[i][j]).length; k++){
                        // log the value at index k of person[i][j]
                        console.log(Object.values(Object.values(person)[i][j])[k])
                    }
                }else {
                    console.log(Object.values(person)[i][j])
                }
            }
        }else{
            console.log(Object.values(person)[i])
        }
    }
}