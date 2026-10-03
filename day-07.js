// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");


function processData(callback) {
    callback();
}

function showMessage() {
    console.log("Data processed");
}

processData(showMessage)