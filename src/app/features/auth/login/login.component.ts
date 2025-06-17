import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigateByUrl('/menu');
    } catch (err: any) {
      this.error = 'Correo o contraseña inválida';
      console.error(err);
    }
  }
}
