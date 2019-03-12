import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', # by element
  // selector: '.app-servers', # by class
  selector: 'app-servers', // by component
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event.target.value);
    this.serverName = (event.target).value;
  }
}
