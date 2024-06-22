import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonSharedService {

  constructor() { }

  public type = new BehaviorSubject<string>('')
}
