function validate() {
    //select input field add change event listener
    document.getElementById('email').addEventListener('change', onChange)
    {

//onChange -> validate input
        function onChange(event) {
            const email = event.target.value;

            if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
                //if valid -> add class error

            } else {
                //else -> remove class error
                event.target.className = 'error'
            }
        }
    }


}