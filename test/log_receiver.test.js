import chai, { should } from 'chai';
import asPromised from 'chai-as-promised';
import assert from 'assert';
import receiver from '../src/log_receiver';

chai.use(asPromised);
should();

describe('log_receiver', function() {
  var server = {
    log: {
      debug(){},
    },
  };

  describe('receiver()', function() {
    var f = receiver(server);

    it('receiver factory should return a function', function() {
      f.should.be.a('Function');
    });

    it('receiver should return a promise', function() {
      var h = f();
      h.should.be.a('Promise')
    });
  });

  describe('messageReceived()', function() {
    var f = receiver(server);
    it('receiver promise should resolve', function() {
      var h = f();
      h.should.be.fulfilled;
    });
  });
});
