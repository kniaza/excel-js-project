import { ExcelComponent } from "@/core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input"],
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(e) {
    console.log("Formula: onInput:", e);
    console.log("value:", e.target.textContent.trim());
    console.log("@this", this);
  }
}