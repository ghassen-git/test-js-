"use strict";
import data from './data.json' with { type :'json'};

const commentsContainer = document.querySelector(".comment-section");

const init = function () {
  commentsContainer.innerHTML = ` <div class="add-comment comments">
        <img src="images/avatars/image-juliusomo.png" alt="" />
        <textarea
          name=""
          class="text-a-send"
          placeholder="Add a comment..."
        ></textarea>
        <button class='send'>SEND</button>
      </div>`;
  data.comments.forEach(function (c) {
    let ch = ` <div itemId="${c.id}" class="comments com">
        <div itemId="${c.id}" class="plus-minus" >
          <svg
            class=""
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
              class="hover plus"
            />
          </svg>
          <span class="number">${c.score}</span
          ><svg
            class=""
            width="15"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
              class="hover minus"
            />
          </svg>
        </div>
        <div class="text-box">
          <div class="text-box-head">
            <div>
              <img src="${c.user.image.png}" alt="" />
              <p class="user-name">${c.user.username}</p>
              <p class="date">${c.createdAt}</p>
            </div>
            <div class="reply">
              <img src="images/icon-reply.svg" class="icon-img" alt="" /><span
                
                >reply</span
              >
            </div>
          </div>
          <p>
            ${c.content}
          </p>
        </div>
      </div>`;
    c.replies.forEach(function (r) {
      if (r) {
        ch += ` <div itemId="${r.id}" class="sub-comments-container com">
        <hr />
        <div  itemId="${r.id}" id="sub-comments" repliyingTo="${r.replyingTo}" class=" comments sub-comments">
          <div class="plus-minus">
            <svg
              class=""
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
                class="hover plus"
              />
            </svg>
            <span class="number">${r.score}</span
            ><svg
              class=""
              width="15"
              height="4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
                class="hover minus"
              />
            </svg>
          </div>
          <div class="text-box">
            <div class="text-box-head">
              <div>
                <img src=${r.user.image.png} alt="" />
                <p class="user-name">${r.user.username}</p>
                <p class="date">${r.createdAt}</p>
              </div>
              
            </div>
            <p>
              ${r.content}
            </p>
          </div>
        </div>
      </div>`;
      }
    });

    commentsContainer.insertAdjacentHTML("afterbegin", ch);
  });
};
init();
const body = document.querySelector("body");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
let plusMinus = document.querySelectorAll(".plus-minus");
const commnets = document.querySelectorAll(".comments");
const subCommnets = document.querySelectorAll("#sub-comments");

const plMi = function (e, m) {
  const id = e.target
    .closest(".comments" || "#sub-comments")
    .getAttribute("itemId");
  let score = data.comments.find(function (s) {
    if (s.id == id) {
      return s.id == id;
    }
  });

  if (score) {
    score.score += m;
  } else {
    data.comments.forEach(function (c) {
      let x = c.replies.find(function (x) {
        return x.id == id;
      });
      if (x) {
        score = x;
      }
    });

    score.score += m;
  }
  e.target.closest(".plus-minus").querySelector(".number").textContent =
    score.score;
};
function updateVotes(arr) {
  arr.forEach(function (s) {
    s.addEventListener("click", function (e) {
      if (e.target.classList.contains("plus")) {
        plMi(e, 1);
      } else if (e.target.classList.contains("minus")) {
        plMi(e, -1);
      }
      
    });
  });
}
updateVotes(plusMinus);

