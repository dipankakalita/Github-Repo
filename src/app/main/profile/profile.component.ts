import { Component, OnInit } from '@angular/core';
import {UserDataService} from './../../services/user-data.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  constructor(private github: UserDataService, private messageService: MessageService) {
  }
  ngOnInit(): void {

  }

  



}
