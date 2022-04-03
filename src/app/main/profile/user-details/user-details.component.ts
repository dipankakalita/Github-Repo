import { Component, OnInit } from '@angular/core';
import {UserDataService} from './../../../services/user-data.service';
import {MessageService} from 'primeng/api';
import {Router,ActivatedRoute,ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [MessageService]
})
export class UserDetailsComponent implements OnInit {

  private userName: any = "";
  public profile: any = "";
  public avatar_url: string = "";
  public name: string = "";
  public bio: string = "";
  public location: string = "";
  public twitter_username: string = "";
  public gitURL: string = "";
  public parameterValue: string = '';

  constructor(private github: UserDataService,private messageService: MessageService,private _router: Router,private _activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      const ids = params.get('parameter');
      this.getData(ids);
    });
  }

  getData(data: any): void {
    this.userName = '';
    this.profile = '';
    this.avatar_url = '';
    this.name = '';
    this.bio = '';
    this.location = '';
    this.twitter_username = '';
    this.gitURL = '';
    const ajax = this.github.getUserData(data);
    ajax.subscribe((response: any) => {
      this.userName = data;
      this.profile = response;
      this.avatar_url = response.avatar_url;
      this.name = response.name;
      this.bio = response.bio;
      this.location = response.location;
      this.twitter_username = response.twitter_username;
      this.gitURL = response.html_url;
      this.github.repoData(this.userName,response.public_repos);
    },
      (error: any) => {
        this.profile = '';
        this.messageService.add({severity: 'error',summary: 'Error',detail: 'Wrong Username'});
        this._router.navigateByUrl(`/error`);
      });
  }

}
