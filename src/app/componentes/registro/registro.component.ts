import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../../clases/usuario';
import { RegistroService } from '../../servicios/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarioIngresado: string = "";
  emailIngresado: string= "";
  claveIngresada: string = "";
  user: Usuario = new Usuario();

  constructor(private router: Router, private registroService: RegistroService) { }

  ngOnInit(): void {
  }

  RegistrarUsuario(){
    this.user.usuario = this.usuarioIngresado;
    this.user.email = this.emailIngresado;
    this.user.clave = this.claveIngresada;
    this.registroService.Crear(this.user);
    console.log("Registro exitoso");
    this.router.navigateByUrl('/home');
  }


  IrALogin(): void{
    this.router.navigate(['/login']);
  }

}
