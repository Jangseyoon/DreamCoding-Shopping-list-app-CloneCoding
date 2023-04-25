const items = document.querySelector(".items"); //리스트가 들어가는 곳
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");

function onAdd(){
  //1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text===""){
    input.focus();
    return;
  }

  console.log(text);
  //2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새로 만든 아이템을 추가한다
  items.appendChild(item); //items는 ul태그임.
  //4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block:'center', behavior:"smooth"})
  //5. 인풋을 초기화한다.
  input.value="";
  input.focus(); //사용자가 계속 편하게 입력하도록 도와줌
}

function createItem(text){
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", 'item_row');

  const item = document.createElement("div");
  item.setAttribute("class", 'item');

  const name = document.createElement("span");
  name.setAttribute("class", "item_name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
  deleteBtn.addEventListener("click",()=>{
    items.removeChild(itemRow);
  })


  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener("click",()=>{
  onAdd();
});

input.addEventListener("keypress",(e)=>{
    if (e.key=='Enter') onAdd();
  }
)