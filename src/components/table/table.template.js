const CODES = {
  A: 65,
  Z: 90,
};

const createCell = (content) => {
  return `
    <div class="cell" contenteditable>${content}</div>
  `;
};

const createCol = (content) => {
  return `
    <div class="column">
      ${content}
      <div class="col-resize"></div>
    </div>
  `;
};

const createRow = (content, index) => {
  const resizer = index ? '<div class="row-resize"></div>' : "";
  return `
    <div class="row">
      <div class="row-info">
        ${index ?? ""}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
};

const toChar = (_, index) => {
  return String.fromCharCode(CODES.A + index);
};

export const createTable = (rowsCount = 15) => {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  // create head of tables
  const columns = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(createCol)
    .join("");
  rows.push(createRow(columns));

  // generate cells for table
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill("").map(createCell).join("");
    rows.push(createRow(cells, i + 1));
  }

  return rows.join("");
};
