import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
declare var window: any; ////bts

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      chair: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      event: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      spend: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      date: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      recipt1: new FormControl(''),
      recipt2: new FormControl(''),
      note: new FormControl(''),
      submitted: new FormControl('', [Validators.required]),
      check: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      notification: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      submission: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal') ////bts
    );
  }
  //  *****  bts
  formModal: any;
  openmodal() {
    this.formModal.show();
  }
  // ****************   bts   *********

  get Chair(): FormControl {
    return this.registerForm.get('chair') as FormControl;
  }
  get Event(): FormControl {
    return this.registerForm.get('event') as FormControl;
  }
  get Spend(): FormControl {
    return this.registerForm.get('spend') as FormControl;
  }
  get Date(): FormControl {
    return this.registerForm.get('date') as FormControl;
  }
  get Category(): FormControl {
    return this.registerForm.get('category') as FormControl;
  }
  get Amount(): FormControl {
    return this.registerForm.get('amount') as FormControl;
  }
  get Recipt1(): FormControl {
    return this.registerForm.get('recipt1') as FormControl;
  }
  get Recipt2(): FormControl {
    return this.registerForm.get('recipt2') as FormControl;
  }
  get Note(): FormControl {
    return this.registerForm.get('note') as FormControl;
  }
  get Submitted(): FormControl {
    return this.registerForm.get('submitted') as FormControl;
  }
  get Check(): FormControl {
    return this.registerForm.get('check') as FormControl;
  }
  get Address(): FormControl {
    return this.registerForm.get('address') as FormControl;
  }
  get Notification(): FormControl {
    return this.registerForm.get('notification') as FormControl;
  }
  get Submission(): FormControl {
    return this.registerForm.get('submission') as FormControl;
  }
  registerUser() {
    this.registerForm.reset();
  }
}
