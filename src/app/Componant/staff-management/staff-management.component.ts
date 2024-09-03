import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Staff } from 'src/app/models/Staffs';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {
  subAdminForm!: FormGroup; // Use definite assignment assertion
  staffList: Staff[] = [];

  constructor(private fb: FormBuilder, private staffService: StaffService) {
    this.initializeForm();
    this.loadStaff();
  }

  ngOnInit() {
    this.subAdminForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'mobileNo': new FormControl(null, Validators.required),
      'userName': new FormControl(null),
      'password': new FormControl(null, Validators.required)
    });
  }
  private initializeForm(): void {
    this.subAdminForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      userName: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
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
    console.log('Form Submitted', this.subAdminForm.value);
    if(this.subAdminForm.valid) {
      // Your submission logic here
    }
  }
  

  onReset(): void {
    this.subAdminForm.reset();
  }

  loadStaff(): void {
    this.staffService.getAllStaff().subscribe({
      next: data => this.staffList = data,
      error: error => console.error('Error fetching staff list:', error)
    });
  }

  editStaff(staff: Staff): void {
    this.subAdminForm.patchValue(staff);
  }

  deleteStaff(id: number): void {
    if (confirm('Are you sure you want to delete this staff member?')) {
      this.staffService.deleteStaff(id).subscribe({
        next: () => {
          console.log('Staff deleted successfully');
          this.loadStaff();
        },
        error: error => console.error('Error deleting staff:', error)
      });
    }
  }
}
