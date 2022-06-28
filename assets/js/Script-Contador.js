let currentNumberWrapper = document.getElementById("currentNumber")
const INCREMENT = document.getElementById("increment")
const DECREMENT = document.getElementById("decrement")

let count = 0;

INCREMENT.addEventListener("click",function increment(){
    
    if(count == 10)
    {
        return;
    }

    count++;

    if (count <= 10){
        currentNumberWrapper.innerHTML = count;
    }

    if (count >= 0){
        currentNumberWrapper.classList.remove("negative")
    }
}

)

DECREMENT.addEventListener("click", function decrement(){
    if(count == -10)
    {
        return;
    }

    count--;

    if (count >= -10){
        currentNumber.innerHTML = count;
    }

    if (count < 0){
        currentNumberWrapper.classList.add("negative")
    }

}

)
