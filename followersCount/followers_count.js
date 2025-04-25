let count = 0; //initialize count

function increaseCount() {
    count++; //increment count by one
    displayCount();
    checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
        alert("Your post gained 10 followers");
    } else if (count ===20) {
        alert("Your post gained 20 followers");
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // display current count
}

function resetCount() {
    count = 0;
    displayCount();
    alert("Followers count has been reset");
}

