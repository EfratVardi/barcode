﻿
var columnDefs = [
    { headerName: "כיתה", field: "grade", editable: true },
    { headerName: "תעודת זהות", field: "tz"},
    { headerName: "שם", field: "name", editable: true },
    { headerName: "מספרי משימות", field: "tasksNumber", hide: true },
    { headerName: "סך נקודות", field: "points" },
    { headerName: "שמות המשימות", field: "tasks" },
    { headerName: "תאריכי עדכון", field: "dates" }
];

var rowData = JSON.parse(localStorage.getItem("students"))

var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        filter: 'agTextColumnFilter',
        filterParams: {
            suppressAndOrCondition: true
        },
        sortable: true,
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
        columnLimits: [{ key: 'tasks', minWidth: 800 }],
    });
}

function onCellEditingStopped(params) {
    localStorage.setItem("students", JSON.stringify(gridOptions.rowData));
}

function New() {
    var students = JSON.parse(localStorage.getItem("students"))
    var tz = Math.floor(Math.random() * (399999999 - 200000000 + 1) + 200000000)
    for (var i = 0; i < students.length; i++) {
        while (students[i]["tz"] == tz) {
            tz = Math.floor(Math.random() * (399999999 - 200000000 + 1) + 200000000)
            i = 0
        }
    }
    students.unshift({
        grade: '------', name: '------', tz: tz, barcode: '',
        points: 0, tasks: ",", tasksNumber: ",",dates:'[]'
    })
    localStorage.setItem("students", JSON.stringify(students));
    gridOptions.rowData = students;
    gridOptions.api.setRowData(students);
}

function Export() {
    gridOptions.api.exportDataAsCsv();
}

document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#studentsGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});

