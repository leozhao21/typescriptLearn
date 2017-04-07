/**
 * SOLID原则
 */
// ************ 里氏替换原则（LSP） ******************* 
// 表示派生类对象能够替换其基类对象被使用
var CookiePersistanceService = (function () {
    function CookiePersistanceService() {
    }
    CookiePersistanceService.prototype.save = function (entity) {
        return 3;
    };
    return CookiePersistanceService;
}());
var testPersistance = (function () {
    function testPersistance(persistance) {
        this._persistance = persistance;
    }
    testPersistance.prototype.getNumber = function () {
        return this._persistance.save(2323);
    };
    return testPersistance;
}());
var tst = new testPersistance(new CookiePersistanceService());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy8wMl9PT1AvMDJfMDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxnREFBZ0Q7QUFDaEQsc0JBQXNCO0FBTXRCO0lBQUE7SUFJQSxDQUFDO0lBSEcsdUNBQUksR0FBSixVQUFLLE1BQVk7UUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFFRDtJQUdJLHlCQUFZLFdBQXlDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxtQ0FBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQUVELElBQUksR0FBRyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksd0JBQXdCLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6IjAyX09PUC8wMl8wMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTT0xJROWOn+WImVxyXG4gKi9cclxuLy8gKioqKioqKioqKioqIOmHjOawj+abv+aNouWOn+WIme+8iExTUO+8iSAqKioqKioqKioqKioqKioqKioqIFxyXG4vLyDooajnpLrmtL7nlJ/nsbvlr7nosaHog73lpJ/mm7/mjaLlhbbln7rnsbvlr7nosaHooqvkvb/nlKhcclxuXHJcbmludGVyZmFjZSBQZXJzaXN0YW5jZVNlcnZpY2VJbnRlcmZhY2Uge1xyXG4gICAgc2F2ZShlbnRpdHkgOiBhbnkpIDogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBDb29raWVQZXJzaXN0YW5jZVNlcnZpY2UgaW1wbGVtZW50cyBQZXJzaXN0YW5jZVNlcnZpY2VJbnRlcmZhY2V7XHJcbiAgICBzYXZlKGVudGl0eSA6IGFueSk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAzO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyB0ZXN0UGVyc2lzdGFuY2Uge1xyXG4gICAgcHJpdmF0ZSBfcGVyc2lzdGFuY2UgOiBQZXJzaXN0YW5jZVNlcnZpY2VJbnRlcmZhY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGFuY2UgOiBQZXJzaXN0YW5jZVNlcnZpY2VJbnRlcmZhY2Upe1xyXG4gICAgICAgIHRoaXMuX3BlcnNpc3RhbmNlID0gcGVyc2lzdGFuY2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXROdW1iZXIoKTpudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlcnNpc3RhbmNlLnNhdmUoMjMyMyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciB0c3QgPSBuZXcgdGVzdFBlcnNpc3RhbmNlKG5ldyBDb29raWVQZXJzaXN0YW5jZVNlcnZpY2UoKSk7XHJcbiJdfQ==
