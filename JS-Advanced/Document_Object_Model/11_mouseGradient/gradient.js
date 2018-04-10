function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', gradientMove);
    document.getElementById('gradient').addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let x = event.offsetX;
        let percent = (x / this.clientWidth) * 100;
        document.getElementById('result').textContent = percent.toFixed(0) + '%';
    }
    function gradientOut() {
        document.getElementById('result').textContent = '';
    }
}