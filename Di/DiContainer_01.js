DiContainer = function(){
  if(!(this instanceof DiContainer)) return new DiContainer();
};
DiContainer.prototype.message={
  registerRequiresArgs:'이 생성자 함수는 인자값이 3개 있어야 함.'+'문자+배열+함수'

};

DiContainer.prototype.register=function(name,dependencies,func){
  var ix;
  if(typeof name !== 'string'|| !Array.isArray(dependencies)||typeof func !=='function'){
    throw new Error(this.message.registerRequiresArgs);
  };
  for(ix=0; ix<dependencies.length; ++ix){
    if(typeof dependencies[ix]!=='string'){
      throw new Error(this.message.registerRequiresArgs);
    }
  }
};
DiContainer.prototype.get=function(name){

};
describe('DiContainer',function(){
  var container;
  beforeEach(function(){
    container = new DiContainer();
  });
  describe('register(name,dependencies,func)',function(){
    it('인자가 하나라도 없거나 타입 미스시 예외 던짐',function(){
      var badArgs = [
        [],['Name'],['Name',['Dependency1','Dependency2']],['Name',function(){}],
        [1,['a','b'],function(){}],['Name',[1,2],function(){}],['Name',['a','b'],'should be a function']
      ];
      // arrname.forEach(callback,this)
      // callback(elem,index,arr<-Array(arrname))
      badArgs.forEach(function(args){
        expect(function(){
          container.register.apply(container,args);
        }).toThrowError(container.message.registerRequiresArgs);
      });
    });
  });
  describe('get(name)',function(){
    it('성명이 등록되어 있지 않으면 undefine을 반환한다.',function(){
      expect(container.get('notDefined')).toBeUndefined();
    });
  });

});
