async function checkIp() {
    try {
        const response = await fetch('https://api.db-ip.com/v2/free/self');
        const ipData = await response.json();
        
        const ipAddress = ipData.ipAddress;
        const sumOfDigits = calculateSumOfDigits(ipAddress);
        
        if (sumOfDigits > 100) {
            alert('OK');
        } else {
            alert('KO');
        }
    } catch (error) {
        console.error('Error fetching IP data:', error);
        alert('Error fetching IP data');
    }
}

function calculateSumOfDigits(ipAddress) {
    const digits = ipAddress.replace(/\./g, '').split('').map(Number);
    return digits.reduce((acc, curr) => acc + curr, 0);
}

