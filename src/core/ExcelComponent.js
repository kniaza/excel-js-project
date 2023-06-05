import { DomListener } from "@/core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.unsubscribers = [];

    this.prepare();
  }

  prepare() {}

  toHTML() {
    return "";
  }

  $emit(eventName, ...args) {
    this.emitter.emit(eventName, ...args);
  }

  $on(eventName, fn) {
    const unsubscribe = this.emitter.subscribe(eventName, fn);
    this.unsubscribers.push(unsubscribe);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDomListeners();
    this.unsubscribers.forEach((unsubscribe) => unsubscribe());
  }
}
