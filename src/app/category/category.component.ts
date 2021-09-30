import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { CategoryService } from '../service/category.service';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = [];

  constructor(private dialog:MatDialog, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getALLCategories().subscribe(
      (resp: Category[]) => {
        this.dataSource = resp;
      }
    )
  }

  public editCategory(inputCategory: Category) {

    this.dialog.open(CategoryEditComponent, {
      data: { editableCategory: inputCategory}
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

  public deleteCategory(category: Category) {

    this.dialog.open(DialogComponent, {
      disableClose: true,
      data: {
        dialogMsg: 'Você tem certeza que gostaria de apagar a categoria?',
        leftButtonLabel: 'Cancelar',
        rightButtonLabel: 'Apagar'
      }
    }).afterClosed().subscribe(
      resp => {
        if (resp) {
          console.log('Categoria apagada com sucesso');
        } else {
          console.log('Categoria não apagada');
        }
      }
    )
  }

  public createNewCategory() {
    console.log('create new category clicked')

    this.dialog.open(CategoryEditComponent, {
      disableClose: true,
      data: { actionName: 'Criar'}
    }).afterClosed().subscribe(
      resp => {
        if (resp) {
          console.log('Categoria Criada com sucesso');
        } else {
          console.log('Criação não realizada');
        }
      }
    )

  }
}
