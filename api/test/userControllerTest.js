let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/libs/app');
const { User } = require('../models');
var assert = require('assert');

chai.use(chaiHttp);

describe('user controller test', () => {
  beforeEach((done) => {
    done();
  });

  describe('/GET user', () => {
    it('it should GET correct user', async (done) => {
      const user = await User.findOne({ where: { email: 'bruno@doe.com' } });

      chai.request(server)
        .post('/api/user')
        .set('Authorization', 'Bearer ' + user.token)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.data.email, 'bruno@doe.com');
          done();
        });
    });
  });
});