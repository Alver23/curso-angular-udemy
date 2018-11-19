// Dependencies Angular
import { Component, OnInit } from '@angular/core';

// Services
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  public message: string;
  public element: any;
  constructor(public _chatService: ChatService) {
  }

  ngOnInit() {
    this.element = document.getElementById('app-mensajes');
    this._chatService.initialize()
      .subscribe(() => {
        setTimeout(() => this.element.scrollTop = this.element.scrollHeight, 200);
      });
  }

  sendMessage(message) {
    if (message) {
      this._chatService.addMessage(message)
        .then((response: any) => this.message = '')
        .catch((error: any) => console.error(error));
    }
  }

  isUserSame(userId: string) {
    console.log(this._chatService.user.uid);
    console.log(parseInt(userId, 10));
  }

}
