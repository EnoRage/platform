import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentAccount: any;
  constructor(private http: HttpClient) {
  }


}
