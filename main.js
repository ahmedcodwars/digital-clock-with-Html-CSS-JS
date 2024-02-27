function timeOut() {
    let theClock = document.querySelector('.clock');
    let theDigits = document.querySelector('#digits');
    let date = new Date();
    let dateTime = date.toLocaleTimeString()
    theDigits.innerHTML = '';
    theDigits.appendChild(document.createTextNode(dateTime));
    theClock.appendChild(theDigits);
}
setInterval(timeOut, 1000)