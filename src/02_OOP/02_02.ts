/**
 * SOLID原则
 */
// ************ 里氏替换原则（LSP） ******************* 
// 表示派生类对象能够替换其基类对象被使用

interface PersistanceServiceInterface {
    save(entity : any) : number;
}

class CookiePersistanceService implements PersistanceServiceInterface{
    save(entity : any):number{
        return 3;
    }
}

class testPersistance {
    private _persistance : PersistanceServiceInterface;

    constructor(persistance : PersistanceServiceInterface){
        this._persistance = persistance;
    }
    
    public getNumber():number{
        return this._persistance.save(2323);
    }
}

var tst = new testPersistance(new CookiePersistanceService());
