import { ContainerModule } from "inversify";

import { LanguageGrammarDefinitionContribution } from '@theia/monaco/lib/browser/textmate';
import { DslLanguageGrammarDefinitionContribution } from './dsl-language-grammar-definition-contribution';

import { LanguageClientContribution } from '@theia/languages/lib/browser';
import { DslLanguageClientContribution } from './dsl-language-client-contribution';

export default new ContainerModule(bind => {
    bind(LanguageClientContribution).to(DslLanguageClientContribution).inSingletonScope();
    bind(LanguageGrammarDefinitionContribution).to(DslLanguageGrammarDefinitionContribution).inSingletonScope();
});