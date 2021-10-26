const container = document.getElementById("container-imgs");
const selectValueButton = document.getElementById("filter");

let array = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
  },
];

function loadItems(array) {
  for (let { name, prefix, type, family } of array) {
    container.innerHTML += `<div class="col">
	<div class="item ">
	  <div><i class="${family} ${prefix}${name} ${type}"></i></div>
	  <div class="i-description">${name}</div>
	</div>
  </div>`;
  }
}

loadItems(array);

selectValueButton.addEventListener("change", function () {
  if (this.value == "all") {
    container.innerHTML = "";
    loadItems(array);
  } else {
    container.innerHTML = "";
    const newArray = array.filter((item) => item.type == this.value);
    console.log("newArray" + newArray);
    loadItems(newArray);
  }
});
