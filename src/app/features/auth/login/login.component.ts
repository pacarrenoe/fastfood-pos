import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import {Auth, signInWithEmailAndPassword, signInWithPopup} from "@angular/fire/auth";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async loginWithEmail() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value;

    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigateByUrl('/home');
    } catch (err: any) {
      this.error = err.message ?? 'Correo o contraseña inválida';
    }
  }

  async loginWithGoogle() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
      this.router.navigateByUrl('/home');
    } catch (err: any) {
      this.error = err.message ?? 'No se pudo iniciar con Google';
    }
  }
}
