package se.mdh.idt.xtext.ecore

import com.google.inject.Guice
import com.google.inject.Injector
import org.eclipse.emf.ecore.EPackage
import org.eclipse.emf.ecore.EcorePackage
import org.eclipse.xtext.ISetup
import org.eclipse.xtext.resource.IResourceServiceProvider

class EcoreLanguageStandaloneSetup implements ISetup {

    override createInjectorAndDoEMFRegistration() {
        val Injector injector = createInjector()
        register(injector)
        return injector
    }

    def Injector createInjector() {
        return Guice.createInjector(new EcoreLanguageRuntimeModule())
    }

    def void register(Injector injector) {
        if (!EPackage.Registry.INSTANCE.containsKey("http://www.eclipse.org/emf/2002/Ecore")) {
            EPackage.Registry.INSTANCE.put("http://www.eclipse.org/emf/2002/Ecore", EcorePackage.eINSTANCE)
        }
        val IResourceServiceProvider resourceServiceProvider = injector.getInstance(IResourceServiceProvider)
        IResourceServiceProvider.Registry.INSTANCE.extensionToFactoryMap.put('ecore', resourceServiceProvider)
    }

}