const SetupField = {
      view: "accordion",
      multi:true,
      rows:[
        {
            header:"Setup Field",
            body:{
                view:"form",
                elements:[
                    {view:"text", label:"Field Name",labelWidth:100, name:"field name",required:true},
                    { 
                        view: "combo", 
                        label: "Type", 
                        labelWidth:100,
                        name: "type", 
                        options: ["Type 1", "Type 2", "Type 3"] ,
                        required:true
                    },
                    {view:"text", label:"Number",labelWidth:100, name:"number",type:"number", required:true},
                    {view:"text", label:"Pos X", labelWidth:100,name:"posX",type:"number",required:true},
                    {view:"text", label:"Pos Y",labelWidth:100, name:"posY",type:"number",required:true},
                    {view:"text", label:"Size X",labelWidth:100, name:"sizeX",type:"number",required:true},
                    {view:"text", label:"Size Y", labelWidth:100,name:"sizeY",type:"number",required:true},
                    {
                        cols: [
                            {},
                            { 
                                view: "button", 
                                value: "Update", 
                                width:123
                            },
                            { 
                                view: "button", 
                                value: "Add", 
                                width:123,
                            },
                            { 
                                view: "button", 
                                value: "Delete",
                                width:123,  
                            }
                        ]
                    }
                ],
                width:400,
            }
        }
      ] 
     
}

export default SetupField;
