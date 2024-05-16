const FieldTable = {
  cols:[
        { view: "label", label: "Field", align: "left", width:70 },
        {
          view: "datatable",
          columns: [
            { id: "id", header: "Field Name", width:400},
            { id: "type", header: "Type", fillspace:true },
            { id: "number", header: "Number", fillspace:true },
            { id: "posX", header: "Pos X", fillspace:true },
            { id: "posY", header: "Pos Y", fillspace:true},
            { id: "sizeX", header: "Size X", fillspace:true },
          ],
          height:250,
          scrollY:true,
          scrollX:false
        }
            
  ]
}
    
export default FieldTable;
