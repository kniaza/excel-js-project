import { ExcelComponent } from "@/core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import { resizeHandler } from "@/components/table/table.resize";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    super($root, {
      name: "table",
      listeners: ["mousedown"],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    const resizeType = event.target.dataset.resize;
    if (resizeType) {
      resizeHandler(this.$root, event, resizeType);
    }
  }
}
