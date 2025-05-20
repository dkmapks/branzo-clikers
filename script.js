function calcNet(gross, tax) {
  return gross - (gross * tax / 100);
}

function calculateYT() {
  let views = parseFloat(document.getElementById("ytViews").value);
  let cpm = parseFloat(document.getElementById("ytCPM").value);
  let tax = parseFloat(document.getElementById("ytTax").value);
  let gross = (views / 1000) * cpm;
  document.getElementById("ytResult").innerText = calcNet(gross, tax).toFixed(2);
}

function calculateTT() {
  let views = parseFloat(document.getElementById("ttViews").value);
  let cpm = parseFloat(document.getElementById("ttCPM").value);
  let tax = parseFloat(document.getElementById("ttTax").value);
  let gross = (views / 1000) * cpm;
  document.getElementById("ttResult").innerText = calcNet(gross, tax).toFixed(2);
}

function calculateIG() {
  let posts = parseFloat(document.getElementById("igPosts").value);
  let perPost = parseFloat(document.getElementById("igPerPost").value);
  let tax = parseFloat(document.getElementById("igTax").value);
  let gross = posts * perPost;
  document.getElementById("igResult").innerText = calcNet(gross, tax).toFixed(2);
}

function calculateSP() {
  let plays = parseFloat(document.getElementById("spPlays").value);
  let cpm = parseFloat(document.getElementById("spCPM").value);
  let tax = parseFloat(document.getElementById("spTax").value);
  let gross = (plays / 1000) * cpm;
  document.getElementById("spResult").innerText = calcNet(gross, tax).toFixed(2);
}
