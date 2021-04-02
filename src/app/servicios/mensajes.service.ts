import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private dbpath = '/mensajes';
  mensajesRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) { 
    this.mensajesRef = db.collection(this.dbpath);
  }

  Crear(mensaje: Mensaje): any{
    return this.mensajesRef.add({...mensaje});
  }

  ObtenerTodos(): AngularFirestoreCollection<Mensaje>{
    return this.mensajesRef;
  }


}
