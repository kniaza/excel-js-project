export class TableSelection {
  static selectedClassName = "selected";

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el) {
    this.clear();

    this.group.push($el);

    $el.addClass(TableSelection.selectedClassName);

    this.current = $el;
  }

  selectGroup($group = []) {
    this.clear();

    this.group = $group;
    this.group.forEach(($el) => $el.addClass(TableSelection.selectedClassName));
  }

  clear() {
    this.group.forEach(($cell) =>
      $cell.removeClass(TableSelection.selectedClassName)
    );
    this.group = [];
  }
}
