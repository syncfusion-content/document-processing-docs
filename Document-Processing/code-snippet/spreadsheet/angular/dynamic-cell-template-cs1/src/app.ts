import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule, CellRenderEventArgs, getCellIndexes, getCell, setCell } from '@syncfusion/ej2-angular-spreadsheet';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

@Component({
    imports: [
        SpreadsheetAllModule
    ],

    standalone: true,
    selector: 'app-root',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()"(beforeCellRender)="beforeCellRender($event)">
    </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
    public dropDownOptions = [10, 20, 30, 40, 50, 60];
    created() {
        console.log(this.spreadsheetObj)
        if (!this.spreadsheetObj) return;
        // Custom template tab to add dropdown to cell.
        this.spreadsheetObj.addRibbonTabs([{
            header: { text: 'Template' }, content: [{
                text: 'DropDown List', click: () => {
                    if (!this.spreadsheetObj) return;
                    const sheet: any = this.spreadsheetObj.getActiveSheet();
                    const [rowIdx, colIdx] = getCellIndexes(sheet.activeCell);
                    const cellModel: any = getCell(rowIdx, colIdx, sheet);
                    const cellEle = this.spreadsheetObj.getCell(rowIdx, colIdx);
                    if (cellModel && cellModel.template === 'dropdown-list') return;
                    this.addDropDownlist(cellEle, this.dropDownOptions);
                }
            }]
        }]);
        this.spreadsheetObj.setRowsHeight(35, ['1:100']);
        // Rendering dropdown list for a specific range initially.
        const activeSheet = this.spreadsheetObj.getActiveSheet();
        for (let colIdx = 0; colIdx <= 3; colIdx++) {
            console.log("here");
            setCell(0, colIdx, activeSheet, { template: 'dropdown-list' } as any, true);
        }
        this.spreadsheetObj.resize();
    }
    // Triggers before the cell is appended to the DOM.
    beforeCellRender(args: CellRenderEventArgs) {
        if (args.rowIndex !== undefined && args.colIndex !== undefined) {
            // To render dropdown if template property 'dropdown-list' is set.
            if (args.cell && (args.cell as any).template === 'dropdown-list') {
                this.addDropDownlist(args.element, this.dropDownOptions);
            }
        }
    }
    // To render the dropdown list.
    addDropDownlist(element: HTMLElement, legendOptions: number[]) {
        element.innerHTML = '';
        const inputEle = document.createElement("input");
        element.appendChild(inputEle);
        new DropDownList({
            placeholder: 'Select a value',
            dataSource: legendOptions,
            cssClass: 'e-dropdown-list',
            change: (event) => {
                this.spreadsheetObj?.updateCell({ value: event.value.toString() }, (this.spreadsheetObj.getActiveSheet()).activeCell);
            }
        }, inputEle);
    };
}