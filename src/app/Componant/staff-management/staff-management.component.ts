import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {

  subAdminForm!: FormGroup; // Using definite assignment assertion

  initializeForm() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // any additional initialization here
  }


  constructor(private fb: FormBuilder) {
    this.subAdminForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      privileges: this.fb.group({
        category: this.fb.group({
          view: [false],
          add: [false],
          edit: [false],
          delete: [false]
        }),
        choices: this.fb.group({
          view: [false],
          add: [false],
          edit: [false],
          delete: [false]
        }),
        merchant: this.fb.group({
          view: [false],
          add: [false],
          edit: [false],
          delete: [false]
        })
      })
    });
  }

  onSubmit() {
    if (this.subAdminForm.valid) {
      console.log(this.subAdminForm.value);
      // Here you would typically send the form data to your backend
    }
  }

  selectAll(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const checked = checkbox.checked;
    const privilegesControls = this.subAdminForm.get('privileges') as FormGroup;
    Object.keys(privilegesControls.controls).forEach(key => {
      const groupControl = privilegesControls.get(key) as FormGroup;
      Object.keys(groupControl.controls).forEach(subKey => {
        groupControl.get(subKey)?.setValue(checked);
      });
    });
  }
}