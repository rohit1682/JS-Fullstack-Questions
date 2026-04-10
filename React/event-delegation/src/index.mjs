import "./styles.css";

const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", (e) => {
  if (e.target.id == "grand-parent") console.log("GrandParent Clicked");
  if (e.target.id == "parent") console.log("Parent Clicked");
  if (e.target.id == "child") console.log("Child Clicked");
});
