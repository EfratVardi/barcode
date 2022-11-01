var columnDefs = [
    { headerName: "כיתה", field: "grade" },
    { headerName: "תעודת זהות", field: "tz" },
    { headerName: "שם פרטי", field: "first" },
    { headerName: "משפחה", field: "last" },
    { headerName: "מספרי משימות", field: "tasksNumber",hide:true },
    { headerName: "שמות המשימות", field: "tasks" },
    { headerName: "סך נקודות", field: "points" }
];

var rowData = JSON.parse(localStorage.getItem("students"))

var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        filter: true,
        sortable: true,
        resizable: true 
    },
    rowData: rowData,
    onFirstDataRendered: onFirstDataRendered,

};
function onFirstDataRendered(params) {
    const allColumnIds = [];
    gridOptions.columnApi.getColumns().forEach((column) => {
        allColumnIds.push(column.getId());
    });

    gridOptions.columnApi.autoSizeColumns(allColumnIds, false);}

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});
