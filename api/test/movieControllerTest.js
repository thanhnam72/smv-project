let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require(process.cwd() + '/libs/app');
const { User } = require('../models');
var assert = require('assert');

chai.use(chaiHttp);

describe('movie controller test', () => {
  beforeEach((done) => {
    done();
  });

  describe('/GET movie', () => {
    it('it should GET all movie', async (done) => {
      const user = await User.findOne({ where: { email: 'bruno@doe.com' } });

      chai.request(server)
        .get('/api/movie/all')
        .set('Authorization', 'Bearer ' + user.token)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.data.length, 1);
          done();
        });
    });
  });

  describe('/POST share movie', () => {
    it('it should POST movie is share successfully', async (done) => {
      const user = await User.findOne({ where: { email: 'bruno@doe.com' } });

      chai.request(server)
        .post('/api/movie/share', {
          url: 'url1'
        })
        .set('Authorization', 'Bearer ' + user.token)
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.data, true);
          done();
        });
    });
  });
});