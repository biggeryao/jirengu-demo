const divScreen = document.querySelector('.screen');
const btnCreateNumber = document.querySelector('.createNumber');
const btnCallNumber = document.querySelector('.callNumber');
const spanNewNumber = document.querySelector('.newNumber');
const spanQueue = document.querySelector('.queue');

let n = 0;
let queue = [];

//点击取号 当前号码 +1
btnCreateNumber.onclick = () => {
    n += 1;
    // queue.push(n);
    queue.push.call(queue, n);
    spanNewNumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue)
}

//点击叫号   显示屏上出现请m好就餐
btnCallNumber.onclick = () => {
    const m = queue.shift.call(queue);
    if (m === undefined) {
        divScreen.innerText = '无人用餐';
        //没人用餐时 屏幕显示无人用餐 

    } else {
        divScreen.innerText = '请' + m + '号用餐';
        spanQueue.innerText = JSON.stringify(queue)
    }


}