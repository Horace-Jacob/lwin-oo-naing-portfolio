export function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function removeBodyClass(name: string) {
  document.body.classList.remove(name);
}

export function addBodyClass(name: string) {
  document.body.classList.add(name);
}

export const DOM = {
  get: (selector: any) => document.querySelector(selector),
  getAll: (selector: any) => [...(document.querySelectorAll(selector) as any)],
};

export function getNodes(parentSelector: any) {
  const el = DOM.get(parentSelector);

  if (!el) return {};

  const allowedNodes = ["div", "span", "svg", "g", "ellipse", "path"].map(
    (node) => `${parentSelector} ${node}`
  );

  const children = DOM.getAll(allowedNodes.join(","));

  children.forEach((child) => {
    if (child.classList[0]) {
      const childClass = child.classList[0].trim();
      el[camelCase(childClass)] = child || `.${childClass}`;
    }
  });

  return el;
}

// converts text to camelCase
export function camelCase(str: any) {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group: any) =>
      group.toUpperCase().replace(/[-_\s]/g, "")
    );
}
