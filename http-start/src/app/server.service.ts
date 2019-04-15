import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class ServerService {
    url = 'https://angular-http-tester.firebaseio.com/data.json';

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";


        return this.http.put(
                this.url,
                servers,
                {headers: headers}
            );
    }

    getServers() {
        return this.http.get(this.url);
    }
}