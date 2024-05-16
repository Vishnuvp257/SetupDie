// src/MyWebixComponent.js
import React, { useEffect, useRef } from 'react'
import 'webix/webix.css';
import { ui } from 'webix';

import ProductTable from './ProductTable';
import FieldTable from './FieldTable';
import SetupField from './SetupField';
import DieTable from './DieTable';

import "./styles.css"

const Grid = () => {
  const containerRef = useRef(null);
  const webixRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    webixRef.current = ui({
      container: container,
      rows:[
        {
            cols:[
              {
                  rows:[
                      ProductTable,
                      FieldTable,
                  ],
                  margin: 20,
              },
              SetupField,
            ],
            margin: 10
        },
        {
            cols :[
                { view: "label", label: "Die", align: "left" ,width:70},
                { view: "label", label: "Total Position Index" ,width:200},
                { view: "counter", id: "positionIndex", value: 0 , width:120},
                { view: "button", value: "Set", width: 100},
                { view: "button", value: "Save Dies", width: 150},
                { view: "button", value: "Cancel", width: 150}   
            ],
            margin: 10,
            width:1500
        },
        DieTable  
      ],
      margin: 10
    });

    return () => {
      if (webixRef.current) {
        webixRef.current.destructor();
        webixRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="fullscreen-container"></div>;
};

export default Grid;
