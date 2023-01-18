import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
//getElementById : id으로 HTML불러올 수 있음
//querySelector : 태그로 HTML 불러올 수 있음
const countModifier = (count = 0, action) => {
  switch(action.type){
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText =countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: "ADD"});
};

const handleMinus = () => {
  countStore.dispatch({type:"MINUS"});
};

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);



