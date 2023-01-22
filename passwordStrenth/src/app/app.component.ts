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

  colorBar3() {
    if (!this.psw?.invalid) {
      return 'green'};
    if (this.psw?.errors?.['minlength']) {
      return 'red'};
    if (this.psw?.errors?.['required'] || this.psw?.invalid) {
      return 'gray'};
    return null
  }

  colorBar2() {
    if (!this.psw?.invalid) {
      return 'green'};
    if (this.psw?.errors?.['minlength']) {
      return 'red'};
    if (this.psw?.errors?.['required'] ||
      (this.psw?.errors?.['no_letters'] && this.psw?.errors?.['no_digits']) ||
      (this.psw?.errors?.['no_symbols'] && this.psw?.errors?.['no_digits']) ||
      (this.psw?.errors?.['no_letters'] && this.psw?.errors?.['no_symbols'])) {
      return 'gray'};
    if (this.psw?.invalid) {
      return 'orange'};
    return null
  }

  colorBar1() {
    if (!this.psw?.invalid) {
      return 'green'};
    if (this.psw?.errors?.['required']) {
      return 'gray'};
    if (this.psw?.errors?.['minlength'] ||
      (this.psw?.errors?.['no_letters'] && this.psw?.errors?.['no_digits']) ||
      (this.psw?.errors?.['no_symbols'] && this.psw?.errors?.['no_digits']) ||
      (this.psw?.errors?.['no_letters'] && this.psw?.errors?.['no_symbols'])) {
      return 'red'};
    if (this.psw?.invalid) {
      return 'orange'};
    return null
  }
}
