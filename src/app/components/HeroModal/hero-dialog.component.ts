import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PasswordDialogComponent } from '../PasswordModal/password-dialog.component';

@Component({
  selector: 'app-hero-create-dialog',
  standalone: true,
  templateUrl: './hero-dialog.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class HeroCreateDialogComponent {
  heroForm: FormGroup;
  dialogRef = inject(MatDialogRef<HeroCreateDialogComponent>);
  data: any = inject(MAT_DIALOG_DATA)
  fb = inject(FormBuilder);
  isCreate: boolean = false

  constructor(private passwordDialog: MatDialog) {
    this.isCreate = this.data.crud === 'create'
    this.heroForm = this.fb.group({
      id: [+this.data?.id],
      crud: [this.data?.crud],
      name: [this.data?.name, Validators.required],
      url: [this.data?.url],
      win_rate: [this.data?.['win_rate'], [Validators.required, Validators.min(0), Validators.max(100)]],
      games_played: [this.data?.['total_talishar_plays'], [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.heroForm.valid) {
      const passwordDialogRef = this.passwordDialog.open(PasswordDialogComponent);
      passwordDialogRef.afterClosed().subscribe(result => {
        this.heroForm.addControl('password', new FormControl(result));
        this.dialogRef.close(this.heroForm.value);
      })
    }
  }

  onDelete() {
    if(this.heroForm.value.id){
      const passwordDialogRef = this.passwordDialog.open(PasswordDialogComponent);
      passwordDialogRef.afterClosed().subscribe(result => {
        this.heroForm.addControl('password', new FormControl(result));
        this.heroForm.patchValue({crud: 'delete'});
        this.dialogRef.close(this.heroForm.value);
      })
    }
  }

  onCancel() {
    this.dialogRef.close(); // Simply close the dialog
  }
}
