/* eslint-disable no-console */
// import { server as Server } from 'websocket';
import app from './app';

const clients = {};
const agentLocations = {};

function getUniqueID(id, name) {
  const uniqueID = `${id}.${name}`;
  return uniqueID;
}

const PORT = process.env.PORT || 3333;
const httpServer = app.listen(PORT);
/**
const wsServer = new Server({
  httpServer,
  clientTracking: true,
});

const sendMessage = json => {
  // We are sending the current data to all connected clients
  Object.keys(clients).forEach(client => {
    clients[client].sendUTF(json);
  });
};

wsServer.on('request', request => {
  const { query } = request.resourceURL;
  const connection = request.accept(null, request.origin);

  const { id, name, mobile } = query;
  const userID =
    mobile === undefined
      ? `${getUniqueID(id, name)}-web`
      : `${getUniqueID(id, name)}-mob`;
  clients[userID] = connection;
  console.log(`${new Date()}: Usuário ${userID} conectado`);

  connection.on('message', message => {
    const parsedMessage = JSON.parse(message.utf8Data);

    // se for uma mensagem de geolozalizaçãoe
    if (parsedMessage.type === 'geolocation') {
      let response = JSON.parse(message.utf8Data);
      agentLocations[userID] = response;
      console.log(`${userID}:${JSON.stringify(response)}`);

      [, response.name] = userID.split('.');
      response = JSON.stringify(response);
      sendMessage(response);
    }

    // executado quando uma requisição para localizações é feita
    else if (parsedMessage.type === 'requestLocations') {
      const response = {
        type: 'responseLocations',
        agents: agentLocations,
      };
      connection.sendUTF(JSON.stringify(response));
    }

    // se for uma mensagem simples
    else if (parsedMessage.type === 'message') {
      console.log('voce será avisado');
    }
  });

  connection.on('close', () => {
    console.log(`${new Date()}: Usuário ${userID} desconectado`);
    delete clients[userID];
    if (agentLocations[userID]) {
      delete agentLocations[userID];
      console.log(agentLocations);

      const response = {
        type: 'responseLocations',
        agents: agentLocations,
      };
      sendMessage(response);
    }
  });
});

process.on('uncaughtException', error => {
  console.log(error);
  httpServer.close();
}); */

export default httpServer;
