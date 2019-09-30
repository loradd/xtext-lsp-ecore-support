import { ContainerModule } from 'inversify';
import { LanguageServerContribution } from '@theia/languages/lib/node';
import { DslLanguageServerContribution } from './dsl-languager-server-contribution';

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(DslLanguageServerContribution).inSingletonScope();
});