"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AppRouter_1 = require("../common/AppRouter");
var securityMiddleware_1 = require("../security/securityMiddleware");
var accountController_1 = require("./accountController");
//This is just an example second router to show how additional routers can be added
var AcccountRouter = /** @class */ (function (_super) {
    __extends(AcccountRouter, _super);
    function AcccountRouter() {
        return _super.call(this) || this;
    }
    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    AcccountRouter.prototype.setupRoutes = function () {
        this.router.post("/account/addfriend", [securityMiddleware_1.SecurityMiddleware.RequireAuth], AcccountRouter.accountController.AddFriend);
        this.router.delete("/account/removefriend", [securityMiddleware_1.SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RemoveFriend);
        this.router.get("/account/refreshfriends", [securityMiddleware_1.SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RefreshFriends);
        this.router.get("/account/requestphotos", [securityMiddleware_1.SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RequestPhotos);
        this.router.post("/account/sendchat", [securityMiddleware_1.SecurityMiddleware.RequireAuth], AcccountRouter.accountController.SendFriendChat);
        this.router.get("/account/refreshchat", [securityMiddleware_1.SecurityMiddleware.RequireAuth], AcccountRouter.accountController.RefreshFriendChat);
    };
    AcccountRouter.accountController = new accountController_1.AccountController();
    return AcccountRouter;
}(AppRouter_1.AppRouter));
exports.AcccountRouter = AcccountRouter;
//# sourceMappingURL=accountRouter.js.map