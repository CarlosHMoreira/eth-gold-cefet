import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private matSnackBar: MatSnackBar) { }

  message(message: string, duration = 4000) {
    this.matSnackBar.open(message, null, {duration});
  }

}
