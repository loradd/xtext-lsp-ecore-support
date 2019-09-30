package se.mdh.idt.xtext.ecore

import org.eclipse.xtext.resource.generic.AbstractGenericResourceRuntimeModule
import org.eclipse.xtext.naming.DefaultDeclarativeQualifiedNameProvider

class EcoreLanguageRuntimeModule extends AbstractGenericResourceRuntimeModule {

    override protected getLanguageName() {
        'org.eclipse.emf.ecore.presentation.EcoreEditorID'
    }

    override protected getFileExtensions() {
        'ecore'
    }

    override bindIQualifiedNameProvider() {
        DefaultDeclarativeQualifiedNameProvider
    }

}