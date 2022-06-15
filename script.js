var style = "black"

function color(color){
    style = color
    clearInterval(interval)
}
function rainbow(){
    const arr = ["red","blue","green","yellow","purple"]
    var interval = setInterval(() => {
        style = arr[Math.floor(Math.random() * arr.length)]
    })
}
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext('2d')
    canvas.height = 800;
    canvas.width = 1000;
    var painting = false
    function start(e){
        painting = true
        draw(e)
    }
    function end() {
    painting = false
    ctx.beginPath()
    }
    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 8
        ctx.lineCap = 'round'

        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.strokeStyle = style
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
    canvas.addEventListener("mousedown", start)
    canvas.addEventListener("mouseup", end)
    canvas.addEventListener("mousemove", draw)
})