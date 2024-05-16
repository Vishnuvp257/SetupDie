const data = [
  {id:711, product:"200mm Bare Si"},
  {id:285, product:"200mm Glass_TCO deposit"},
  {id:10, product:"401AZ"},
  {id:6, product:"800AZ TEOS"},
  {id:11, product:"200mm Bare Si"},
  {id:25, product:"200mm Glass_TCO deposit"},
  {id:1, product:"401AZ"},
  {id:600, product:"800AZ TEOS"}
]

const ProductTable = {
  cols:[
    { view: "label", label: "Product", align: "left",width:70, height:0 },
    {
        view: "datatable",
        id: "productTable",
        select: true,
        css:"centered-label",
        columns: [
            { id: "id", header: "ID", width: 100 },
            { id: "product", header: "Product", fillspace: true }
        ],
        data:data,
        height:200,
        scrollY:true,
        scrollX:false,
    }
            
  ]
}
    
export default ProductTable;