let reply = document.querySelectorAll(".reply");
let idNum = 4;
const generatingRep = function (rp, e) {
  let nreply = document.querySelector(".new");
  if (nreply) {
    nreply.remove();
  }
  let container = e.target.closest(".com");
  let ch = ` <div class="add-comment new comments">
      <img src="images/avatars/image-juliusomo.png" alt="" />
      <textarea
        name=""
        class="text-a-reply"
        placeholder="Add a comment..."
      ></textarea>
      <button class="reply-cm">REPLY</button>
    </div>`;
  container.insertAdjacentHTML("afterEnd", ch);
  const replyCm = document.querySelector(".reply-cm");
  replyCm.addEventListener("click", function (e) {
    const item = container.getAttribute("itemId");

    let str = document.querySelector(".text-a-reply").value;
    if (str.trim()) {
      let Torep = data.comments.find(function (p) {
        return p.id == item;
      });
      idNum++;

      Torep.replies.push({
        id: idNum,
        content: str,
        createdAt: "xxxx",
        score: 0,
        replyingTo: Torep.user.username,
        user: {
          image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
      });
      document.querySelector(".text-a-reply").value = "";
      let ch = ` <div itemId="${idNum}" class="sub-comments-container com">
      <hr />
      <div  itemId="${idNum}" id="sub-comments" repliyingTo="${
        Torep.user.username
      }" class=" comments sub-comments">
        <div class="plus-minus">
          <svg
            class=""
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
              class="hover plus"
            />
          </svg>
          <span class="number">${0}</span
          ><svg
            class=""
            width="15"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
              class="hover minus"
            />
          </svg>
        </div>
        <div class="text-box">
          <div class="text-box-head">
            <div>
              <img src=${data.currentUser.image.png} alt="" />
              <p class="user-name">${data.currentUser.username}</p>
              <p class="date">${"xxxx"}</p>
            </div>
                   <div>
             <div class="delete">
              <img src="images/icon-delete.svg" class="icon-img" alt="" /><span
                
                >delete</span
              >
            </div>
            <div class="edit">
              <img src="images/icon-edit.svg" class="icon-img" alt="" /><span
                
                >edit</span
              >
            </div>
            </div>
          </div>
          <p>
            ${str}
          </p>
        </div>
      </div>
    </div>`;
      container.insertAdjacentHTML("afterEnd", ch);
    }
    
    plusMinus = document.querySelectorAll(".plus-minus");

    updateVotes(plusMinus);
  });

  body.addEventListener("click", function (e) {
    nreply = document.querySelector(".new");
    if (
      (e.target.classList.contains("body") ||
        e.target.classList.contains("comment-section")) &&
      nreply
    ) {


      nreply.remove();
    }
    deletePrompt()
  });
};

reply.forEach(function (rp) {
  rp.addEventListener("click", function (e) {

    return generatingRep(rp, e)

  });
 removeEventListener('click', generatingRep)
});

const SEND = document.querySelector(".send");
SEND.addEventListener("click", function (e) {
  let str = document.querySelector(".text-a-send").value;

  if (str.trim()) {
    idNum++;
    data.comments.push({
      id: idNum,
      content: `${str}`,
      createdAt: `xxxx`,
      score: 0,
      replies: [],
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: `${data.currentUser.username}`,
      },
    });

    document.querySelector(".text-a-send").value = "";
    console.log(data.comments);
    let ch = `<div itemId="${idNum}" class="comments com">
        <div itemId="${idNum}" class="plus-minus" >
          <svg
            class=""
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
              class="hover plus"
            />
          </svg>
          <span class="number">${0}</span
          ><svg
            class=""
            width="15"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
              class="hover minus"
            />
          </svg>
        </div>
        <div class="text-box">
          <div class="text-box-head">
            <div>
              <img src="${data.currentUser.image.png}" alt="" />
              <p class="user-name">${data.currentUser.username}</p>
              <span class="current-user">YOU</span>
              <p class="date">${"xxxx"}</p>
            </div>
            <div>
             <div class="delete">
              <img src="images/icon-delete.svg" class="icon-img" alt="" /><span
                
                >delete</span
              >
            </div>
            <div class="edit">
              <img src="images/icon-edit.svg" class="icon-img" alt="" /><span
                
                >edit</span
              >
            </div>
            </div>
          </div>
          <p>
            ${str}
          </p>
        </div>
      </div>`;
    commentsContainer.insertAdjacentHTML("afterbegin", ch);
    
   plusMinus = document.querySelectorAll(".plus-minus");
   let x=[] 
   x.push(plusMinus[0])
    updateVotes(x);
    deletePrompt()
  
  }
});

// Delete prompt
let deleteBtn = document.querySelectorAll('.delete');
const deletePrompt = function(){
 deleteBtn = document.querySelectorAll('.delete');
  
  deleteBtn.forEach( btn => {

    btn.addEventListener('click', (e) => {
      document.querySelector('.delete-confirm-container').classList.remove('hidden');
    

    const cancelBtn = document.getElementById('delete-cancel-btn');
    const confirmBtn = document.getElementById('delete-confirm-btn');

    cancelBtn.addEventListener('click', () => {
      document.querySelector('.delete-confirm-container').classList.add('hidden');
    });console.log(data.comments)
    confirmBtn.addEventListener('click', () => {
      document.querySelector('.delete-confirm-container').classList.add('hidden');
      let item=e.target.closest('.com').getAttribute('itemId')
 
      let toDelete=data.comments.find(function (cm) {
        return cm.id==item
      })
     
      if (toDelete) {
        data.comments.pop(toDelete)
        
      }else{
        data.comments.forEach(function (cm) {
          let x=cm.replies.find(function (p) {
            return p.id==item

          })
          if (x) {
            cm.replies.pop(x)
          }
        })
    
        
      }
      console.log(data.comments)
      btn.closest('.com').remove()
    })
  }); });
};
let edit=document.querySelectorAll('.edit')
function editCom() {
  edit=document.querySelectorAll('.edit')
  edit.forEach(function (ed) {
    ed.addEventListener('click',function (e) {
      
    })
  })
}
