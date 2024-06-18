function calcularVolume() {
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var espessura = parseFloat(document.getElementById('espessura').value) / 1000; // Converter mm para m
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);

    var volumeUnidade = espessura * comprimento * largura;
    var volumeTotal = quantidade / volumeUnidade;

    document.getElementById('resultado').innerHTML = 'Volume total: ' + volumeTotal.toFixed(2) + ' m³';
}
