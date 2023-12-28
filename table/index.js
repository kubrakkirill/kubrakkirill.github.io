function generateTable(num) {
  let table = '<table>';
  for (let i = 1; i < num+1; i++) {
    table += `<tr>`;
    for (let t = 1; t < num+1; t++) {
      table += `<td>${t*i}</td>`;
    }
    table += `</tr>`;
  }
  return table;
}

const num = 10;

document.body.innerHTML = generateTable(num);

function addClass(){
  const table = document.getElementsByTagName("table")[0];
  table.className = "table";
}
addClass()