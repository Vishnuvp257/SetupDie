// src/MyWebixComponent.js
import React, { useEffect, useRef } from 'react';
import 'webix/webix.css';
import { ui } from 'webix';

import "./styles.css";

const Toolbar = () => {
  const containerRef = useRef(null);
  const webixRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    webixRef.current = ui({
      container: container,
      view: "toolbar",
      fontWeight: "bold",
      elements: [{ view: "label", label: "Setup Die",css:"toolbar-label" }],
      width:1534
    });

    return () => {
      if (webixRef.current) {
        webixRef.current.destructor();
        webixRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef}></div>;
};

export default Toolbar;
