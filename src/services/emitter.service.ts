import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  private source = new Subject<any>();
  data = this.source.asObservable();

  constructor() { }

  emit(count) {
    this.source.next(count);
    console.log(count);
  }
}