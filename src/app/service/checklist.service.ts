import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../_models/category';
import { Item } from '../_models/item';

export const CHECKLIST_DATA = [
  {
    name: 'Site Portfolio',
    complete: true,
    description: 'Criar um site para o portfolio de um desenvolvedor',
    endDate: new Date(),
    startDate: new Date(),
    category: { name: 'Educação', guid: 'aaa-bbb-ccc-dddd' },
    guid: 'aaa-bbb-ccc-dddd'
  },
  {
    name: 'Clinico Geral',
    complete: false,
    description: 'Ir ao clinico geral',
    endDate: new Date(),
    startDate: new Date(),
    category: { name: 'Saúde', guid: 'aaa-bbb-ccc-dddd' },
    guid: 'aaa-bbb-ccc-dddd'
  },
  {
    name: 'API do site Angular',
    complete: false,
    description: 'Criar a API springboot do site Angular',
    endDate: new Date(),
    startDate: new Date(),
    category: { name: 'Trabalho', guid: 'aaa-bbb-ccc-dddd' },
    guid: 'aaa-bbb-ccc-dddd'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor() {
  }

  public getALLChecklist(): Observable<Item []>{
    return of( CHECKLIST_DATA );
  }
}
