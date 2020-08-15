
import main from "../game/main";
import boxMove from "../game/BoxMove"
import { ApiManager } from "./ApiManager";
import HTTP from "../HTTP/HTTP";
import CfgManager from "./CfgManager";
import Tops from "../dlg/Tops";
import bottom from "../dlg/Bottom";
import { Console } from "../common/unitl/Console";
import { UtilFunction } from "../common/unitl/UtilFunction";

export class Game {
    static Tops: Tops = null;
    static Bottom: bottom = null;
    static gameManager: main = null;
    static ParentItem: cc.Node = null;
    static Box: boxMove = null;
    static ApiManager: ApiManager = null;
    static HttpManager: HTTP = null;
    static CfgManager: CfgManager = null;
    static Console: Console = null;
    static UtilFunction: UtilFunction = null;

    static ReloadGame() {
        this.ApiManager = new ApiManager();
        this.HttpManager = new HTTP();
        this.CfgManager = CfgManager.ins();
        this.Console = new Console();
        this.Console.GetGameType();
        this.UtilFunction = new UtilFunction();
    }
}



/** 游戏类别 */
export enum GameType {
    TEST = "TEST",
    OFFICIAL = 'OFFICIAL',
}
//长弹框只掉banner 商店 图鉴 世界排行榜
//短弹框原生  邀请券 设置  加速 增加转盘卷