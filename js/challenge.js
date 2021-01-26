document.addEventListener('DOMContentLoaded', function(){
    increment()
    counter()
    like()
    comment()
    pause()
})

function increment(){
    const counter = document.getElementById('counter')
    const minus = document.getElementById('minus')
    const plus = document.getElementById('plus')
    let counterInt = parseInt(counter.innerText)
    plus.addEventListener('click', function(){
        counter.innerText = counterInt += 1  
    })
    minus.addEventListener('click', function(){
        counter.innerText = counterInt -= 1
    })
}

function counter(){
    setInterval(increase, 1000)
}

function increase() {
    const counter = document.getElementById('counter')
    let counterInt = parseInt(counter.innerText)
    counter.innerText = counterInt += 1
}

function like(){
    const heart = document.getElementById('heart')
    const likes = document.createElement('li')
    const counter = document.getElementById('counter')
    
    
    heart.addEventListener('click', (e) => {
        e.preventDefault();
        let counterInt = parseInt(counter.innerText)
        let likesInt = parseInt(likes.innerText)
        likesInt += 1
        likes.innerText = `${counterInt} has ${likesInt} likes`
        
        document.getElementById('list').appendChild(likes)
        
    });

}
    

function comment(){

    const form = document.getElementById("comment-form")
    const textArea = document.getElementById("comment-input")
    const commentList = document.getElementById("list")

    form.addEventListener("submit", function(e){
        e.preventDefault();
        let commentText = textArea.value;
        let p = document.createElement("p");
        p.innerText = commentText;
        commentList.appendChild(p);
    })

}

function pause(){
    let pause = document.getElementById("pause")
    let interval = setInterval(increment, 1000)
    let decrement = document.getElementById('minus')
    let increase = document.getElementById('plus')
    
    pause.addEventListener("click", function(){
        
        if(document.querySelector('#pause').innerText == "pause") {
        clearInterval(interval)
        document.querySelector('#pause').innerText = "resume"
        decrement.disabled = true;
        increase.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        } else {
        interval = setInterval( increment, 1000);
        document.querySelector('#pause').innerText = "pause"
        decrement.disabled = false;
        increase.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
        }
    });}
