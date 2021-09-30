import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CATEGORY_DATA } from '../category/category.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../_models/category';
import { Item } from '../_models/item';

export const CHECKLIST_DATA = [
  {
    name: 'Site Portfolio',
    complete: true,
    description: 'Criar um site para o portfolio de um desenvolvedor',
    endDate: Date.now(),
    startDate: Date.now(),
    category: CATEGORY_DATA.find(x => x.name == 'Educação'),
    guid: 'aaa-bbb-ccc-dddd'
  },
  {
    name: 'Clinico Geral',
    complete: false,
    description: 'Ir ao clinico geral',
    endDate: Date.now(),
    startDate: Date.now(),
    category: CATEGORY_DATA.find(x => x.name == 'Saúde'),
    guid: 'aaa-bbb-ccc-dddd'
  },
  {
    name: 'API do site Angular',
    complete: false,
    description: 'Criar a API springboot do site Angular',
    endDate: Date.now(),
    startDate: Date.now(),
    category: CATEGORY_DATA.find(x => x.name == 'Trabalho'),
    guid: 'aaa-bbb-ccc-dddd'
  }
];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})

export class ChecklistComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name','complete', 'description', 'endDate', 'startDate', 'category', 'actions'];
  public dataSource = CHECKLIST_DATA;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public createNewitem() {
    console.log('criar novo item na checklist');
  }

  public editItem(inputChecklist: Item) {
    console.log('editar item na checklist');
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
