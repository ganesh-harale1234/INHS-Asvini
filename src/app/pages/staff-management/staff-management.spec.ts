import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffManagement } from './staff-management';

describe('StaffManagement', () => {
  let component: StaffManagement;
  let fixture: ComponentFixture<StaffManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate and retain the new staff contact fields', () => {
    expect(component.form.get('serviceNumber')).toBeTruthy();
    expect(component.form.get('contactNumber')?.hasError('required')).toBeTrue();

    component.form.get('contactNumber')?.setValue('123456789');
    expect(component.form.get('contactNumber')?.hasError('pattern')).toBeTrue();

    component.form.patchValue({
      serviceNumber: 'SRV12345',
      contactNumber: '9876543210'
    });
    expect(component.form.get('contactNumber')?.valid).toBeTrue();
  });
});
