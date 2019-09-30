import { BaseLanguageClientContribution, LanguageClientFactory, Languages, Workspace } from '@theia/languages/lib/browser';
import { inject, injectable } from 'inversify';
import { DSL_LANGUAGE_SERVER_ID, DSL_LANGUAGE_SERVER_NAME, DSL_LANGUAGE_FILE_EXTENSION } from '../common/DslLanguageInfo';

@injectable()
export class DslLanguageClientContribution extends BaseLanguageClientContribution {

    readonly id = DSL_LANGUAGE_SERVER_ID;
    readonly name = DSL_LANGUAGE_SERVER_NAME;

    constructor(
        @inject(Workspace) protected readonly workspace: Workspace,
        @inject(Languages) protected readonly languages: Languages,
        @inject(LanguageClientFactory) protected readonly languageClientFactory: LanguageClientFactory
    ) {
        super(workspace, languages, languageClientFactory);
    }

    protected get globPatterns(): string[] {
        return [ '**/*' + DSL_LANGUAGE_FILE_EXTENSION, '**/*.ecore' ];
    }

    protected get documentSelector(): string[] {
        return [ DSL_LANGUAGE_SERVER_ID ];
    }

}