QUnit.module('fizbuz',function(){

    QUnit.test('Létezik e',function(assert) {
        assert.ok("Létezik-e fizbuz?");
    });

    QUnit.test('Létezik e',function(assert) {
        assert.ok(typeof fizbuzz==="function","Függvény-e a fizbuz?");
    });
    QUnit.test('fizbuz(0)',function(assert) {
        assert.equal(fizbuz(0),"");
    });
    QUnit.test('fizbuz(1)',function(assert) {
        assert.equal(fizbuz(1),1);
    });
    QUnit.test('fizbuz(2)',function(assert) {
        assert.equal(fizbuz(2),'1,2');
    });
    QUnit.test('fizbuz(3)',function(assert) {
        assert.equal(fizbuz(3),'1,2 fizz');
    });
    QUnit.test('fizbuzErtek(1)',function(assert) {
        const nemOszthatoLista=[1,2,3,4,7,8,11,13,14]
        for (let index = 0; index < nemOszthatoLista; index++) {
            const element = array[index];
            
        }
        assert.equal(fizbuzErtek(index),nemOszthatoLista[index]),"fizz";

    });
    QUnit.test('fizbuzErtek(3,6,9,12)',function(assert) {
        const HarommalOszthato=[3,6,9,12]
        for (let index = 0; index < HarommalOszthato; index++) {
            const element = array[index];
            
        }
        assert.equal(fizbuzErtek(index),HarommalOszthato);

    });
    QUnit.test('fizbuzErtek(5,10)',function(assert) {
        const OttelOszthato=[5,10]
        for (let index = 0; index < OttelOszthato; index++) {
            const element = array[index];
            
        }
        assert.equal(fizbuzErtek(index),OttelOszthato);

    });
    QUnit.test('fizbuzErtek(15)',function(assert) {
        const TizenOttelOszthato=[15]
        for (let index = 0; index < TizenOttelOszthato; index++) {
            const element = array[index];
            
        }
        assert.equal(fizbuzErtek(index),TizenOttelOszthato);

    });
    QUnit.test('fizbuzErtek(2)',function(assert) {
        assert.equal(fizbuzErtek(2),2);
    });
    QUnit.test('fizbuzErtek(3)',function(assert) {
        assert.equal(fizbuzErtek(3),'fizz');
    });
    
    




});