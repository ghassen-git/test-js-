"use strict";
import data from './data.json' with { type :'json'};
console.log(data);
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const plusMinus = document.querySelectorAll(".plus-minus");
const commentsContainer = document.querySelector(".comment-section");
const commnets=document.querySelectorAll(".comments");
const subCommnets=document.querySelectorAll(".sub-comments");
function init() {
  commentsContainer.innerHTML = "";
  data.comments.forEach(function (c) {
    let ch = `      <div class="comments">
        <div itemId="${c.id}" class="plus-minus">
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
                class="reply"
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
  if(r){ch+=` <div class="sub-comments-container">
        <hr />
        <div  itemId="${r.id}" repliyingTo="${r.replyingTo}" class="comments sub-comments">
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
              <div class="reply">
                <img src="images/icon-reply.svg" class="icon-img" alt="" /><span
                  class="reply"
                  >reply</span
                >
              </div>
            </div>
            <p>
              ${r.content}
            </p>
          </div>
        </div>
      </div>`}
})
    commentsContainer.insertAdjacentHTML("afterbegin", ch);
  });
}
init();
plusMinus.forEach(function (s) {
  s.addEventListener("click", function (e) {
  
  if (e.target.classList.contains("plus")) {
    
  }
})
});
