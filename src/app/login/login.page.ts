import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    const USUARIO_CORRECTO = 'admin';
    const PASSWORD_CORRECTO = '1234';

    if (this.usuario === USUARIO_CORRECTO && this.password === PASSWORD_CORRECTO) {
      this.router.navigate(['/home']); //redirigir a la calc si el login estga bn
    } else {
      const alert = await this.alertController.create({ //alerta si el login esta mal
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}