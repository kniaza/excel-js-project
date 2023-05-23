import { $ } from "@/core/dom";
import { ExcelComponent } from "@/core/ExcelComponent";
import { createTable } from "@/components/table/table.template";
import { resizeHandler } from "@/components/table/table.resize";
import { TableSelection } from "@/components/table/TableSelection";
import { matrix } from "@/components/table/table.functions";

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

  prepare() {
    super.prepare();

    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  onMousedown(event) {
    const resizeType = event.target.dataset.resize;
    const isCell = event.target.dataset.type === "cell";
    if (resizeType) {
      resizeHandler(this.$root, event, resizeType);
    } else if (isCell) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current).map((id) =>
          this.$root.find([`[data-id="${id}"]`])
        );

        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }
}
