import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { CATEGORY_DATA } from '../category/category.component';
import { Category } from '../_models/category';
import { Item } from '../_models/item';

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})

export class ChecklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public editableItem!: Item;
  @Output() closeModalEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(FormGroupDirective) checklistGroupDirective!: FormGroupDirective;

  public checklistForm!: FormGroup;
  public isFormReady = false;
  public categories: Category[] = CATEGORY_DATA;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.checklistForm = this.formBuilder.group({
      name: [this.editableItem != null ? this.editableItem.name : '', Validators.required],
      complete: [this.editableItem != null ? this.editableItem.complete : false],
      description: [this.editableItem != null ? this.editableItem.description : '', Validators.required],
      endDate: [this.editableItem != null ? this.editableItem.endDate : new Date(), Validators.required],
      startDate: [this.editableItem != null ? this.editableItem.startDate : new Date(), Validators.required],
      category: [this.editableItem != null ? this.editableItem.category: null, Validators.required],
    });
    this.isFormReady = true;
  }

  public cancel() {
    console.log('Cancelar Ação');
    this.closeModalEventEmitter.emit(false);
  }

  public save() {
    console.log('Categoria Salva');
    this.closeModalEventEmitter.emit(true);
  }

}
