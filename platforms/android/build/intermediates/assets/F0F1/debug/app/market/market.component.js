"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var market_service_1 = require("../market/market.service");
var core_1 = require("@angular/core");
var MarketComponent = (function () {
    function MarketComponent(dataService) {
        this.dataService = dataService;
        this.text = 'Market Page';
        this.marketList = [];
        this.isLoading = false;
    }
    MarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        //console.log(this.dataService.url)
        var base = this;
        this.dataService.getMarket()
            .subscribe(function (loaded) {
            //this.palmaresList.push(element)
            base.marketList = loaded;
            _this.isLoading = false;
            //this.palmaresList.push(new Palmares(tmp.name, tmp.dernier, tmp.haut))
            console.log(_this.marketList[0].name);
        });
        /*this.palmaresList.forEach((key, value) => {
            console.log(`${key}: ${value}`)
        })*/
    };
    return MarketComponent;
}());
MarketComponent = __decorate([
    core_1.Component({
        selector: 'market',
        templateUrl: 'market/market.component.html',
        providers: [market_service_1.DataService],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [market_service_1.DataService])
], MarketComponent);
exports.MarketComponent = MarketComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcmtldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyREFBc0Q7QUFDdEQsc0NBQTBFO0FBUzFFLElBQWEsZUFBZTtJQUkxQix5QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUMsU0FBSSxHQUFXLGFBQWEsQ0FBQTtRQUM1QixlQUFVLEdBQWtCLEVBQUUsQ0FBQTtRQUN2QixjQUFTLEdBQVcsS0FBSyxDQUFBO0lBQ2UsQ0FBQztJQUVoRCxrQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ3JCLG1DQUFtQztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFFZixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUN6QixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ1gsaUNBQWlDO1lBRWpDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFBO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLHVFQUF1RTtZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFDSjs7WUFFSTtJQUNOLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw0QkFBVyxDQUFDO1FBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBS2lDLDRCQUFXO0dBSmpDLGVBQWUsQ0F5QjNCO0FBekJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFya2V0IH0gZnJvbSAnLi9tYXJrZXQnXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL21hcmtldC9tYXJrZXQuc2VydmljZSdcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFya2V0JyxcbiAgdGVtcGxhdGVVcmw6ICdtYXJrZXQvbWFya2V0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHRleHQ6IHN0cmluZyA9ICdNYXJrZXQgUGFnZSdcbiAgbWFya2V0TGlzdDogQXJyYXk8TWFya2V0PiA9IFtdXG4gIHB1YmxpYyBpc0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhU2VydmljZS51cmwpXG4gICAgbGV0IGJhc2UgPSB0aGlzXG5cbiAgICB0aGlzLmRhdGFTZXJ2aWNlLmdldE1hcmtldCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucGFsbWFyZXNMaXN0LnB1c2goZWxlbWVudClcblxuICAgICAgICAgICAgYmFzZS5tYXJrZXRMaXN0ID0gbG9hZGVkXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgLy90aGlzLnBhbG1hcmVzTGlzdC5wdXNoKG5ldyBQYWxtYXJlcyh0bXAubmFtZSwgdG1wLmRlcm5pZXIsIHRtcC5oYXV0KSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hcmtldExpc3RbMF0ubmFtZSlcbiAgICAgIH0pXG4gICAgLyp0aGlzLnBhbG1hcmVzTGlzdC5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YClcbiAgICB9KSovICBcbiAgfVxuXG59XG5cblxuIl19