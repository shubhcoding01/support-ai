let prompt = document.querySelector('#prompt');
let chatContainer = document.querySelector('.chat-container');

function createChatBox(html,classes){
    let div = document.createElement("div")
    div.innerHTML = html
    div.classList.add(classes)
    return div;
}

function handleChatResponse(message){
    let html = ` <img src="usersai.png" alt="" id="userImage" width="40">
            <div class="user-chat-area">
            ${message}

            </div>`

    let userChatBox = createChatBox(html, "user-chat-box")
    chatContainer.appendChild(userChatBox)        
}

prompt.addEventListener("keydown",(e) =>{
    if(e.key == "Enter")
    {
        handleChatResponse(prompt.value)
    }
    
})