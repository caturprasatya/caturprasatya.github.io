var enterButton = document.getElementById("enter")
var input = document.getElementById("input")
var ul = document.querySelector("ul")
var item = document.getElementsByTagName("li")

console.log(input.value.length)

function inputLength() {
    return input.value.length
}

function listLength() {
    return item.length
}


function createListElement() {
    var li = document.createElement("li") //membuat elemen baru
    li.appendChild(document.createTextNode(input.value)) //menambahkan dari text input ke li
    ul.appendChild(li) //menambahkan dari li ke ul
    input.value= "" //reset text 
    console.log('cari tahu prosesnya')

    // START STRIKETTHROUGH
    //karena ini didalam function, hanya akan menambahkan item baru jika function diatas berjalan
    function crossOut() {
        li.classList.toggle("done")
    }

    li.addEventListener("click",crossOut)
    //END STRIKETHROUGH

    //START ADD DELETE BUTTON
    var dBtn = document.createElement("button")
    dBtn.appendChild(document.createTextNode("X")) //menambahkan tanda silang
    li.appendChild(dBtn) // menabahkan ke li
    dBtn.addEventListener("click", deleteListItem)
    //END ADD

    // ADD CLASS DELETE (DISPLAY : none)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD

}

function addListAfterClick() {
    if (inputLength() > 0) { //mengecek apakah inputkosong atau tidak
        createListElement() // jika true akan membuat elemen
        console.log('menekan melakukan pengecekan')
    }
}

function addListAfterKeypress(event) { // event === macam macam action yang ada di DOM
    if (inputLength() > 0 && event.which === 13) { // event.which mengubah perintah pada keyboard menjadi Unicode && 13 = enter
        createListElement()
        console.log('menekan melakukan pengecekan')
    }
}


enterButton.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)