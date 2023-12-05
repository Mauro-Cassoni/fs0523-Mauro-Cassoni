import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: '.app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  genere: string[] = [
    'uomo',
    'donna',
    'non definito'
  ];

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      immagine: this.fb.control(null, [Validators.required]),
      biografia: this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required]),
      genere: this.fb.control(null, [Validators.required]),
      authData: this.fb.group({
        password: this.fb.control(null, [Validators.required]),
        confermaPassword: this.fb.control(null, [Validators.required, this.passwordMatchValidator]),
      }),
    });
  }

  passwordMatchValidator = (formC:FormControl):ValidationErrors|null => {
    if(formC.value!=this.form?.get('authData.password')?.value){
      return {
        invalid: true,
        message: 'Le password sono diverse!!'
      }
    }
    return null;
  }


  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid
  }

  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched
  }

  isValidAndTouched(fieldName: string) {
    return this.isValid(fieldName) && this.isTouched(fieldName)
  }

  getErrors(fieldName: string) {
    return this.form.get(fieldName)?.errors
  }

  getCustomMessage(fieldName: string) {
    return this.form.get(fieldName)?.errors!['message']
  }

  send() {
    console.log(this.form.value);
    console.log('form inviato');

  }

}
