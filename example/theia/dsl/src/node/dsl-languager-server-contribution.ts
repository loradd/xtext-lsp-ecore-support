import { isWindows } from '@theia/core/lib/common/os';
import { BaseLanguageServerContribution, IConnection } from '@theia/languages/lib/node';
import { injectable } from 'inversify';
import * as net from 'net';
import { join, resolve } from 'path';
import { createSocketConnection } from 'vscode-ws-jsonrpc/lib/server';
import { DSL_LANGUAGE_SERVER_ID, DSL_LANGUAGE_SERVER_NAME } from '../common/DslLanguageInfo';

const EXECUTABLE_NAME = isWindows ? 'dsl-language-server.bat' : 'dsl-language-server';
const EXECUTABLE_PATH = resolve(join(__dirname, '..', '..', 'build', 'dsl-language-server', 'bin', EXECUTABLE_NAME));

@injectable()
export class DslLanguageServerContribution extends BaseLanguageServerContribution {

    readonly id = DSL_LANGUAGE_SERVER_ID;
    readonly name = DSL_LANGUAGE_SERVER_NAME;

    getPort() : number | undefined {
        let arg = process.argv.filter(arg => arg.startsWith('--DSL_LSP='))[0];
        return arg ? Number.parseInt(arg.substring('--DSL_LSP='.length), 10) : undefined;
    }

    start(clientConnection : IConnection) {
        let socketPort = this.getPort();
        if (socketPort) {
            const socket = new net.Socket();
            const serverConnection = createSocketConnection(socket, socket, () => {
                socket.destroy();
            });
            this.forward(clientConnection, serverConnection);
            socket.connect(socketPort);
        } else {
            const args : string[] = [];
            const serverConnection = this.createProcessStreamConnection(EXECUTABLE_PATH, args);
            this.forward(clientConnection, serverConnection); 
        }
    }

}