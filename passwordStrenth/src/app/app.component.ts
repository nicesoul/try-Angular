import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  form!: FormGroup;

  title = 'passwordStrenth';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['']
    });
    this.form.valueChanges.subscribe(console.log)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

  get psw() {
    return this.form.get('password')
  }

  get name() {
    return this.form.get('username')
  }
  // myValidator() {
  //   if (this.checkPassword?.length? < 8) {
  //     console.log('psw is too short')
  //   }
  // }
  // console.log('psw is confirmed')
  // return}
}
