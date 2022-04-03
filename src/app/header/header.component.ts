import {Component,OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pricing'
      },
      {
        label: 'Blog'
      },
      {
        label: 'About'
      },
      {
        label: 'Help'
      },
    ];
  }

  search(inp:any): any{
    if(inp.value == "" || inp.value == null) {
      return false;
    }
    else {
      this.router.navigateByUrl(`/profile/${inp.value}`);
    }
  }

}
