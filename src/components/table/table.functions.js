import { range } from "@/core/utils";

export function matrix(target, current) {
  const targetId = target.id(true);
  const currentId = current.id(true);

  const cols = range(currentId.col, targetId.col);
  const rows = range(currentId.row, targetId.row);

  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}
