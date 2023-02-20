import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InfoService {
  readonly dataSource$$ = new Subject<string>();
  readonly dataSource$ = this.dataSource$$.asObservable();
}
