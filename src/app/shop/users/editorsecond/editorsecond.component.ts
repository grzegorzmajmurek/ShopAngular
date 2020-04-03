import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserStorageService} from '../../../user-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../http-client.service';

@Component({
  selector: 'app-editorsecond',
  templateUrl: './editorsecond.component.html',
  styleUrls: ['./editorsecond.component.css']
})
export class EditorsecondComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private router: Router,
              private activeRoute: ActivatedRoute, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getUserToEdit();
  }

  user: User = new User();

  saveUser(user: User) {
    this.httpClient.saveUser(user).subscribe(r =>{
      this.router.navigate(['/shop/users']);
    });
  }

  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params =>{
      const id = params.get('id');
      if (id){
        this.httpClient.getUser(Number.parseInt(id)).subscribe(p => this.user = p);
      }
    });
  }

}
