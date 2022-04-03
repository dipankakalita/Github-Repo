import {Component,OnInit} from '@angular/core';
import {UserDataService} from './../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private github: UserDataService,private router: Router) { }

  ngOnInit(): void {
  }

  search(inp: any): any {
    if(inp.value == "" || inp.value == null) {
      return false;
    }
    else {
      this.router.navigateByUrl(`/profile/${inp.value}`);
    }
  }

}
