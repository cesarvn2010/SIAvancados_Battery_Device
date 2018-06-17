import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Registro } from '../../models/registro.model';

@Injectable()
export class ListaBateriaService {

  private dbPath = '/BatteryStatus';

  registrosRef: AngularFireList<Registro> = null;

  constructor(private db: AngularFireDatabase) {
    this.registrosRef = db.list(this.dbPath);
  }

  createRegistro(registro: Registro): void {
    this.registrosRef.push(registro);
  }

  updateRegistro(key: string, value: any): void {
    this.registrosRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteRegistro(key: string): void {
    this.registrosRef.remove(key).catch(error => this.handleError(error));
  }

  getRegistrosList(): AngularFireList<Registro> {
    return this.registrosRef;
  }

  deleteAll(): void {
    this.registrosRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
























//essa app foi desenvolvida por César Murilo