import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
	
	// MessageService injected upon creation v---v
  constructor(public messageService: MessageService) { }  // MessageService injected

  ngOnInit(): void {
  }

}