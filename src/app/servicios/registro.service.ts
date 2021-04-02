import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private dbpath = '/usuarios';
  usuariosRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { 
    this.usuariosRef = db.collection(this.dbpath);
  }

  Crear(mensaje: Usuario): any{
    return this.usuariosRef.add({...mensaje});
  }

  ObtenerTodos(): AngularFirestoreCollection<Usuario>{
    return this.usuariosRef;
  }


}