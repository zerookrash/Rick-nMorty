import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regitro',
  templateUrl: './regitro.component.html',
  styleUrls: ['./regitro.component.css']
})
export class RegitroComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
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
    console.log('Registro');
  }

}
