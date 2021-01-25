document.addEventListener('DOMContentLoaded', function(){
    increment()
    counter()
    like()
    comment()
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
