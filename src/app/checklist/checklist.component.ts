import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChecklistEditComponent } from '../checklist-edit/checklist-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Item } from '../_models/item';
import { ChecklistService } from '../service/checklist.service';
import { SnackBarService } from '../service/snack-bar.service';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})

export class ChecklistComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name','complete', 'description', 'endDate', 'startDate', 'category', 'actions'];
  public dataSource: Item[] = [];

  constructor(private dialog:MatDialog, private ChecklistService: ChecklistService, private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.ChecklistService.getALLChecklist().subscribe(
      (resp: Item[]) => {
        this.dataSource = resp;
      }
    )
  }

  public createNewitem() {

    this.dialog.open(ChecklistEditComponent, {
      disableClose: true,
      data: { actionName: 'Criar'}
    }).afterClosed().subscribe(
      resp => {
        if (resp) {
          this.snackBarService.showSnackBar('Tarefa Criada com sucesso');
        }
      }
    )
  }

  public editItem(inputChecklist: Item) {
    console.log('editar item na checklist');

    this.dialog.open(ChecklistEditComponent, {
      data: { UpdatableinputChecklist: inputChecklist, actionName: 'Editar'}
    }).afterClosed().subscribe(
      resp => {
        if (resp) {
          this.snackBarService.showSnackBar('Tarefa editada com sucesso');
        } else {
          this.snackBarService.showSnackBar('Tarefa não editada');
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
          this.snackBarService.showSnackBar('Tarefa apagada com sucesso');
        } else {
          this.snackBarService.showSnackBar('Tarefa não apagada');
        }
      }
    )

  }

  public checkItem(status: boolean) {
    console.log(`status alterado ${status}`)
  }
}

