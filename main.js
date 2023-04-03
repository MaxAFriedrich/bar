function make(element) {
  const qr_code = document.getElementById("qr_code");
  try {
    height = Math.min(qr_code.clientHeight, qr_code.clientWidth);
    qr_code.innerHTML = new QRCode({
      msg: element.value,
      dim: height,
      pad: 4,
      mtx: -1,
      ecl: "H",
      ecb: 1,
      pal: ["#000", "#ffffff"],
      vrb: 0,
    }).outerHTML;
  } catch {}
}
