document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();

        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);

        let numeroSorteado = function() {
            let n = Math.round(Math.random() * numeroMaximo);

            if (n == 0) {
                n += 1;
            }

            return n;
        }

        document.getElementById('resultado-valor').innerText = numeroSorteado();

    })
});