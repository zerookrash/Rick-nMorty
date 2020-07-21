import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regitro',
  templateUrl: './regitro.component.html',
  styleUrls: ['./regitro.component.css']
})
export class RegitroComponent implements OnInit {

  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  registroForm: FormGroup;

  constructor() { 
    this.registroForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.registroForm.reset();
  }

  onRegistroForm() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
      this.onResetForm()
    } else {
      console.log('Formulario no valido');
    }
  }

  get name() { return this.registroForm.get('name'); }
  get email() { return this.registroForm.get('email'); }
  get password() { return this.registroForm.get('password'); }

}
