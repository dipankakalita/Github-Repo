import { Component, OnInit } from '@angular/core';
import {UserDataService} from './../../../services/user-data.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute,ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  public p: number = 1;
  public allRepos: any[] = [];
  private userName: any = "";
  public public_repos: number = 0;

  constructor(private github: UserDataService,private messageService: MessageService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.allRepos = [];
      this.public_repos = 0;
      this.p = 1;
    });

    this.github.repoSubject.subscribe((data: any) => {
      this.userName = data[0];
      this.public_repos = data[1];
      this.getRepoData();
      this.allRepos = [];
    })
  }

  getRepoData(): void {
    const repo = this.github.getRepoData(this.userName,this.p);
    repo.subscribe((resoData: any) => {
      this.allRepos = resoData;
    },
      (error: any) => {
        console.log("error: " + error);
      });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getRepoData();
    this.allRepos = [];
  }

}
