import { $ } from "@/core/dom";

export function resizeHandler($root, event, resizeType) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest("[data-type='resizable']");
  const cords = $parent.getCords();
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`);

  document.onmousemove = (e) => {
    if (resizeType === "col") {
      const delta = e.pageX - cords.right;
      const cellWidth = cords.width + delta;
      $parent.css({ width: cellWidth + "px" });
      cells.forEach((el) => (el.style.width = cellWidth + "px"));
    } else {
      const delta = e.pageY - cords.bottom;
      const cellHeight = cords.height + delta;
      $parent.css({ height: cellHeight + "px" });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };
}
