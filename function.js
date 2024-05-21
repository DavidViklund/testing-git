// Funktion för att beräkna mattetal för ett tal
function beräknaMattetal(tal) {
    // Använd Math.floor() för att avrunda nedåt till närmaste heltal
    return Math.floor(tal);
}

// Testa funktionen med ett exempel
const tal = 3.7;
const mattetal = beräknaMattetal(tal);
console.log("Mattetal för", tal, "är:", mattetal);