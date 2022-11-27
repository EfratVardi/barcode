
var scolumnDefs = [
    { headerName: "כיתה", field: "grade", editable: true },
    { headerName: "שם", field: "name", editable: true },
    { headerName: "מספרי משימות", field: "tasksNumber" ,hide:true },
    { headerName: "שמות המשימות", field: "tasks" },
    { headerName: "סך נקודות", field: "points" }
];

var srowData = JSON.parse(localStorage.getItem("students"))


var sgridOptions = {
    columnDefs: scolumnDefs,
    defaultColDef: {
        filter: 'agTextColumnFilter',
        filterParams: {
            suppressAndOrCondition: true
        },
        sortable: true,
        resizable: true
    },
    enableRtl: true,
    rowData: srowData,
    onFirstDataRendered: onFirstDataRendered,
};

function onFirstDataRendered(params) {
    sgridOptions.api.sizeColumnsToFit({
        defaultMinWidth: 150,
        columnLimits: [{ key: 'tasks', minWidth: 300 }],
    });
}
function sExport() {
    sgridOptions.api.exportDataAsCsv();
}

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#studentsGrid');
    new agGrid.Grid(gridDiv, sgridOptions);
});

