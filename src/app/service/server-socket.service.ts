import {Injectable} from "@angular/core";
import {QueueingSubject} from "queueing-subject";
import {Observable} from "rxjs/Observable";
import websocketConnect from 'rxjs-websockets'
import 'rxjs/add/operator/share'

@Injectable()
export class ServerSocketService {
  private inputStream: QueueingSubject<string>
  public messages: Observable<string>

  public connect(url: string) {
    if (this.messages)
      return;
    this.inputStream = new QueueingSubject<string>()
    this.messages = websocketConnect(url, this.inputStream = new QueueingSubject<string>()
    ).messages.share()
  }

  public send(message: string): void {
    this.inputStream.next(message)
  }
}
