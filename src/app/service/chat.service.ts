import {Injectable} from "@angular/core";
import {ServerSocketService} from "./server-socket.service";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class ChatService {
  private sender: string;
  private socketSubscription: Subscription
  private chaturl: string = 'ws://localhost:9000/chat?user='

  constructor(private socket: ServerSocketService) {}

  public connect(sender: string, callback) {
    this.startConnect(sender, callback)
  }

  public startConnect(sender: string, onReceived) {
    this.sender = sender
    this.socket.connect(this.chaturl + sender)

    this.socketSubscription = this.socket.messages.subscribe((message: string) => {
      onReceived(JSON.parse(message))
    })
  }

  public onSendMessage(input: string) {
    var messageContent = input.trim();
    if (messageContent) {
      var chatMessage = {
        'sender': this.sender,
        'content': input,
        'status': 'CHAT'
      };
      this.socket.send(JSON.stringify(chatMessage))
    }
  }

  public unsubscribe() {
    this.socketSubscription.unsubscribe()
  }

  private onError = (error) => {
    alert('Could not connect to WebSocket server. Please refresh this page to try again!');
    alert(error.message);
  }

}

