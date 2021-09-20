let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/libs/app');
const { User } = require('../models');
var assert = require('assert');

chai.use(chaiHttp);

describe('healthCheck controller test', () => {
  beforeEach((done) => {
    done();
  });

  describe('/GET healthCheck', () => {
    it('it should GET server is running', async (done) => {
      const user = await User.findOne({ where: { email: 'bruno@doe.com' } });

      chai.request(server)
        .get('/api/healthCheck')
        .set('Authorization', 'Bearer ' + user.token)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.data.msg, 'Server is running (^.^)');
          done();
        });
    });
  });
});