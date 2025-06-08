function calculateBodaFare(distanceInKm) {
    let baseFare = 50;
    let chargePerKm = 15 ;
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    let customerMsg = 
    `
    Huko ni ${distanceInKm} km peekee?
    Kupanda Pikipiki: KES ${baseFare}
    Mpaka Kwako: KES ${distanceInKm * chargePerKm}
    Total: KES ${totalFare}
    
    Haraka, Salama, na Rahisi
    Panda Pikipiki!
    `;

    return customerMsg;

}

function promptMsg(){
    let kmPrompt = prompt("Boss, unaelekea wapi? Kilometer ngapi?");
    let numberOfKm = parseInt(kmPrompt);

    if (numberOfKm > 0) {
        return calculateBodaFare(distanceInKm);
    } else {
        return "Tafadhali hakikisha kuwa umeweka kilometer halali."
    }
}






