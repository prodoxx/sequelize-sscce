import { DataTypes, Model } from 'sequelize';
import { createSequelize6Instance } from '../setup/create-sequelize-instance';
import { expect } from 'chai';
import sinon from 'sinon';

// if your issue is dialect specific, remove the dialects you don't need to test on.
export const testingOnDialects = new Set(['mysql']);

// You can delete this file if you don't want your SSCCE to be tested against Sequelize 6

// Your SSCCE goes inside this function.
export async function run() {
  // This function should be used instead of `new Sequelize()`.
  // It applies the config for your SSCCE to work on CI.
  const sequelize = createSequelize6Instance({
    logQueryParameters: true,
    benchmark: true,
    define: {
      // For less clutter in the SSCCE
      timestamps: false,
    },
  });

  sequelize
  .authenticate()
  .then(function(err) {
    console.debug('Connection has been established successfully: ', sequelize.config);
    console.debug('Config: ', sequelize.config);
  })
  .catch(function (err) {
    console.debug('Unable to connect to the database:', err);
  });

  // class Foo extends Model {}

  // Foo.init({
  //   name: DataTypes.TEXT,
  // }, {
  //   sequelize,
  //   modelName: 'Foo',
  // });

  // // You can use sinon and chai assertions directly in your SSCCE.
  // const spy = sinon.spy();
  // sequelize.afterBulkSync(() => spy());
  // await sequelize.sync({ force: true });
  // expect(spy).to.have.been.called;

  // console.log(await Foo.create({ name: 'TS foo' }));
  // expect(await Foo.count()).to.equal(1);
}
