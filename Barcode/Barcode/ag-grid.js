
var columnDefs = [
    { headerName: "כיתה", field: "grade", editable: true },
    { headerName: "תעודת זהות", field: "tz"},
    { headerName: "שם", field: "name", editable: true },
    { headerName: "מספרי משימות", field: "tasksNumber" ,hide:true },
    { headerName: "שמות המשימות", field: "tasks" },
    { headerName: "סך נקודות", field: "points" }
];

var rowData = JSON.parse(localStorage.getItem("students"))


var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        filter: 'agTextColumnFilter',
        filterParams: {
            suppressAndOrCondition: true
        },        sortable: true,
        resizable: true,
    },
    enableRtl: true,
    rowData: rowData,
    onFirstDataRendered: onFirstDataRendered,
    onCellEditingStopped :onCellEditingStopped
};

function onFirstDataRendered(params) {
    gridOptions.api.sizeColumnsToFit({
        defaultMinWidth: 150,
        columnLimits: [{ key: 'tasks', minWidth: 800 }, { key: 'points', maxWidth: 200 }],
    });
}
function onCellEditingStopped(params) {
    localStorage.setItem("students", JSON.stringify(rowData));

}
function Export() {
    gridOptions.api.exportDataAsCsv();
}

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#studentsGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});

