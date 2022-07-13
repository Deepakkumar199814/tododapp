let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//"submit" event listener for the form so that it can prevent the default behaviour of our App
form.addEventListener("submit", (e) => {
  e.preventDefault(); //it can prevent the default behaviour of our App
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    // console.log("failure");
  } else {
    // console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {}; //object
//function
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

//display the post
let createPost = () => {
  posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)"class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
  input.value = "";
};
let deletePost = (e) => {
  if (confirm("Do you want to delete this Todo?"))
    e.parentElement.parentElement.remove();
};
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
