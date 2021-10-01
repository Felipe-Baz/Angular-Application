import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../_models/item';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})

export class ChecklistEditComponent implements OnInit {

  public editableItem!: Item;
  public actionName: string = '';

  constructor(private dialogRef: MatDialogRef<ChecklistEditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any) {
    if (dialogData.UpdatableinputChecklist != null) {
      this.editableItem = dialogData.UpdatableinputChecklist;
    }
    if (dialogData.actionName != null) {
      this.actionName = dialogData.actionName;
    }
  }

  ngOnInit(): void {
  }

  public closeModalWindow($event: any) {
    //TODO: handle action - save/cancel
    if ($event) {
      //save
      this.dialogRef.close(true);
    } else {
      //cancel
      this.dialogRef.close(false);
    }
  }
}
