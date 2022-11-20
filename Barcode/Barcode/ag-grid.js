
var scolumnDefs = [
    { headerName: "כיתה", field: "grade", editable: true },
    { headerName: "שם", field: "name", editable: true },
    { headerName: "מספרי משימות", field: "tasksNumber" ,hide:true },
    { headerName: "שמות המשימות", field: "tasks" },
    { headerName: "סך נקודות", field: "points" }
];

var tcolumnDefs = [
    { headerName: "שם משימה", field: "name", editable: true },
    { headerName: "שווי משימה", field: "points", editable: true },
    { headerName: "תאריך להגשה", field: "date", editable: true },
    { headerName: "שעה להגשה", field: "hour", editable: true }
];

var srowData = JSON.parse(localStorage.getItem("students"))
var trowData = JSON.parse(localStorage.getItem("tasks"))


var sgridOptions = {
    columnDefs: scolumnDefs,
    defaultColDef: {
        //filter: 'agTextColumnFilter',
        //filterParams: {
        //    suppressAndOrCondition: true
        //},
        sortable: true,
        resizable: true
    },
    enableRtl: true,
    rowData: srowData,
    onFirstDataRendered: onFirstDataRendered,
};

var tgridOptions = {
    columnDefs: tcolumnDefs,
    defaultColDef: {
        filter: true,
        sortable: true,
        resizable: true
    },
    enableRtl: true,
    rowData: trowData,
    onFirstDataRendered: onFirstDataRendered
};
function onFirstDataRendered(params) {

    tgridOptions.api.sizeColumnsToFit({
        defaultMinWidth: 150,
        columnLimits: [{ key: 'tasks', minWidth: 300 }],
    });

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

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#tasksGrid');
    new agGrid.Grid(gridDiv, tgridOptions);
});
