// main.ts

/// <reference path="./task_3/js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`);
// Output: Insert row 125

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);
// Output: Update row 125 { firstName: 'Guillaume', lastName: 'Salva', age: 23 }

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
// Output: Delete row id 125
