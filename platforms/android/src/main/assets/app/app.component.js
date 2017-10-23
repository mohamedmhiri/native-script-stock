"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("nativescript-telerik-ui/sidedrawer/angular/");
var AppComponent = (function () {
    function AppComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
        // List all pages here         
        this.pages = [
            { name: "Home" },
            { name: "About" },
            { name: "Contact" }
        ];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(_1.RadSideDrawerComponent),
    __metadata("design:type", _1.RadSideDrawerComponent)
], AppComponent.prototype, "drawerComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app.component.html"
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsZ0VBQXFHO0FBTXJHLElBQWEsWUFBWTtJQU1yQixzQkFDWSxtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM5QywrQkFBK0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNWLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQztZQUNiLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQztZQUNkLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQztTQUNuQixDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXRCRztJQURDLGdCQUFTLENBQUMseUJBQXNCLENBQUM7OEJBQ1YseUJBQXNCO3FEQUFDO0FBRnRDLFlBQVk7SUFKeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7S0FDcEMsQ0FBQztxQ0FRbUMsd0JBQWlCO0dBUHpDLFlBQVksQ0F3QnhCO0FBeEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgIFxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyL1wiOyAgXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7ICBcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIFxuICAgIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuICAgIHB1YmxpYyBwYWdlczpBcnJheTxPYmplY3Q+O1xuXG4gICAgY29uc3RydWN0b3IgKCBcbiAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICAvLyBMaXN0IGFsbCBwYWdlcyBoZXJlICAgICAgICAgXG4gICAgICAgICB0aGlzLnBhZ2VzID0gW1xuICAgICAgICAgICAge25hbWU6XCJIb21lXCJ9LFxuICAgICAgICAgICAge25hbWU6XCJBYm91dFwifSxcbiAgICAgICAgICAgIHtuYW1lOlwiQ29udGFjdFwifVxuICAgICAgICBdOyBcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICB9XG59Il19