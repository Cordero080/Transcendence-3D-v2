// Spectral Sine Wave Background Animation (modularized)
export function drawSpectralSineWave() {
  const canvas = document.getElementById("spectralSineWaveBg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  // Set canvas size to fill window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const w = canvas.width;
  const h = canvas.height;
  const amplitude = h * 0.04;
  const yCenter = h * 0.5;
  const frequency = 2.5;
  const waveLength = w / frequency;
  const now = Date.now() / 4000;
  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.lineWidth = 2;

  // Animate the gradient by shifting stops
  const shift = (now * 0.48) % 1;
  const spectralStops = [
    { stop: (0.0 + shift) % 1, color: "#ff00cc" }, // magenta
    { stop: (0.08 + shift) % 1, color: "#8e00ff" }, // violet
    { stop: (0.16 + shift) % 1, color: "#3333ff" }, // blue
    { stop: (0.24 + shift) % 1, color: "#00bfff" }, // sky blue
    { stop: (0.32 + shift) % 1, color: "#00fff7" }, // cyan
    { stop: (0.4 + shift) % 1, color: "#03eda3ff" }, // aqua green
    { stop: (0.48 + shift) % 1, color: "#00ff00" }, // green
    { stop: (0.56 + shift) % 1, color: "#aaff00" }, // yellow-green
    { stop: (0.64 + shift) % 1, color: "#ffff00" }, // yellow
    { stop: (0.72 + shift) % 1, color: "#ff8800" }, // orange
    { stop: (0.8 + shift) % 1, color: "#ff3300" }, // red-orange
    { stop: (0.88 + shift) % 1, color: "#ff0000" }, // red
    { stop: (0.96 + shift) % 1, color: "#ff00bfff" }, // hot pink
    { stop: (1.0 + shift) % 1, color: "#ff00cc" }, // magenta (loop)
  ];
  // Sort stops so gradient is always increasing
  spectralStops.sort((a, b) => a.stop - b.stop);
  const grad = ctx.createLinearGradient(0, yCenter, w, yCenter);
  spectralStops.forEach(({ stop, color }) => grad.addColorStop(stop, color));
  ctx.strokeStyle = grad;

  // First sine wave
  ctx.beginPath();
  for (let x = 0; x <= w; x += 2) {
    const t = (x / waveLength) * Math.PI * 2;
    const y =
      yCenter +
      amplitude * Math.sin(t + now * 1.2) * Math.cos(now * 0.5 + t * 0.5);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.shadowColor = "#fff";
  ctx.shadowBlur = 18;
  ctx.stroke();

  // Second sine wave (different amplitude, frequency, phase, and line width)
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = grad;
  ctx.beginPath();
  for (let x = 0; x <= w; x += 2) {
    const t = (x / (waveLength * 0.8)) * Math.PI * 2;
    const y =
      yCenter +
      amplitude * 0.7 * Math.sin(t - now * 1.7) * Math.cos(now * 0.8 - t * 0.3);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.shadowColor = "#fff";
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(drawSpectralSineWave);
}
