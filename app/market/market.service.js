"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
/*const Http = require('http')
*/
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'https://calm-thicket-38975.herokuapp.com/api';
    }
    /*pushData(data) {
      var headers = new Headers();
          headers.append('Content-Type', 'application/json');
          if(data.temperature < 36.5 || data.temperature > 37.5 || data.heartbear < 120 )
            data.sick = 1
          else data.sick = 0
          return this.http.post('http://localhost:8000/data/', JSON.stringify(data),
           { headers: headers }) .map(response => response.json());
    }*/
    DataService.prototype.getPalmares = function () {
        return this.http.get(this.url + "/palmares")
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getMarket = function () {
        return this.http.get(this.url + "/market")
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0Isc0NBQXdEO0FBRXhEO0VBQ0U7QUFFRixJQUFhLFdBQVc7SUFFdEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsOENBQThDLENBQUE7SUFDN0QsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsaUNBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsR0FBRyxjQUFXLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxHQUFHLFlBQVMsQ0FBQzthQUNqQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR2UsV0FBSTtHQUZuQixXQUFXLENBd0J2QjtBQXhCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtldCB9IGZyb20gJy4uL21hcmtldC9tYXJrZXQnO1xuaW1wb3J0IHsgUGFsbWFyZXMgfSBmcm9tICcuLi9wYWxtYXJlcy9wYWxtYXJlcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbi8qY29uc3QgSHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxuKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gIHVybDogc3RyaW5nXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly9jYWxtLXRoaWNrZXQtMzg5NzUuaGVyb2t1YXBwLmNvbS9hcGknXG4gIH1cblxuICAvKnB1c2hEYXRhKGRhdGEpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICBpZihkYXRhLnRlbXBlcmF0dXJlIDwgMzYuNSB8fCBkYXRhLnRlbXBlcmF0dXJlID4gMzcuNSB8fCBkYXRhLmhlYXJ0YmVhciA8IDEyMCApXG4gICAgICAgICAgZGF0YS5zaWNrID0gMVxuICAgICAgICBlbHNlIGRhdGEuc2ljayA9IDBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvZGF0YS8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9KSAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0qL1xuICBnZXRQYWxtYXJlcygpOiBPYnNlcnZhYmxlPFBhbG1hcmVzW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybH0vcGFsbWFyZXNgKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgfVxuXG4gIGdldE1hcmtldCgpOiBPYnNlcnZhYmxlPE1hcmtldFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy51cmx9L21hcmtldGApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICB9XG59XG4iXX0=