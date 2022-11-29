
var columnDefs = [
    { headerName: "כיתה", field: "grade", editable: true },
    { headerName: "שם", field: "name", editable: true },
    { headerName: "מספרי משימות", field: "tasksNumber" ,hide:true },
    { headerName: "שמות המשימות", field: "tasks" },
    { headerName: "סך נקודות", field: "points" }
];

var rowData = JSON.parse(localStorage.getItem("students"))


var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        filter:true,
        sortable: true,
        resizable: true,
    },
    enableRtl: true,
    rowData: rowData,
    onFirstDataRendered: onFirstDataRendered,
};

function onFirstDataRendered(params) {
    gridOptions.api.sizeColumnsToFit({
        defaultMinWidth: 150,
        columnLimits: [{ key: 'tasks', minWidth: 800 }, { key: 'points', maxWidth: 200 }],
    });
}
function sExport() {
    gridOptions.api.exportDataAsCsv();
}

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#studentsGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});

