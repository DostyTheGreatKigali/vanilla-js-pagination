const list_items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
    "Item 23",
    "Item 24"
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

function displayList(items, wrapper, rows_per_page, page ) {

    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page; 
     let end = start + rows_per_page;
     
    let paginatedItems = items.slice(start, end);
    // let paginatedItems = items.slice(loop_start, loop_start + rows_per_page);
    console.log(paginatedItems);
    // for(let i = loop_start; i < loop_start + rows_per_page; i++) {
    for(let i = 0; i < paginatedItems.length; i++) {
        // console.log(items[i]);
        // let item = items[i];
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerText = item;

        wrapper.appendChild(item_element);

    }

}

function setupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);

    for(let i = 1; i < page_count + 1; i++) {
      let btn =  paginationButton(i, items);
      wrapper.appendChild(btn);
    }
 
}

function paginationButton(page, items) {
   let button = document.createElement('button');
   button.innerText = page;

   if(current_page == page) {
       button.classList.add('active');
   } 


   button.addEventListener('click', function() {
    current_page = page;
    displayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active')
  });

   return button;

    // let page_count = Math.ceil(items.length / rows_per_page);
    // for(let i  = 1; i < page_count + 1; i++) {
    //     paginationButton(i, items);
    // }
 
}

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);
