import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {          // Adds message to cache
    this.messages.push(message);
  }

  clear() {                       // Clears cache
    this.messages = [];
  }

  constructor() { }
}
