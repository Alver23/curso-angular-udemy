import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  form: FormGroup;
  public user: Object = {
    full_name: {
      first_name: 'Alver',
      last_name: 'Grisales',
    },
    email: 'viga.23@hotmail.com',
    // hobbies: ['Correr', 'Dormir', 'Comer'],
    password: null,
    confirm_password: null,
  };

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'full_name': new FormGroup({
        'first_name': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'last_name': new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          this.noGrisales
        ])
      }),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}')
      ]),
      'password': new FormControl('', [
        Validators.required,
      ]),
      'confirm_password': new FormControl(''),
      'hobbies': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'username': new FormControl('', [
        Validators.required
      ], this.userExist),
    });

    this.form.controls['confirm_password'].setValidators([
      Validators.required,
      this.toNotEquals.bind(this)
    ]);

    this.form.valueChanges.subscribe((data: any) => console.log(data));
    this.form.controls['username'].statusChanges.subscribe((data: any) => console.log(data));
    // this.form.setValue(this.user);
  }

  save() {
    console.log(this.form);
    this.form.reset();
  }

  noGrisales(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'grisales') {
      return {
        noGrisales: true,
      };
    }
    return null;
  }

  toNotEquals(control: FormControl): {[s: string]: boolean} {
    if (control.value !== this.form.controls['password'].value) {
      return {
        notEqual: true
      };
    }
    return null;
  }

  addHobbie() {
    (<FormArray>this.form.controls['hobbies']).push(
      new FormControl('Dormir', Validators.required)
    );
  }

  userExist(control: FormControl): Promise<any>|Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'alver23') {
          resolve({exist: true});
        } else {
          resolve();
        }
      }, 3000);
    });
  }

}
