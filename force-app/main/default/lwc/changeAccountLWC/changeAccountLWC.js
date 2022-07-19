/**
 * Created by mgnjatovic on 7/12/2022.
 */

import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_FIELD_NAME from '@salesforce/schema/Account.Name'
import { getRecord } from 'lightning/uiRecordApi'
export default class ChangeAccountLwc extends LightningElement {
    @api recordId;
    @api objectApiName;

//    @wire(getRecord, {recordId:'$recordId', fields: [ACCOUNT_FIELD_NAME]})
//    record;
}