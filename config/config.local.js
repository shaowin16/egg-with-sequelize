'use strict';

module.exports = () => {

  return {

    sequelize: {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'indexy',
      host: '139.129.20.182',
      port: '3306',
      username: 'root',
      password: 'indexy_mysql_v1',
      pool: {
        max: 8, // 最大连接数
        min: 0, // 最小连接数
        idle: 10000, // connection释放前的最大空闲时间
      },
      timezone: '+08:00',
    },

    logger: {
      level: 'DEBUG',
      consoleLevel: 'DEBUG',
    },

    nats: {
      subject: 'indexy.articles',
      clusterId: 'test-cluster',
      clientId: (() => {
        return 'node-stream-pub_' + (process.env.nats_cid || '');
      })(),
      opts: {
        url: 'nats://114.67.159.3:4222',
        maxReconnectAttempts: -1, // 一直重试
        reconnectTimeWait: 1000, // 1s
      },
      // 订阅时可配置的参数
      subscriptionOptions: {
        durableName: 'crawler-workers',
        deliverAllAvailable: true,
        maxInFlight: 5, // 一次只接收处理5个消息
        // ackWait: 60 * 1000,
        manualAckMode: true, // 手动ack
      },
    },

  };

};
