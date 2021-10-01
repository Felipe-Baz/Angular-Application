import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class SnackBarService {
  private defaultDuration = 2; //duração de 1 segundo

  constructor(private snackBar: MatSnackBar) { }

  public showSnackBar(message: string, durationParam?: number) {
    this.snackBar.open(message, 'Fechar',
      {
        duration: durationParam != null ? durationParam * 1000 : this.defaultDuration * 1000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      }
    );
  }
}
