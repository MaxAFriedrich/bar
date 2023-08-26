window.onload = () => {
  function make(text) {
    const qr_code = document.getElementById("qr_code");
    try {
      height = Math.min(qr_code.clientHeight, qr_code.clientWidth);
      qr_code.innerHTML = new QRCode({
        msg: text,
        dim: height,
        pad: 4,
        mtx: -1,
        ecl: "H",
        ecb: 1,
        pal: ["#000", "#ffffff"],
        vrb: 0,
      }).outerHTML;
    } catch { }
  }

  const input = document.getElementById("input")
  input.value = new URLSearchParams(window.location.search).get("text")
  input.addEventListener("keyup",()=>{make(input.value)})
  make("123")
}
