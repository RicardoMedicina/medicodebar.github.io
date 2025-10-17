// Generador de Código de Barra CODE128 optimizado para TSC T200
document.getElementById('generar').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value.trim();
    const ubicacion = document.getElementById('ubicacion').value.trim();

    if (!codigo) {
        alert('Por favor, ingresá un código.');
        return;
    }

    // CODE128 soporta todos los caracteres ASCII (incluido "/"), así que no se toca
    const codigoSeguro = codigo;

    // Generar el código de barras en formato CODE128
    JsBarcode("#barcode", codigoSeguro, {
        format: "CODE128",
        lineColor: "#000000",
        width: 1.1,         // líneas finas
        height: 38,
        displayValue: true, // muestra el número abajo
        fontSize: 9,
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

    ventana.onload = () => {
        ventana.focus();
        ventana.print();
        ventana.close();
    };
});
