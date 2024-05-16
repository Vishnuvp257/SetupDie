const DieTable = {
    cols:[
        { view: "label", label: "", align: "left", width:70},
        {
            view: "datatable",
            columns: [
                { id: "positionIndex", header: "Position Index", width: 200 },
                { id: "placeIndex", header: "Place Index",fillspace:true},
                { id: "waterPosition", header: "Water Position",fillspace:true},
                { id: "cell", header: "Cell",fillspace:true},
                { id: "x", header: "X",fillspace:true},
                { id: "y", header: "Y",fillspace:true},
                { id: "llcx", header: "LLC X",fillspace:true},
                { id: "llcy", header: "LLC Y",fillspace:true},
                { id: "sizex", header: "Size X",fillspace:true},
                { id: "sizey", header: "Size Y",fillspace:true}
            ],
        height:90,
        scrollY:true,
        scrollX:false
        }
    ]
}

export default DieTable;
