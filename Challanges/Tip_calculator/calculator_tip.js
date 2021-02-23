function calc () {
  
    let bill = Number($('#bill').val());
        let percentage = Number($('#percentage').val());
let guest =  Number($('#guest').val());;


    let tip = bill * (percentage / 100);

    let total = (bill / guest) + tip ;


    $('#tip').val( tip.toFixed(2) );
    $('#total').val( total.toFixed(2) );
    console.log('always running')

    return false;
}

$('#calculator').submit( calc);