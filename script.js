document.getElementById('acetilar').addEventListener('click', function() {
    document.getElementById('output').innerText = 'Has aplicado una acetilación. Esto aumenta la expresión génica.';
});

document.getElementById('metilar').addEventListener('click', function() {
    document.getElementById('output').innerText = 'Has aplicado una metilación. Esto puede activar o reprimir la expresión génica.';
});