import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  form!: FormGroup;

  title = 'passwordStrenth';

  /* Old syntax */
  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.form = this.fb.group({
  //     username: ['', [Validators.required]],
  //     password: ['']
  //   });
  //   this.form.valueChanges.subscribe(console.log)
  // }
  /* New syntax */

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.validateLetters,
        this.validateNumbers,
        this.validateSymbols]),
    })
  }

  onSubmit() {
    alert('Success');
    // this.form.reset();
  }

  get psw() {
    return this.form.get('password')
  }

  get name() {
    return this.form.get('username')
  }

  validateLetters(control: FormControl) {
    const re_letters = /[a-zA-Z]/;
    if (!control.value.toString().match(re_letters)) {
      return {no_letters: true}
    }
    return null
  }

  validateNumbers(control: FormControl) {
    const re_digits = /\d/;
    if (!control.value.toString().match(re_digits)) {
      return {no_digits: true}
    }
    return null
  }

  validateSymbols(control: FormControl) {
    const re_symbols = /\W/;
    if (!control.value.toString().match(re_symbols)) {
      return {no_symbols: true}
    }
    return null
  }
}
