import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Item } from '../_models/item';
import { ChecklistService } from '../service/checklist.service';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})

export class ChecklistComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name','complete', 'description', 'endDate', 'startDate', 'category', 'actions'];
  public dataSource: Item[] = [];

  constructor(private dialog:MatDialog, private ChecklistService: ChecklistService) { }

  ngOnInit(): void {
    this.ChecklistService.getALLChecklist().subscribe(
      (resp: Item[]) => {
        this.dataSource = resp;
      }
    )
  }

  public createNewitem() {
    console.log('criar novo item na checklist');
  }

  public editItem(inputChecklist: Item) {
    console.log('editar item na checklist');

    this.dialog.open(ChecklistEditComponent, {
      data: { UpdatableinputChecklist: inputChecklist, actionName: 'Editar'}
    }).afterClosed().subscribe(
      resp => {
        if (resp) {
          console.log('Categoria editada com sucesso');
        } else {
          console.log('Categoria não editada com sucesso');
        }
      }
    )
  }

  public deleteItem(inputChecklist: Item) {
    console.log('deletar item na checklist');

    this.dialog.open(DialogComponent, {
      disableClose: true,
      data: {
        dialogMsg: 'Você tem certeza que gostaria de apagar essa tarefa?',
        leftButtonLabel: 'Cancelar',
        rightButtonLabel: 'Apagar'
      }
    }).afterClosed().subscribe(
      resp => {
        if (resp) {
          console.log('Tarefa apagada com sucesso');
        } else {
          console.log('Tarefa não apagada');
        }
      }
    )

  }

  public checkItem(status: boolean) {
    console.log(`status alterado ${status}`)
  }
}
function checklistEditComponent(checklistEditComponent: any, arg1: { disableClose: true; data: { editableCategory: Item; }; }) {
  throw new Error('Function not implemented.');
}

