import {Component, inject} from '@angular/core';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Button} from 'primeng/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    Button
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder)
  private router = inject(Router)
  form: FormGroup = this.fb.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });


  login() {
    this.router.navigate(['app/gestao']);
  }

}
