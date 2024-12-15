let div = document.querySelector("#result");
let result = document.createElement("strong");
let equal = document.querySelector("#equal");

let array = [];
let array2 = [];
let answer = '';

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".button");
    console.log(buttons);

    buttons.forEach((button) => {
        button.addEventListener("pointerdown", () => {
            console.log("The button content is: ",button.innerText); 

            if(button.innerText == 'C')
            {
                result.innerText = '';
            }else{
                if(button.innerText == '=')
                {
                    try{
                        console.dir(result.innerText);
                        let value = eval(result.innerText);
                        console.dir(value);
                        result.innerText = value;
                    }catch(err)
                    {
                        console.log("ERROR is: ",err);
                    }
                }else{
                    if(button.innerText == "X")
                    {
                        array = result.innerText;
                        console.log("The string is: ",array," and length is: ",array.length);
                        console.dir(result.innerText);
                        for(let i = 0; i < array.length; i++)
                        {
                            console.log("The element at index: ",i,"is: ",array[i]);
                            array2[i] = array[i]; 
                        }
                            console.log("The array2 is:",array2);
                            array2.pop();
                            console.log("The new array is: ", array2);

                        for(let j = 0; j < array2.length; j++)
                        {
                            answer = answer + array2[j];
                        }
                            console.log("the new value array is: ",answer);
                            result.innerText = answer;
                            answer = '';
                    }else{
                        result.innerText = result.innerText + "" + button.innerText;
                        div.append(result);
                        result.classList.add("font");
                    }
                    
                }
            }
        });

    });
});
