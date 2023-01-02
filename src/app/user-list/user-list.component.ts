import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../share/rest-api.service';
import { User } from './user.model';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api: RestAPIService, private route: ActivatedRoute) { }

  users: User[] = [];

  ngOnInit(): void {

    this.route.data.subscribe((data: Data)=>{

      this.users = data['users'];
    });

/*     this.api.getUserList().subscribe((response: User[])=>{

        this.users = response;
    }); */
    
  }

}
