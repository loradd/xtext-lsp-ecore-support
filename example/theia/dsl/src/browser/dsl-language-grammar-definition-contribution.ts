import { LanguageGrammarDefinitionContribution, TextmateRegistry } from '@theia/monaco/lib/browser/textmate';
import { injectable } from 'inversify';
import { DSL_LANGUAGE_FILE_EXTENSION, DSL_LANGUAGE_SERVER_ID, DSL_LANGUAGE_SERVER_NAME } from '../common/DslLanguageInfo';

@injectable()
export class DslLanguageGrammarDefinitionContribution implements LanguageGrammarDefinitionContribution {

    registerTextmateLanguage(registry : TextmateRegistry) {
        monaco.languages.register({
            id: DSL_LANGUAGE_SERVER_ID,
            aliases: [DSL_LANGUAGE_SERVER_ID, DSL_LANGUAGE_SERVER_NAME],
            extensions: [DSL_LANGUAGE_FILE_EXTENSION],
            mimetypes: ['text/dsl']
        }); 
        monaco.languages.setLanguageConfiguration(DSL_LANGUAGE_SERVER_ID, this.configuration);
        const dslGrammar = require('../../data/dsl.tmLanguage.json');
        registry.registerTextmateGrammarScope('source.dsl', {
            async getGrammarDefinition() {
                return {
                    format: 'json',
                    content: dslGrammar
                };
            }
        });
        registry.mapLanguageIdToTextmateGrammar(DSL_LANGUAGE_SERVER_ID, 'source.dsl');
    }

    protected configuration: monaco.languages.LanguageConfiguration = {
        'comments': {
            'lineComment': '//',
            'blockComment': ['/*', '*/']
        }
    };

}