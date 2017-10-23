"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var market_service_1 = require("../market/market.service");
var core_1 = require("@angular/core");
var PalmaresComponent = (function () {
    function PalmaresComponent(dataService) {
        this.dataService = dataService;
        this.text = 'Palmares Page';
        this.palmaresList = [];
        this.isLoading = false;
    }
    PalmaresComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.dataService.url)
        var base = this;
        this.isLoading = true;
        this.dataService.getPalmares()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            for (var i = 0; i < 5; i++) {
                base.palmaresList.unshift(loaded[i]);
                _this.isLoading = false;
            }
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(base.palmaresList);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return PalmaresComponent;
}());
PalmaresComponent = __decorate([
    core_1.Component({
        selector: 'palmares',
        templateUrl: 'palmares/palmares.component.html',
        providers: [market_service_1.DataService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [market_service_1.DataService])
], PalmaresComponent);
exports.PalmaresComponent = PalmaresComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsbWFyZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsbWFyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXNEO0FBQ3RELHNDQUEwRTtBQVMxRSxJQUFhLGlCQUFpQjtJQUk1QiwyQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUMsU0FBSSxHQUFXLGVBQWUsQ0FBQTtRQUM5QixpQkFBWSxHQUFvQixFQUFFLENBQUE7UUFDM0IsY0FBUyxHQUFXLEtBQUssQ0FBQTtJQUNlLENBQUM7SUFFaEQsb0NBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCQyxtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7YUFFM0IsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNYLGlDQUFpQztZQUMvQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDcEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7WUFDMUIsQ0FBQztZQUNILHVFQUF1RTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNKOztZQUVJO0lBQ04sQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxrQ0FBa0M7UUFDL0MsU0FBUyxFQUFFLENBQUMsNEJBQVcsQ0FBQztRQUN4QixlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQUtpQyw0QkFBVztHQUpqQyxpQkFBaUIsQ0EwQjdCO0FBMUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhbG1hcmVzIH0gZnJvbSAnLi4vcGFsbWFyZXMvcGFsbWFyZXMnXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL21hcmtldC9tYXJrZXQuc2VydmljZSdcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFsbWFyZXMnLFxuICB0ZW1wbGF0ZVVybDogJ3BhbG1hcmVzL3BhbG1hcmVzLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQYWxtYXJlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgdGV4dDogc3RyaW5nID0gJ1BhbG1hcmVzIFBhZ2UnXG4gIHBhbG1hcmVzTGlzdDogQXJyYXk8UGFsbWFyZXM+ID0gW11cbiAgcHVibGljIGlzTG9hZGluZzpib29sZWFuID0gZmFsc2VcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFTZXJ2aWNlLnVybClcbiAgICBsZXQgYmFzZSA9IHRoaXNcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldFBhbG1hcmVzKClcbiAgICBcbiAgICAgIC5zdWJzY3JpYmUobG9hZGVkID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy5wYWxtYXJlc0xpc3QucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgICAgICAgICAgICAgICBiYXNlLnBhbG1hcmVzTGlzdC51bnNoaWZ0KGxvYWRlZFtpXSlcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhiYXNlLnBhbG1hcmVzTGlzdClcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG4iXX0=