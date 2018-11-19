import { Component, OnInit } from '@angular/core';

// Services
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _chatService: ChatService) { }

  ngOnInit() {
  }

  login(provider: string) {
    this._chatService.login(provider)
      .then((response: any) => console.log(response));
  }

}
