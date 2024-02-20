function getElementByClassOfSeat(element){
    const seats = document.getElementById(element);
        seats.classList.remove('bg-[#F7F8F8]');
        seats.classList.add('bg-[#1DD100]');
        seats.classList.add('text-white');
    }

document.addEventListener('click', getElementByClassOfSeat);

function reamainingseat(element){
    const remainig = document.getElementById(element);
    const remainigInnerValue =parseInt (remainig.innerText);
    remainig.innerText = remainigInnerValue-1;
}
document.addEventListener('click', reamainingseat);

function toCountSeat(element){
    const seat = document.getElementById(element);
    const seatInnerValue = parseInt(seat.innerText);
    seat.innerText=seatInnerValue+1;
}

function createElement(){
    const string ="   economy class        550taka";
    const stringcreate = document.createElement('span');
    stringcreate.innerText=string;
}
