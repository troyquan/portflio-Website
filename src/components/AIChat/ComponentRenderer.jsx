import React from "react";
import { componentMap } from "./componentMap";

export function ComponentRenderer({ schema }) {
  if (!schema?.root || !schema?.elements) return null;

  const { root, elements } = schema;

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
