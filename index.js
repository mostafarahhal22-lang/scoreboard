let hm = document.getElementById("hm-in")
let gs = document.getElementById("gs-in")
function addOneHm(){
    hm.textContent = Number(hm.textContent) + 1
}
function addTwoHm(){
    hm.textContent = Number(hm.textContent) + 2
}
function addThreeHm(){
    hm.textContent = Number(hm.textContent) + 3
}
function addOneGs(){
    gs.textContent = Number(gs.textContent) + 1
}
function addTwoGs(){
    gs.textContent = Number(gs.textContent) + 2
}
function addThreeGs(){
    gs.textContent = Number(gs.textContent) + 3
}
function start(){
    gs.textContent =0
    hm.textContent =0
}