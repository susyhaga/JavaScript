function calc(bill, percentage, guest) {  
    let tip = bill * (percentage / 100);

    return (bill / guest) + tip;
}

module.exports = calc;

// let bill = Number($('#bill').val());
// let percentage = Number($('#percentage').val());
// let guest = Number($('#guest').val());
// let total = calc(bill, percentage, guest);

// $('#tip').val( tip.toFixed(2) );
// $('#total').val( total.toFixed(2) );

// $('#calculator').submit(total);