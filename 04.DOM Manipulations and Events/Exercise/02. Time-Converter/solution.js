function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll('input[type=button]').value);
    for (let button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(e) {
        let value = Number(e.target.parentElement.querySelector('input[type=text]').value);
        let unit = e.target.id;

        switch (unit) {
            case 'dayBtn':
                populate(value)
                break;
            case 'hoursBtn':
                populate(value / 24)
                break;
            case 'minutesBtn':
                populate(value / 24 / 60)
                break;
            case 'secondsBtn':
                populate(value / 24 / 60 / 60)
                break;
        }
    }

    function populate(valueInDay) {
        let input = Array.from(document.querySelectorAll('input[type=text]'));
        input.shift().value = valueInDay;
        let currentValue = valueInDay * 24;
        for (let input of inputs) {
            input.value = currentValue;
            currentValue *= 60;
        }
    }
}


// function attachEventsListeners() {
//     let days = document.getElementById("days");
//     let hours = document.getElementById("hours");
//     let minutes = document.getElementById("minutes");
//     let seconds = document.getElementById("seconds");
//
//     let rations = {
//         days: 1,
//         hours: 24,
//         minutes: 1440,
//         seconds: 86400,
//     };
//     document.getElementById("daysBtn").addEventListener("click", onConvert);
//     document.getElementById("hoursBtn").addEventListener("click", onConvert);
//     document.getElementById("minutesBtn").addEventListener("click", onConvert);
//     document.getElementById("secondsBtn").addEventListener("click", onConvert);
//
//     function convert(value, unit) {
//         let days = value / rations[unit];
//
//         return {
//             days: days,
//             hours: days * rations.hours,
//             minutes: days * rations.minutes,
//             seconds: days * rations.seconds,
//         };
//     }
// }