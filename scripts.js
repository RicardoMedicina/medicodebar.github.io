// Generador de Código de Barra CODE128 optimizado para TSC T200
document.getElementById('generar').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value.trim();
    const ubicacion = document.getElementById('ubicacion').value.trim();

    if (!codigo) {
        alert('Por favor, ingresá un código.');
        return;
    }

    // Generar el código de barras en formato CODE128
    JsBarcode("#barcode", codigo, {
        format: "CODE128",  // formato CODE128 solicitado
        lineColor: "#000000",
        width: 1.2,         // fino y legible
        height: 38,         // ajustado a etiqueta 5x33 mm
        displayValue: true, // muestra el número abajo
        fontSize: 8,
        margin: 0,
        textMargin: 0
    });

    document.getElementById('ubicacionDisplay').textContent = ubicacion;
});

// Imprimir sin encabezado ni pie
document.getElementById('imprimir').addEventListener('click', () => {
    const contenido = document.getElementById('resultado').innerHTML;
    const ventana = window.open('', '', 'width=300,height=150');

    ventana.document.write('<html><head><title>Etiqueta CODE128</title>');
    ventana.document.write('<style>');
    ventana.document.write(`
        @page { margin: 0; }
        body { 
            margin: 0; 
            padding: 0; 
            text-align: center;
        }
        svg { 
            display: block; 
            margin: 0 auto;
        }
        #ubicacionDisplay {
            font-size: 6pt;
            font-weight: bold;
            margin: 0;
        }
    `);
    ventana.document.write('</style></head><body>');
    ventana.document.write(contenido);
    ventana.document.write('</body></html>');
    ventana.document.close();

    // Imprimir automáticamente sin mostrar hora ni fecha
    ventana.onload = () => {
        ventana.focus();
        ventana.print();
        ventana.close();
    };
});