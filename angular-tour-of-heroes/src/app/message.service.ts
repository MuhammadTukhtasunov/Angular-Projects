import { Injectable } from '@angular/core'; // Makes service injectable

@Injectable({
	providedIn: 'root', // Service is accessable by all applications
})
export class MessageService {
	messages: string[] = [];

	add(message: string) { //Add messages to cache to be accessed
		this.messages.push(message);  
	}
	
	clear() { // Clears cache so there's space for new messages
		this.messages = []; 
	}
}