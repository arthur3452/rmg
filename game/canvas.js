	const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	canvas.width = 700
	canvas.height = 500

    canvas.addEventListener('mousedown', (e) => {
      drawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!drawing) return;
	  ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      lastX = e.offsetX;
      lastY = e.offsetY;
    });

    canvas.addEventListener('mouseup', () => {
      drawing = false;
    });

    canvas.addEventListener('mouseout', () => {
      drawing = false;
    });
	function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}