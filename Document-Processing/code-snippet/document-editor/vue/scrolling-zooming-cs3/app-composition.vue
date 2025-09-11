<template>
    <div id="app">
        <ejs-documenteditor ref="documenteditor" v-bind:selectionChange='onSelectionChange'
            v-bind:viewChange='onViewChange' v-bind:documentChange='onDocumentChange' :enableSelection='true' :enableEditor='true'
            :isReadOnly=false height="370px" style="width: 100%;"></ejs-documenteditor>
        <div id="documenteditor_statusbar">
            <label style="margin-top: 6px;margin-right: 2px">Page </label>
            <div class="single-line e-de-pagenumber-text" v-on:keydown='pageKeydownEvent' v-on:click='pagerClickEvent'
                id="editablePageNumber"
                style="font-size:12px;font-weight: 700;display: inline-flex;height: 17px;padding: 0px 4px;"
                contenteditable="false">
                <label id="documenteditor_page_no"
                    style="text-transform:capitalize;white-space:pre;overflow:hidden;user-select:none;cursor:text;height:17px;max-width:150px">{{
                        currentPage }}</label>
            </div>
            <label id="documenteditor_pagecount_separator" style="margin-left:2px;letter-spacing: 1.05px">of</label>
            <label id="documenteditor_pagecount" style="margin-left:6px;letter-spacing: 1.05px">{{ pageCount }}</label>
            <ejs-dropdownbutton ref="de_zoom" :items="zoomItems" class="e-de-statusbar-zoom" :content="zoomContent"
                v-bind:select="onZoom" title="Zoom level. Click or tap to open the Zoom options."></ejs-dropdownbutton>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref, provide } from "vue";
import { DocumentEditorComponent as EjsDocumenteditor, Selection, Editor } from '@syncfusion/ej2-vue-documenteditor';
import { DropDownButtonComponent as EjsDropdownbutton } from '@syncfusion/ej2-vue-splitbuttons';

const documenteditor = ref(null);
const zoomItems = [
    {
        text: '150%',
    },
    {
        text: '125%',
    },
    {
        text: '100%',
    },
    {
        text: '75%',
    },
    {
        text: '50%',
    },
    {
        separator: true
    },
    {
        text: 'Fit one page'
    },
    {
        text: 'Fit page width',
    }];
const pageCount = ref(1);
const zoomContent = ref("100%");
const currentPage = ref(1);
const onViewChange = function (args) {
    //Update page number on view change.
    currentPage.value = args.startPage;
}
const onSelectionChange = function () {
    //Get current page number.
    currentPage.value = documenteditor.value.ej2Instances.selection.startPage;
}
const onDocumentChange = function () {
    //Update page count.
    pageCount.value = documenteditor.value.ej2Instances.pageCount;
    //Update zoom factor.
    zoomContent.value = Math.round(documenteditor.value.ej2Instances.zoomFactor * 100) + '%';
}
const onZoom = function (args) {
    let zoomValue = args.item.text;
    if (zoomValue.match('Fit one page')) {
        documenteditor.value.ej2Instances.fitPage('FitOnePage');
    } else if (zoomValue.match('Fit page width')) {
        documenteditor.value.ej2Instances.fitPage('FitPageWidth');
    } else {
        documenteditor.value.ej2Instances.zoomFactor = parseInt(zoomValue, 0) / 100;
    }
    zoomContent.value = Math.round(documenteditor.value.ej2Instances.zoomFactor * 100) + '%';
}
const pageKeydownEvent = function (e) {
    if (e.which === 13) {
        e.preventDefault();
        let pageNumber = parseInt(document.getElementById("editablePageNumber").textContent, 0);
        if (pageNumber > documenteditor.value.ej2Instances.pageCount) {
            updatePageNumber.value();
        } else {
            documenteditor.value.ej2Instances.selection.goToPage(parseInt(document.getElementById("editablePageNumber").textContent, 0));
        }
        document.getElementById("editablePageNumber").contentEditable = 'false';
        if (document.getElementById("editablePageNumber").textContent === '') {
            updatePageNumber.value();
        }
    }
    if (e.which > 64) {
        e.preventDefault();
    }
}
const pageBlurEvent = function () {
    if (document.getElementById("editablePageNumber").textContent === '' || parseInt(document.getElementById("editablePageNumber").textContent, 0) > documenteditor.value.ej2Instances.pageCountt) {
        updatePageNumber.value();
    }
    document.getElementById("editablePageNumber").contentEditable = 'false';
}
const pagerClickEvent = function () {
    document.getElementById("editablePageNumber").contentEditable = 'true';
    document.getElementById("editablePageNumber").focus();
    window.getSelection().selectAllChildren(document.getElementById("editablePageNumber"));
}
const updatePageNumber = function () {
    currentPage.value = documenteditor.value.ej2Instances.selection.startPage.toString();
}

onMounted(function () {
    let defaultDocument = {
        "sections": [
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "First page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Second page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            },
            {
                "blocks": [
                    {
                        "paragraphFormat": {
                            "styleName": "Normal"
                        },
                        "inlines": [
                            {
                                "text": "Third page"
                            }
                        ]
                    }
                ],
                "headersFooters": {},
            }
        ],
        "characterFormat": {},
        "paragraphFormat": {},
        "background": {
            "color": "#FFFFFFFF"
        },
        "styles": [
            {
                "type": "Paragraph",
                "name": "Normal",
                "next": "Normal"
            },
            {
                "type": "Character",
                "name": "Default Paragraph Font"
            }
        ]
    }
    //Open default document in Document Editor.
    documenteditor.value.open(JSON.stringify(defaultDocument));
    document.getElementById('editablePageNumber').addEventListener('blur', pageBlurEvent);
});

provide('DocumentEditor', [Selection, Editor]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";

.single-line {
    cursor: text !important;
    outline: none;
}

.single-line:hover {
    border-color: #e4e4e4 !important;
}

[contenteditable="true"].single-line {
    white-space: nowrap;
    border-color: #e4e4e4 !important;
}

.e-de-pagenumber-text:hover {
    background-color: #f4f4f4 !important;
}

[contenteditable="true"].single-line * {
    white-space: nowrap;
}

.e-de-statusbar-zoom {
    float: right;
    text-align: center;
    padding: 2px;
    line-height: 19px;
    margin-top: 1px;
}
</style>
