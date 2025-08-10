import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  templateUrl: './password-dialog.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PasswordDialogComponent {
  adminForm: FormGroup;
  dialogRef = inject(MatDialogRef<PasswordDialogComponent>);
  fb = inject(FormBuilder);

  constructor() {
    this.adminForm = this.fb.group({
        password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.adminForm.valid) {
      this.dialogRef.close(this.adminForm.value.password);
    }
  }

  onCancel() {
    this.dialogRef.close(); // Simply close the dialog
  }
}
