describe('get(name)',function(){
  it('성명이 등록되어 있지 않으면 undefine을 반환한다.',function(){
    expect(container.get('notDefined')).toBeUndefined();
  });
});
