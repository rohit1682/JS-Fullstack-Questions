const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked");
  },
  true
);
parent.addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  false
);
child.addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  true
);
