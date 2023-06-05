const CODES = {
  A: 65,
  Z: 90,
};

const createCell = (rowIndex, colIndex) => {
  return `
    <div 
      class="cell" 
      contenteditable 
      data-col="${colIndex}" 
      data-row="${rowIndex}"
      data-type="cell"
      data-id="${rowIndex}:${colIndex}"
    ></div>
  `;
};

const createCol = (content, index) => {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${content}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
};

const createRow = (content, index) => {
  const resizer = index
    ? `<div class="row-resize" data-resize="row"></div>`
    : "";
  return `
    <div class="row" data-type="resizable">
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
  for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
    const cells = new Array(colsCount)
      .fill("")
      .map((_, colIndex) => createCell(rowIndex, colIndex))
      .join("");
    rows.push(createRow(cells, rowIndex + 1));
  }

  return rows.join("");
};
