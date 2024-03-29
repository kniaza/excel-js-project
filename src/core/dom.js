class Dom {
  constructor(selector) {
    this.$el =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;
  }

  html(html) {
    if (typeof html === "string") {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.innerHTML.trim();
  }

  clear() {
    this.html("");
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }

    return this;
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCords() {
    return this.$el.getBoundingClientRect();
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      this.$el.style[key] = styles[key];
    });
  }

  id(parse) {
    const ids = this.data.id;

    if (parse) {
      const [row, col] = ids.split(":");
      return {
        row: +row,
        col: +col,
      };
    }

    return ids;
  }

  focus() {
    this.$el.focus();
    return this;
  }

  text(text) {
    if (typeof text === "string") {
      this.$el.textContent = text;
      return this;
    }
    if (this.$el.tagName.toLowerCase() === "input") {
      return this.$el.value.trim();
    }

    return this.$el.textContent.trim();
  }

  addClass(className) {
    this.$el.classList.add(className);
  }

  removeClass(className) {
    this.$el.classList.remove(className);
  }

  get data() {
    return this.$el.dataset;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  off(eventType, instanceCallback) {
    this.$el.removeEventListener(eventType, instanceCallback);
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = "") => {
  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};
