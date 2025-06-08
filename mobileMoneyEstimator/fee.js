function estimateTransactionFee(amountToSend) {
    let minTransactionFee = 10;
    let maxTransactionFee = 70;
    let totalAmountWithMin = amountToSend + minTransactionFee;
    let totalAmountWithMax = amountToSend + maxTransactionFee;
    let transactionFee = amountToSend * 0.015;
    let totalAmount = amountToSend + transactionFee;

    if (transactionFee < minTransactionFee) {
        return `
    Transfering KES ${amountToSend}:
    Computed Transaction Fee: KES ${minTransactionFee}
    Total Amount to be paid: KES ${totalAmountWithMin}
    
    SST--Safe and Secure Transactions!
    `;
    } else if (transactionFee > maxTransactionFee) {
        return `
    Transfering KES ${amountToSend}:
    Computed Transaction Fee: KES ${maxTransactionFee}
    Total Amount to be paid: KES ${totalAmountWithMax}
    
    SST--Safe and Secure Transactions!
    `;
    } else {
        return `
    Transfering KES ${amountToSend}:
    Computed Transaction Fee: KES ${transactionFee}
    Total Amount to be paid: KES ${totalAmount}
    
    SST--Safe and Secure Transactions!
    `;
    }
    
}

function promptMsg(){
    let transactionPrompt = prompt("Amount (KES)?");
    let amountToSend= parseInt(transactionPrompt);

    if (amountToSend > 0) {
        return calculateBodaFare(amountToSend);
    } else {
        return "Please enter a valid amount (KES)."
    }
}

