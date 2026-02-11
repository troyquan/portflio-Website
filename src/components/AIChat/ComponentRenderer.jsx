import React from "react";
import { componentMap } from "./componentMap";

function fixOrphanedChildren(elements, rootId) {
  const idsInChildren = new Set();
  Object.values(elements).forEach((el) => {
    (el.children || []).forEach((id) => idsInChildren.add(id));
  });
  const orphaned = Object.keys(elements).filter((id) => id !== rootId && !idsInChildren.has(id));
  if (orphaned.length === 0) return elements;
  const contactKeys = ["contact", "email", "linkedin", "location"];
  const stackWithOrphans = Object.entries(elements).find(
    ([id, el]) => el.type === "Stack" && contactKeys.some((k) => orphaned.includes(k))
  );
  if (stackWithOrphans) {
    const [stackId, stackEl] = stackWithOrphans;
    const toAdd = contactKeys.filter((k) => orphaned.includes(k) && elements[k]);
    if (toAdd.length) {
      const next = { ...elements };
      next[stackId] = { ...stackEl, children: [...(stackEl.children || []), ...toAdd] };
      return next;
    }
  }
  return elements;
}

export function ComponentRenderer({ schema }) {
  if (!schema?.root || !schema?.elements) return null;

  const { root, elements: raw } = schema;
  const elements = fixOrphanedChildren(raw, root);

  function renderElement(id) {
    const el = elements[id];
    if (!el) return null;

    const Component = componentMap[el.type];
    if (!Component) return null;

    const children = el.children?.map(renderElement).filter(Boolean);
    return (
      <Component key={id} {...(el.props || {})}>
        {children?.length ? children : undefined}
      </Component>
    );
  }

  return <div className="w-full">{renderElement(root)}</div>;
}
