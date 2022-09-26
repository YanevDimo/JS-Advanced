// function attachGradientEvents() {
//     let gradientElement = document.getElementById('gradient');
//     let resultElement = document.getElementById('result');
//
//     const gradientMouseHandler = (ev) =>{
//         resultElement.textContent = Math.floor(ev.offsetX / ev.target.offsetWidth * 100);
//     };
//     gradientElement.addEventListener('mousemove',gradientMouseHandler);
// }

function attachGradientEvents(){
    document.getElementById('gradient').addEventListener('mousemove',onMove);
    const output = document.getElementById('result')

    function onMove(event){
        const offsetX = event.offsetX;
        const percent = Math.trunc(offsetX / event.target.clientWidth * 100);

       output .textContent = `${percent}%`;
    }
}