const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

const mathAvgCell = document.getElementById("mathAvg");
const englishAvgCell = document.getElementById("englishAvg");
const overallAvgCell = document.getElementById("overallAvg");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
  const math = Number(mathInput.value);
  const english = Number(englishInput.value);

  // 驗證
  if (mathInput.value === "" || englishInput.value === "") {
    alert("Please enter both grades.");
    return;
  }

  if (math < 0 || math > 100 || english < 0 || english > 100) {
    alert("Grades must be between 0 and 100.");
    return;
  }

  rowCount++;

  const avg = ((math + english) / 2).toFixed(2);

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${rowCount}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${avg}</td>
  `;

  tableBody.appendChild(row);

  updateColumnAverages();

  mathInput.value = "";
  englishInput.value = "";
});

function updateColumnAverages() {
  const rows = tableBody.getElementsByTagName("tr");

  let mathSum = 0;
  let englishSum = 0;

  for (let i = 0; i < rows.length; i++) {
    mathSum += Number(rows[i].children[1].textContent);
    englishSum += Number(rows[i].children[2].textContent);
  }

  const count = rows.length;

  if (count > 0) {
    const mathAvg = (mathSum / count).toFixed(2);
    const englishAvg = (englishSum / count).toFixed(2);
    const overallAvg = ((mathSum + englishSum) / (count * 2)).toFixed(2);

    mathAvgCell.textContent = mathAvg;
    englishAvgCell.textContent = englishAvg;
    overallAvgCell.textContent = overallAvg;
  }
}
